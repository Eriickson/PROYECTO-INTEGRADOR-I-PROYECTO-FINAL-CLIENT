import { useState } from "react";
import arraySort from "array-sort";
import transmissionsJson from "../assets/json/transmissions.json";
import colorsJson from "../assets/json/colors.json";
import tractionJson from "../assets/json/traction.json";
import fuelsJson from "../assets/json/fuels.json";
import conditionsJson from "../assets/json/conditions.json";
import categoriesJson from "../assets/json/categories.json";

const useDataVehicle = () => {
  const [typeTransmissions] = useState(arraySort(transmissionsJson, "label"));
  const [traction] = useState(arraySort(tractionJson, "label"));
  const [fuels] = useState(arraySort(fuelsJson, "label"));
  const [conditions] = useState(arraySort(conditionsJson, "label"));
  const [categories] = useState(arraySort(categoriesJson, "label"));
  const [colors] = useState(arraySort(colorsJson, "label"));

  return { typeTransmissions, traction, fuels, conditions, categories, colors };
};

export default useDataVehicle;
