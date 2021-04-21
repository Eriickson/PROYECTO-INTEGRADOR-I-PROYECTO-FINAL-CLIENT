import React from "react";

// Styles and Icons
import { css, keyframes } from "@emotion/core";
import { AnimatePresence, motion } from "framer-motion";

// Variables and Constants
const bigSqrShrink = keyframes`
    0% {
      transform: scale(1)
    }
    90% {
      transform: scale(1)

    }
    100% {
      transform: scale(0.5)
    }
  `;

const drop2 = keyframes`
    0% {
      transform: translateY(-50px)
    }
    25% {
      transform: translate(0)
    }
    100% {
      transform: translate(0)
    }
  `;
const drop3 = keyframes`
0% {
  transform: translateY(-50px)
}
  50% {
    transform: translate(0)
  }
  100% {
    transform: translate(0)
  }`;
const drop4 = keyframes`
0% {
  transform: translateY(-50px)
}
  75% { 
    transform: translate(0)
  }
  100% { 
    transform: translate(0)
  }`;

interface IScreenLoaderProps {
  msg?: string;
  isLoading: boolean;
}

export const ScreenLoader: React.FC<IScreenLoaderProps> = ({ msg, isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black z-5000 bg-opacity-80">
            <div className="flex flex-col items-center">
              <div className="mb-5 transform scale-125">
                <div
                  className="group"
                  css={css`
                    position: relative;
                    display: inline-block;
                    line-height: 16px;
                  `}
                ></div>
                <div
                  className="bigSqr"
                  css={css`
                    position: relative;
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    overflow: hidden;
                    transform-origin: bottom left;
                    animation: ${bigSqrShrink} 1.5s linear infinite;
                  `}
                >
                  <div
                    className="square first bg-pri-500"
                    css={css`
                      position: absolute;
                      width: 20px;
                      height: 20px;
                      left: 0px;
                      top: 20px;
                    `}
                  ></div>
                  <div
                    className="square second "
                    css={css`
                      position: absolute;
                      width: 20px;
                      height: 20px;
                      background: #fff;
                      left: 20px;
                      top: 20px;

                      animation: ${drop2} 1.5s linear infinite;
                    `}
                  ></div>
                  <div
                    className="square third "
                    css={css`
                      position: absolute;
                      width: 20px;
                      height: 20px;
                      background: #fff;
                      left: 0px;
                      top: 0px;
                      animation: ${drop3} 1.5s linear infinite;
                    `}
                  ></div>
                  <div
                    className="square fourth "
                    css={css`
                      position: absolute;
                      width: 20px;
                      height: 20px;
                      background: #fff;
                      left: 20px;
                      top: 0px;
                      animation: ${drop4} 1.5s linear infinite;
                    `}
                  ></div>
                </div>
              </div>
              <div
                className="text"
                css={css`
                  line-height: 16px;
                  font-family: "Open Sans", "Roboto", Arial, sans-serif;
                  font-weight: 400;
                  color: #fff;
                  display: block;
                  margin: 10px auto;
                  padding: 3px;
                `}
              >
                <h3 className="text-xl font-semibold animate-pulse"> {msg ? `${msg} ...` : "Cargando..."}</h3>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
