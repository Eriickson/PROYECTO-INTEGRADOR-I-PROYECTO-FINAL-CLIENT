import React, { useState } from "react";

// Styles and Icons
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons";

// Types and Interfaces
interface ModalProps {
  notCloseModalZone?: boolean;
  centerContent?: boolean;
  name: string;
  showCloseButton?: boolean;
  classesClose?: Array<string>;
}

interface UseModalReturn {
  Modal: React.FC;
  toogleModal: (value: boolean) => void;
}

export const useModal = ({
  notCloseModalZone,
  centerContent,
  name,
  showCloseButton,
  classesClose = [],
}: ModalProps): UseModalReturn => {
  const [state, setState] = useState<boolean>(false);

  // useEffect(() => {
  //   let statusBody = state ? "hidden" : "auto";
  //   document.body.style.overflowY = statusBody;
  // }, [state]);

  function toogleModal(value: boolean) {
    typeof value === "boolean" ? setState(value) : setState(!state);
  }

  const Modal: React.FC = ({ children }) => {
    const [stateInterno] = useState(state);
    return (
      <AnimatePresence>
        {stateInterno && (
          <motion.div
            className="fixed top-0 left-0 w-screen min-h-screen bg-black z-5000 bg-opacity-80"
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
            <div className="h-screen exterior">
              {showCloseButton && (
                <button
                  type="button"
                  className="p-3 bg-black bg-opacity-75 border border-black"
                  onClick={() => setState(false)}
                >
                  <IconX strokeWidth={1.5} className="w-6 h-6 text-white" />
                </button>
              )}

              <div
                role="button"
                className={`flex flex-col h-full p-3 overflow-auto interior w-full close-modal-zone-${name} ${
                  centerContent && "justify-center"
                }`}
                onClick={e => {
                  const { classList } = e.target as HTMLDivElement;
                  if (classList.contains(`close-modal-zone-${name}`)) {
                    if (!notCloseModalZone) {
                      setState(!state);
                    }
                  }
                  if ([...classesClose, "empty"].some(className => classList.contains(className))) {
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

  return { Modal, toogleModal };
};
