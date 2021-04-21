import React, { useState } from "react";

// NextJS
import Router from "next/router";

// My Components
import FormFilterVehicle, { IFilterPost } from "./FormFilterVehicle";
import { ScreenLoader } from "@/components";

const FilterVehicle: React.FC = () => {
  const [isLoading] = useState(false);

  async function onSearch(data: IFilterPost) {
    const { brand, model, minYear, maxYear } = data;
    const filter = {};

    if (brand) Object.assign(filter, { brand: brand.label.replace(/ /, "-").toLowerCase() });
    if (model) Object.assign(filter, { model: model.label.replace(/ /, "-").toLowerCase() });
    if (minYear) Object.assign(filter, { minYear: minYear.value });
    if (maxYear) Object.assign(filter, { maxYear: maxYear.value });

    Router.push({ pathname: "/search/vehicle", query: filter });
  }

  return (
    <div>
      <FormFilterVehicle onSearch={onSearch} />
      <ScreenLoader msg="Buscando publicaciones" isLoading={isLoading} />
    </div>
  );
};

export default FilterVehicle;
