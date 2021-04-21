import React from "react";

// Redux
// import { useActions } from "@/store/hooks";

// My Components
import { TemplateStep } from "../TemplateStep";
import { FormPublication } from "./FormPublication";

export const PublicationStep: React.FC = () => {
  // const { addNewPostData } = useActions();

  function onSubmit() {
    // addNewPostData({})
  }

  return (
    <TemplateStep
      title="Describir Publicación"
      description="Agrega información para que tu vehículo sea más accesible por posibles interesados"
    >
      <FormPublication onSubmit={onSubmit} />
    </TemplateStep>
  );
};
