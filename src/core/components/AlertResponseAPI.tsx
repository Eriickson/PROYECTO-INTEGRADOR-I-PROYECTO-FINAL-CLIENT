import React, { useEffect, useState } from "react";

// Hooks
import { useToggle } from "src/hooks";

// My Components
import { Alert, TypeAlert } from "./Alert";

// Types and Interfaces
export interface IResponseApi {
  title: string;
  message: string;
  name: string;
  type: TypeAlert;
  labelBtnPri: string;
}
interface AlertResponseApiProps {
  response?: IResponseApi;
  onBtnPri: () => void;
}

export const AlertResponseApi: React.FC<AlertResponseApiProps> = ({ response, onBtnPri }) => {
  const [responseState, setResponseState] = useState<IResponseApi>();
  const { value, toggle } = useToggle(false);

  useEffect(() => {
    if (response) {
      setResponseState(response);
      toggle();
    }
  }, [response]);

  return (
    <div>
      <Alert
        state={value}
        setState={toggle}
        name={responseState?.name || ""}
        title={responseState?.title || ""}
        message={responseState?.message || ""}
        type={responseState?.type}
        labelBtnPri={responseState?.labelBtnPri}
        onBtnPri={onBtnPri}
      />
    </div>
  );
};
