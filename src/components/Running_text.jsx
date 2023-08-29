import styled from 'styled-components'
import { motion } from "framer-motion";
import { useState } from "react";

const words = [
  "hello",
  "Invest Smarter with Shared Ownership",
  "Your Pathway to Diversified and Accessible", 
  "Investments in Exquisite High-End Assets"
];

export default function Running_text() {
  const [toHide, setToHide] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = Array.from(words[currentWordIndex]);
  const letterDuration = 0.04;
  const letterStagger = letterDuration * 1.5;
  const wordVariants = {
    hidden: (length) => {
      console.log(length);
      return {
        x: "calc(100% - 10px)",
        transition: {
          staggerChildren: letterStagger,
          duration: length * letterStagger + letterDuration,
          staggerDirection: -1,
          ease: "linear",
          delay: 0.2,
          delayChildren: 0.2
        }
      };
    },
    visible: (length) => ({
      x: "0%",
      transition: {
        staggerChildren: letterStagger,
        duration: length * letterStagger + letterDuration,
        ease: "linear"
      }
    })
  };
  const letterVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: letterDuration
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: letterDuration
      }
    }
  };
  return (
    <RunningTextContainer>
    <div className="App">
      <motion.div className="word-wrapper">
        <motion.div
          className="word"
          initial="hidden"
          animate={toHide ? "hidden" : "visible"}
          custom={words[currentWordIndex].length}
          variants={wordVariants}
          onAnimationComplete={(definition) => {
            setToHide(!toHide);
            if (definition === "hidden") {
              // let nextIndex = 0;
              // if (currentWordIndex < words.length - 1) {
              //   nextIndex = currentWordIndex + 1;
              // }
              const nextIndex = (currentWordIndex + 1) % words.length;
              setCurrentWordIndex(nextIndex);
            }
          }}
        >
          {currentWord.map((letter, i) => (
            <motion.span key={i} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div className="circle"></motion.div>
      </motion.div>
    </div>
    </RunningTextContainer>
  );
}

const RunningTextContainer = styled.nav `

span {
    display: inline-block;
    min-width: 0.7ch;
  }

.App {
    font-family: sans-serif;
    text-align: center;
    display: flex;
    justify-content: top;
    align-items: start;
    flex-direction: column;
    gap: 40px;
    min-height: 100vh;
  }
  
  .word-wrapper {
    font-size: 3rem;
    letter-spacing: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    width: 70%;
    overflow: hidden;
  }
  .word {
    position: absolute;
    width: max-content;
    right: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-transform: capitalize;
  }
  
  .circle {
    width: 55px;
    aspect-ratio: 1;
    background: none;
    border-radius: 50%;
    z-index: 2;
  }
  
`