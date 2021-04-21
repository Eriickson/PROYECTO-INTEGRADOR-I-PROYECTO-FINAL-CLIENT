import React from "react";

// My Elements
import NewAgencyWizard from "./steps/NewAgencyWizard";

// My Components
import { MainLayout } from "@/layouts";

export const NewAgencyTemplate: React.FC = () => {
  return (
    <MainLayout>
      <NewAgencyWizard />
    </MainLayout>
  );
};
