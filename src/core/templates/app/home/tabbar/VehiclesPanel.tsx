import React from "react";

// My Components
import Options from "./VehiclePanel/Options";
import VehicleTable from "./VehiclePanel/VehicleTable";

const VehiclesPanel: React.FC = () => {
  return (
    <div>
      <Options />
      <VehicleTable />
    </div>
  );
};

export default VehiclesPanel;
