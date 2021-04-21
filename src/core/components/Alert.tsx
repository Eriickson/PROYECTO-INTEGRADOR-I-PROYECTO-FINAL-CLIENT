import React, { useEffect, useState } from "react";

// Styles and Icons
import { IconX, IconCheck, IconCircleX, IconAlertTriangle } from "@tabler/icons";

// My Components
import { Modal } from "./Modal";

// Types and Interfaces
export type TypeAlert = "ERROR" | "DANGER" | "WARNING" | "SUCCESS";

interface ModalAlertProps {
  closeModalZone?: boolean;
  name: string;
  buttonClose?: boolean;
  type?: TypeAlert;
  title: string;
  message: string;
  state: boolean;
  setState: (value: boolean) => void;
  labelBtnPri?: string;
  labelBtnSec?: string;
  onBtnPri?: () => void;
  onBtnSec?: () => void;
}

export const Alert: React.FC<ModalAlertProps> = ({
  closeModalZone = false,
  name,
  buttonClose,
  type,
  title,
  message,
  state,
  setState,
  labelBtnPri,
  labelBtnSec,
  onBtnPri,
  onBtnSec,
}) => {
  const [typeAlert, setTypeAlert] = useState({
    Icon: IconCheck,
    containIconClass: "bg-brand-100 text-brand-500 border-brand-300",
    buttonClass: "brand",
    borderAlert: "border-brand-600",
  });

  useEffect(() => {
    switch (type) {
      case "DANGER":
        setTypeAlert({
          Icon: IconCircleX,
          containIconClass: "bg-danger-100 text-danger-500 border-danger-300",
          buttonClass: "danger",
          borderAlert: "border-danger-600",
        });
        break;
      case "WARNING":
        setTypeAlert({
          Icon: IconAlertTriangle,
          containIconClass: "bg-warning-100 text-warning-500 border-warning-300",
          buttonClass: "warning",
          borderAlert: "border-warning-600",
        });
        break;
      case "SUCCESS":
        setTypeAlert({
          Icon: IconCheck,
          containIconClass: "bg-success-100 text-success-500 border-success-300",
          buttonClass: "success",
          borderAlert: "border-success-600",
        });
        break;

      default:
        break;
    }

    // const queryName = Object.keys(response || {});
    // if (queryName.length > 0) {
    //   const result = response[queryName.toString()] || {};

    //   if (result.error) {
    //     const { error } = result;
    //     toggle();
    //     return;
    //   }
    // }
  }, []);

  return (
    <>
      <Modal name={`alert-${name}`} state={state} setState={setState} centerContent notCloseModalZone={!closeModalZone}>
        <div className="inline-block w-full max-w-lg mx-auto overflow-hidden text-left align-bottom transition-all transform bg-white rounded-none shadow-xl sm:my-8">
          <div className="pt-3 mb-4">
            <div className="flex justify-end">
              {buttonClose && (
                <button type="button" onClick={() => setState(false)}>
                  <IconX className="w-6 h-6 duration-100 opacity-75 text-sec-text hover:opacity-100" />
                </button>
              )}
            </div>
            <div className="px-3 mt-1 sm:flex sm:items-start">
              <div
                className={`mx-auto border flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 ${typeAlert.containIconClass}`}
              >
                <typeAlert.Icon />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-3 sm:text-left">
                <div className="flex justify-center sm:justify-start">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900" id="modal-headline">
                    {title}
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-5 text-gray-500">{message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button type="button" className={`btn w-full ${typeAlert.buttonClass}`} onClick={onBtnPri}>
                {labelBtnPri}
              </button>
            </span>
            {labelBtnSec && <button onClick={onBtnSec}>{labelBtnSec}</button>}
          </div>
        </div>
      </Modal>
    </>
  );
};
