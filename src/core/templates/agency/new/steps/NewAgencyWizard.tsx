import React, { useState } from "react";

// Redux
import { useActions, useSelector } from "@/store/hooks";

// My Elements
import { IWizardStep } from "@/models";

// My Components
import { Wizard } from "@/components";
import { VerifyStep } from "./verify/VerifyStep";
import { AgencyDataStep } from "./agencyData/AgencyDataStep";
import ContactStep from "./contacts/ContactStep";
import { UbicationStep } from "./ubication/UbicationStep";

const NewAgencyWizard: React.FC = () => {
  const { wizardStep } = useSelector(store => store.agency.newAgency);
  const [currentStep, setCurrentStep] = useState<number>(wizardStep);
  const { changeStepWizard } = useActions();

  const [listSteps] = useState<IWizardStep[]>([
    {
      title: "Datos",
      Component: <AgencyDataStep onChange={onChange} />,
      nameForm: "form-agency-data",
    },
    {
      title: "Ubicación",
      Component: <UbicationStep />,
      nameForm: "form-ubication",
    },
    {
      title: "Contactos",
      Component: <ContactStep />,
      nameForm: "form-contacts",
    },
    {
      title: "Verificar",
      Component: <VerifyStep />,
      nameForm: "form-verify",
    },
  ]);

  function onChange() {
    currentStep < listSteps.length - 1 && setCurrentStep(currentStep + 1);
  }

  return (
    <div>
      <Wizard
        stepsList={listSteps}
        currentStep={wizardStep}
        onPrevStep={() => changeStepWizard(-1)}
        labelFinish="Crear Agencía"
      />
    </div>
  );
};

export default NewAgencyWizard;
