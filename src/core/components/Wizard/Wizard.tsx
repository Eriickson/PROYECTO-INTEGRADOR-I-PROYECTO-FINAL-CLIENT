import React from "react";

// My Elements
import { IWizardStep } from "@/models";

// My Components
import ContainerComponentWizard from "./ContainerComponentWizard";
import StepIndicator from "./StepIndicator";

// Types and Interfaces
interface WizardProps {
  stepsList: IWizardStep[];
  currentStep: number;
  onPrevStep: () => void;
  labelFinish?: string;
  // onNextStep: () => void;
}

export const Wizard: React.FC<WizardProps> = ({ stepsList, currentStep, onPrevStep, labelFinish = "Completado" }) => {
  return (
    <div>
      <StepIndicator stepsList={stepsList} currentStep={currentStep} />
      <ContainerComponentWizard stepsList={stepsList} currentStep={currentStep} />
      <div className="flex justify-end">
        <button className="btn" onClick={() => currentStep !== 0 && onPrevStep()} disabled={currentStep === 0}>
          Anterior
        </button>
        <button form={stepsList[currentStep]?.nameForm} className="ml-2 btn pri">
          {stepsList.length === currentStep + 1 ? labelFinish : "Siguiente"}
        </button>
      </div>
    </div>
  );
};
