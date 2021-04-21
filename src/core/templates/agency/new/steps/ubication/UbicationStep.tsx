import React from "react";

// My Components
import { TemplateStepWizard } from "@/components";
import UbicationForm from "./UbicationForm";

export const UbicationStep: React.FC = () => {
  return (
    <TemplateStepWizard
      title="Ubicación"
      description="Agrega la dirección y geolocalización de tu agencía para que sea más fácil de encontrar."
    >
      <UbicationForm />
    </TemplateStepWizard>
  );
};
