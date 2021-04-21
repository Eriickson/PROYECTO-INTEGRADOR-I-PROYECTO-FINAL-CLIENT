import React from "react";

// My Components
import { MainLayout } from "@/layouts";
import NewPostWizard from "./steps/NewPostWizard";

export const NewPostTemplate: React.FC = () => {
  return (
    <MainLayout>
      <NewPostWizard />
    </MainLayout>
  );
};
