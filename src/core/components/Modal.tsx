import React, { useEffect } from "react";

// Styles and Icons
import { css } from "@emotion/core";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons";
import { useWindowSize } from "@/hooks";

// Types and Interfaces
export interface ModalProps {
  notCloseModalZone?: boolean;
  centerContent?: boolean;
  name?: string;
  closeButton?: boolean;
  classesClose?: string[];
  state: boolean;
  setState: (state: boolean) => void;
  noScroll?: boolean;
}

const StyledModal = {
  backgroundModal: css`
    background: rgba(0, 0, 0, 0.8);
  `,
};

export const Modal: React.FC<ModalProps> = ({
  children,
  notCloseModalZone,
  centerContent,
  name,
  closeButton,
  classesClose = [],
  state,
  setState,
  noScroll,
}) => {
  const { height } = useWindowSize();

  function closeModelEsc(event: KeyboardEvent) {
    event.key === "Escape" && setState(false);
  }

  useEffect(() => {
    if (noScroll) {
      const statusBody = state ? "hidden" : "auto";
      document.body.style.overflowY = statusBody;
    }

    if (typeof window !== "undefined" && state === true) window.addEventListener("keydown", closeModelEsc);
  }, [state]);

  return (
    <AnimatePresence>
      {state && (
        <motion.div
          className="fixed top-0 left-0 w-screen overflow-hidden z-5000"
          css={StyledModal.backgroundModal}
          initial={{
            opacity: 0,
            margin: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          style={{ height }}
        >
          <div className="h-screen exterior">
            {closeButton && (
              <button className="p-3 bg-black bg-opacity-75 border border-black" onClick={() => setState(false)}>
                <IconX strokeWidth={1.5} className="w-6 h-6 text-white" />
              </button>
            )}

            <div
              className={`flex flex-col h-full overflow-auto interior close-modal-zone-${name} ${
                centerContent && "justify-center"
              }`}
              onClick={e => {
                const target = e.target as HTMLTextAreaElement;
                if (target.classList.contains(`close-modal-zone-${name}`)) {
                  if (!notCloseModalZone) {
                    setState(!state);
                  }
                }
                if ([...classesClose, "empty"].some(className => target.classList.contains(className))) {
                  setState(!state);
                }
              }}
            >
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
