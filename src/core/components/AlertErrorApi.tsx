import React, { useEffect, useState } from "react";

// Hooks
import { useToggle } from "src/hooks";

// My Components
import { Alert } from "./Alert";

// Types and Interfaces
export interface IAlertErrorApi {
  title: string;
  message: string;
  name: string;
  labelBtnPri: string;
}
interface AlertErrorApiProps {
  response?: IAlertErrorApi | null;
}

export const AlertErrorApi: React.FC<AlertErrorApiProps> = ({ response }) => {
  const [responseState, setResponseState] = useState<IAlertErrorApi>();
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
        type="ERROR"
        labelBtnPri={responseState?.labelBtnPri}
        onBtnPri={() => toggle()}
      />
    </div>
  );
};
