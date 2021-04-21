import React from "react";

// My Components
import { TemplateStepWizard } from "@/components";
import ContactsForm from "./ContactsForm";

const ContactStep: React.FC = () => {
  return (
    <TemplateStepWizard
      title="Contactos"
      description="Agrega las diferentes vías en que un cliente se puede comunicar con el personal de la empresa."
    >
      <ContactsForm />
    </TemplateStepWizard>
  );
};

export default ContactStep;
