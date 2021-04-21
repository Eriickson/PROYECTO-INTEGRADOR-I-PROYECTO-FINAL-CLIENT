import React from "react";

// My Elements
import { IWizardStep } from "@/models";

// Types and Interfaces
interface ContainerComponentWizardProps {
  stepsList: IWizardStep[];
  currentStep: number;
}

const ContainerComponentWizard: React.FC<ContainerComponentWizardProps> = ({ stepsList, currentStep }) => {
  return (
    <div>
      {stepsList.map(
        ({ Component }, current) =>
          current === currentStep && <React.Fragment key={current}>{Component}</React.Fragment>,
      )}
    </div>
  );
};

export default ContainerComponentWizard;
