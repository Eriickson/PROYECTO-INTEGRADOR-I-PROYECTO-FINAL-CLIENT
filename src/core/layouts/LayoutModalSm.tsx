import { LogoIcon, Modal } from "@/components";
import Link from "next/link";
import React from "react";

// My Elements
import { useWindowSize } from "@/hooks";

interface LayoutModalSmProps {
  state: boolean;
  setState: (state: boolean) => void;
}

export const LayoutModalSm: React.FC<LayoutModalSmProps> = ({ state, setState, children }) => {
  const { height } = useWindowSize();

  return (
    <>
      <Modal noScroll name="modal-screen" state={state} setState={setState}>
        <div
          className="flex flex-col items-center justify-between h-full bg-bg"
          style={{
            height,
          }}
        >
          <div className="z-10 w-full py-3 pr-2 bg-white shadow">
            <div className="container">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <a>
                    <LogoIcon className="w-48 md:w-56 lg:64" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full py-3 overflow-auto">
            <div className="container max-h-max">{children}</div>
          </div>
          <button className="w-full btn pri empty borderless lg" onClick={() => setState(false)}>
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  );
};
