export default class BubblesCanvas {
    constructor(options) {
      this.options = options;
  
      this.resizeCanvas = this.resizeCanvas.bind(this);
      this.update = this.update.bind(this);
  
      this.setCanvas();
  
      this.previousPosition = window.scrollY;
      // -1 for down and 1 if up
      this.scrollDirection = 0;
  
      this.started = true;
      this.addEventListeners();
    }
  
    addEventListeners() {
      new ResizeObserver(this.resizeCanvas).observe(this.canvas);
      window.addEventListener("scroll", this.update);
    }
  
    setCanvas() {
      this.canvas = this.options.canvas;
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;
      this.ctx = this.canvas.getContext("2d");
      this.ctx.lineWidth = "2";
      this.ctx.strokeStyle = "white";
      this.ctx.fillStyle = "white";
      this.ctx.beginPath();
      this.ctx.rect(this.canvas.width / 2, this.canvas.height / 2, 10, 10);
      this.ctx.stroke();
    }
  
    resizeCanvas() {
      this.setCanvas();
      this.createBubbles();
      this.drawBubbles();
    }
  
    start() {
      this.started = true;
    }
  
    stop() {
      this.started = false;
    }
  
    createBubbles() {
      this.bubbleArray = [];
      let bubbleCount = Math.floor(
        this.options.bubbleDensity *
          ((this.canvas.width * this.canvas.height) / 4000)
      );
      for (let i = 0; i < bubbleCount; i++) {
        this.createBubble(i);
      }
    }
  
    createBubble(i) {
      const size = Math.floor(
        Math.random() *
          (this.options.bubbleSize[1] - this.options.bubbleSize[0]) +
          this.options.bubbleSize[0]
      );
  
      const opacity =
        Math.random() *
          (this.options.bubbleOpacity[1] - this.options.bubbleOpacity[0]) +
        this.options.bubbleOpacity[0];
  
      const velocity = {
        x: 0,
        y:
          Math.random() *
            (this.options.bubbleVelocityY[1] - this.options.bubbleVelocityY[0]) +
          this.options.bubbleVelocityY[0]
      };
  
      const position = {
        x: Math.floor(Math.random() * this.canvas.width - size / 2),
        y: Math.floor(Math.random() * this.canvas.height)
      };
  
      const text = this.options.bubbleText[
        Math.floor(Math.random() * (this.options.bubbleText.length - 1))
      ];
  
      const bubble = new Bubble({ size, opacity, velocity, position, text });
      this.bubbleArray.push(bubble);
    }
  
    update() {
      if (!this.started) return;
      this.scrollDirection = this.previousPosition - window.scrollY < 0 ? 1 : -1;
      this.previousPosition = window.scrollY;
      this.updateBubbles(this.scrollDirection);
      this.drawBubbles();
    }
  
    drawBubbles() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i = 0; i < this.bubbleArray.length; i++) {
        this.bubbleArray[i].draw(this.ctx);
      }
    }
  
    updateBubbles(scrollDirection) {
      for (let i = 0; i < this.bubbleArray.length; i++) {
        this.bubbleArray[i].update(this.canvas, scrollDirection);
      }
    }
  }
  
  class Bubble {
    constructor({ position, velocity, opacity, size, text }) {
      this.position = position;
      this.velocity = velocity;
      this.opacity = opacity;
      this.size = size;
      this.text = text;
    }
  
    draw(ctx) {
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.font = `${this.size}px Arial`;
      ctx.fillText(
        this.text,
        this.position.x - this.size / 2,
        this.position.y - this.size / 2
      );
      ctx.stroke();
    }
  
    update(canvas, direction) {
      if (this.position.y < 0 - this.size) {
        this.position.y = canvas.height + this.size;
      } else if (this.position.y > canvas.height + this.size) {
        this.position.y = 0 - this.size;
      } else {
        this.position.y -= this.velocity.y * direction;
      }
    }
  }
  