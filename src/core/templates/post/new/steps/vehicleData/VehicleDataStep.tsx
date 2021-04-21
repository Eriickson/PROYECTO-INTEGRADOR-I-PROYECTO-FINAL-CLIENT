import React from "react";

// My Components
import { TemplateStep } from "../TemplateStep";
import VehicleDataForm from "./VehicleDataForm";

export const VehicleDataStep: React.FC = () => {
  return (
    <TemplateStep title="Describir vehículo" description="Completa todos los campos con los datos que se te piden">
      <VehicleDataForm />
    </TemplateStep>
  );
};
