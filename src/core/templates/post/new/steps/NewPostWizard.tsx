import React, { useState } from "react";

// Redux
import { useActions, useSelector } from "@/store/hooks";

// My Elements
import { IWizardStep } from "@/models";

// My Components
import { Wizard } from "@/components";
import { ImagesStep } from "./images/ImagesStep";
import { ListingStep } from "./listing/ListingStep";
import { PublicationStep } from "./publication/PublicationStep";
import { VehicleDataStep } from "./vehicleData/VehicleDataStep";
import { VerifyStep } from "./verify/VerifyStep";

const NewPostWizard: React.FC = () => {
  const { wizardStep } = useSelector(store => store.post.newPost);
  const { changeStepWizardPost } = useActions();
  const [listSteps] = useState<IWizardStep[]>([
    {
      title: "Describir vehículo",
      Component: <VehicleDataStep />,
      nameForm: "form-description-vehicle",
    },
    {
      title: "Listados",
      Component: <ListingStep />,
      nameForm: "form-listing",
    },
    {
      title: "Publicacion",
      Component: <PublicationStep />,
      nameForm: "form-publication",
    },
    {
      title: "Agregar imágenes",
      Component: <ImagesStep />,
      nameForm: "form-images",
    },
    {
      title: "Verificar datos",
      Component: <VerifyStep />,
      nameForm: "form-verify",
    },
  ]);

  return (
    <div>
      <Wizard
        stepsList={listSteps}
        currentStep={wizardStep}
        onPrevStep={() => changeStepWizardPost(-1)}
        labelFinish="Publicar"
      />
    </div>
  );
};

export default NewPostWizard;
