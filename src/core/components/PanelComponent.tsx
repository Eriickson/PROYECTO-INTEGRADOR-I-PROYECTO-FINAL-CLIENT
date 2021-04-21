import React from "react";

// My Components
import { Card } from "@/components";

// Types and Interfaces
interface PanelComponentProps {
  title: string | React.ReactElement;
  notBorderTop?: boolean;
}

export const PanelComponent: React.FC<PanelComponentProps> = ({ title, notBorderTop, children }) => {
  return (
    <Card notBorderTop={notBorderTop}>
      <div>
        <div className="pb-2 mb-2 border-b border-pri-300">
          {typeof title === "string" && (
            <h3 className="text-lg text-pri-500">
              <b className="mr-2">{title}</b>
            </h3>
          )}
          {typeof title !== "string" && <div>{title}</div>}
        </div>
        <div>{children}</div>
      </div>
    </Card>
  );
};
