import React from "react";

// My Components
import { MainLayout } from "@/layouts";
import { Filter } from "./filter/Filter";
import ResultsList from "./results/Results";

export const VehicleTemplate: React.FC = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-2">
        <Filter />
        <div className="col-span-12 md:col-span-8 xl:col-span-9">
          <ResultsList />
        </div>
      </div>
    </MainLayout>
  );
};
