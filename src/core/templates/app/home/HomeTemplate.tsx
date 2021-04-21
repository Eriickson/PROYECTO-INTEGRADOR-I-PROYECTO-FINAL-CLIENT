import React from "react";

// My Components
import { MainLayout } from "@/layouts";
import Dashboard from "./Dashboard";

export const AppTemplate: React.FC = () => {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
};
