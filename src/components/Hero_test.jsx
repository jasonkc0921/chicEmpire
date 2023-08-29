import React, { useState, useEffect, useRef } from "react";
import { useSpring } from "react-spring/web";
import UseScrollCallback from "./UseScrollCallBack";
import styled from 'styled-components'

const canvasFont = "120px Gravitas One";
const lineHeight = 1.35;
const canvasColor = "#fff";

function initCanvas(ctx) {
  ctx.save();
  ctx.fillStyle = canvasColor;
  ctx.font = canvasFont;
  ctx.lineJoin = "round";
  ctx.textAlign = "center";
}

function drawStroke(ctx, text, x, y) {
  ctx.strokeText(text, x, y);
  ctx.fillText(text, x, y);
}

function Canvas() {
  const hasWindow = typeof window !== "undefined"; // safeguard for ssr using fallback guesstimate sizes
  let w = useRef(hasWindow ? window.innerWidth : 1280);
  let h = useRef(hasWindow ? window.innerHeight : 960);

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isEntering, setIsEntering] = useState(true);

  // Canvas set up. runs once fonts have loaded
  useEffect(() => {
    ctxRef.current = canvasRef.current.getContext("2d");
    initCanvas(ctxRef.current);
  }, []);

  // resize handler // TODO: debounce
  useEffect(() => {
    const handleResize = function () {
      // need to re-measure
      w.current = window.innerWidth;
      h.current = window.innerHeight;
      ctxRef.current.canvas.width = w.current;
      ctxRef.current.canvas.height = h.current;
      initCanvas(ctxRef.current);
    };

    handleResize();

    if (!hasWindow) return;
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hasWindow]);

  const [, set] = useSpring(() => ({
    st: 0,
    from: { st: -20 },
    onFrame: ({ st }) => {
      const ctx = ctxRef.current;
      if (!ctx) return null;

      // dont bother continuing if the textstroke is already covering the screen
      // if (st > 1000) return // magic number

      const x = w.current * 0.5;
      const y = h.current * 0.5 - 100; // should probably be something based of winheight

      ctx.fillStyle = canvasColor;
      ctx.font = canvasFont;
      ctx.lineWidth = Math.abs(st);

      // clear the canvas https://stackoverflow.com/a/50569351/2255980
      ctx.globalCompositeOperation = "copy";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "destination-out";

      drawStroke(ctx, "HEFTY", x, y);
      drawStroke(ctx, "BEAST", x, y * lineHeight);

      // initial build up animation
      // could work better, it's a problem when text overlaps
      if (st < 0) {
        // ctx.globalCompositeOperation = "xor";
        // ctx.strokeStyle = canvasColor;
        ctx.strokeText("HEFTY", x, y);
        ctx.strokeText("BEAST", x, y * lineHeight);
      }

      if (st >= 0) {
        setIsEntering(false);
      } else {
        setIsEntering(true);
      }
    },

    config: {
      mass: 1,
      tension: 220,
      friction: 40
    }
  }));

  UseScrollCallback((st) => set({ st }));

  return (
    <canvas
      ref={canvasRef}
      className="canvas"
      style={{
        // needed to fix glitchy outlines
        filter: isEntering ? "brightness(160%)" : "none"
      }}
    />
  );
}

function Hero_test() {
  return (
    <HeroContainer>
    <div className="App">
      <Canvas />
      <img sr="../images/luxury_items.png" alt="" className="img" />

      <section className="container">
        <p>
          The Everything bagel was warm enough but I wouldn’t say it was hot. No
          matter, it still had a fresh soft pull to it and a bit of a crust. I
          might say it was a little too soft. I would have liked a bit more
          bite. But it was incredibly fresh and gives a good sense of what the
          texture of a real untoasted New York bagel should be.
        </p>
      </section>
    </div>
    </HeroContainer>
  );
}

export default Hero_test;

const HeroContainer = styled.nav`
html {
    box-sizing: inherit;
  }
  
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
  }
  
  body {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    color: #131920;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  }
  
  _::-webkit-full-page-media,
  body {
    min-height: -webkit-fill-available;
  }
  
  .container {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 3.5rem 3.5rem;
  }
  
  .img {
    margin-bottom: 5rem;
    width: 100%;
    height: 150vh;
    object-fit: cover;
  }
  
  p {
    margin: 0 0 1rem;
  }
  
  .canvas {
    /* cover the entire viewport */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;
  }
  
  /* firefox can't handle filters on canvas */
  @-moz-document url-prefix() {
    .canvas {
      filter: none !important;
    }
  }

`