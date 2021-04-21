import React from "react";

// My Components
import { TemplateStepWizard } from "@/components";
import AgencyDataForm from "./AgencyDataForm";

interface AgencyDataStepProps {
  onChange: () => void;
}

export const AgencyDataStep: React.FC<AgencyDataStepProps> = () => {
  function onSubmit() {
    // changeStepWizard(1);
  }

  return (
    <TemplateStepWizard
      title="Datos de la agencia"
      description="Agrega los datos principales que identifiquen y que hagan única a tu agencia entre las demás."
    >
      <AgencyDataForm onSubmit={onSubmit} />
    </TemplateStepWizard>
  );
};
