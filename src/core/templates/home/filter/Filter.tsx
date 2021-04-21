import React, { useState } from "react";

// My Components
import { PanelComponent } from "@/components";
import FilterAgency from "./FilterAgency";
import FilterVehicle from "./FilterVehicle";

const Filter: React.FC = () => {
  const [filterSelected, setFilterSelected] = useState<"VEHICLE" | "AGENCY">("VEHICLE");

  return (
    <>
      <PanelComponent
        title={
          <>
            <div className="flex items-center">
              <button
                className={`text-lg font-semibold lg:text-xl ${filterSelected != "VEHICLE" && "text-sec-text"}`}
                onClick={() => setFilterSelected("VEHICLE")}
              >
                Busca tu vehículo
              </button>
              <b className="mx-2">-</b>
              <button
                className={`text-lg font-semibold lg:text-xl ${filterSelected != "AGENCY" && "text-sec-text"}`}
                onClick={() => setFilterSelected("AGENCY")}
              >
                Buscar Agencia
              </button>
            </div>
          </>
        }
      >
        <div>{filterSelected === "VEHICLE" ? <FilterVehicle /> : <FilterAgency />}</div>
      </PanelComponent>
    </>
  );
};

export default Filter;
