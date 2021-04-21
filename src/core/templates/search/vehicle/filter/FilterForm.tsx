import React, { useEffect, useState } from "react";

// NextJS
import Router, { useRouter } from "next/router";

// Redux
import { useSelector } from "@/store/hooks";

// Packages
import { useForm, FormProvider } from "react-hook-form";
import combineQuery from "graphql-combine-query";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import numeral from "numeral";

// GraphQL
import {
  graphqlClient,
  GET_BRANDS_Q,
  GET_MODELS_Q,
  GET_PROVINCES_Q,
  GET_VEHICLE_CATEGORIES_Q,
  GET_CONDITIONS_Q,
  GET_TYPE_MODEL_Q,
  IGetBrandsPayload,
  IGetModelsPayload,
  IGetProvincesPayload,
  IGetVehicleCategoriesPayload,
  IGetConditionsPayload,
  IGetTypeModelPayload,
} from "@/graphql";

// My Elements
import { IOption } from "@/models";

// My Components
import { Select, Range } from "@/components";
import Conditions from "./Condition";
import DatePublication from "./DatePublication";

// Types and Interfaces

export interface IOnSearch {
  brand?: string;
  model?: string;
  typeModel?: string;
  vehicleCategory?: string;
  province?: string;
  condition?: string;
  datePublication?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
}

interface FilterFormProps {
  onSearch: (data: IOnSearch) => void;
}

// Variables and Constants
const schema = yup.object().shape({
  brand: yup.object().nullable().shape({
    value: yup.string(),
    label: yup.string(),
  }),
  model: yup.object().nullable().shape({
    value: yup.string(),
    label: yup.string(),
  }),
  typeModel: yup.object().nullable().shape({
    value: yup.string(),
    label: yup.string(),
  }),
  vehicleCategory: yup.object().nullable().shape({
    value: yup.string(),
    label: yup.string(),
  }),
  province: yup.object().nullable().shape({
    value: yup.string(),
    label: yup.string(),
  }),
  condition: yup.string(),
  publicationDate: yup.string(),
  price: yup.array().required(),
  year: yup.array().required(),
});

export const FilterForm: React.FC<FilterFormProps> = () => {
  const { foundVehicles } = useSelector(({ post }) => post);

  const { query } = useRouter();
  const [brands, setBrands] = useState<IOption[]>([]);
  const [models, setModels] = useState<IOption[]>([]);
  const [typeModels, setTypeModels] = useState<IOption[]>(foundVehicles?.typesModels || []);
  const [provinces, setProvinces] = useState<IOption[]>([]);
  const [conditions, setConditions] = useState<IOption[]>([]);
  const [vehicleCategories, setVehicleCategories] = useState<IOption[]>([]);
  const [defaultProvince, setDefaultProvince] = useState<IOption>();
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  async function initialState() {
    const { document: DOCUMENT } = combineQuery("initialState")
      .add(GET_PROVINCES_Q)
      .add(GET_BRANDS_Q)
      .add(GET_VEHICLE_CATEGORIES_Q)
      .add(GET_CONDITIONS_Q);

    const { getBrands, getProvinces, getVehicleCategories, getConditions } = await graphqlClient<
      IGetBrandsPayload &
        IGetModelsPayload &
        IGetProvincesPayload &
        IGetVehicleCategoriesPayload &
        IGetConditionsPayload &
        IGetTypeModelPayload
    >({
      query: DOCUMENT,
    });
    const defaultProvince = getProvinces.filter(
      ({ label }) => label.replace(/ /g, "-").toLowerCase() === String(query.province),
    )[0];
    setBrands(getBrands);
    setProvinces(getProvinces);
    setVehicleCategories(getVehicleCategories);
    setConditions(getConditions);
    setDefaultProvince(defaultProvince);
  }

  useEffect(() => {
    if (!brands.length) initialState();
    if (foundVehicles?.brandModels) setModels(foundVehicles?.brandModels);
    if (foundVehicles?.typesModels) setTypeModels(foundVehicles?.typesModels);
  }, [foundVehicles?.brandModels, foundVehicles?.typesModels]);

  return (
    <div>
      <FormProvider {...methods}>
        <form
          id="form-search"
          className="space-y-3"
          onSubmit={methods.handleSubmit(data => {
            const filter: IOnSearch = {
              minPrice: data.price[0],
              maxPrice: data.price[1],
              minYear: data.year[0],
              maxYear: data.year[1],
            };

            if (data.brand?.label !== "Todos" && data.brand?.label)
              Object.assign(filter, { brand: data.brand?.label.replace(/ /g, "-").toLowerCase() });
            if (data.model?.label) Object.assign(filter, { model: data.model?.label.replace(/ /g, "-").toLowerCase() });
            if (data.typeModel?.label)
              Object.assign(filter, { typeModel: data.typeModel?.label.replace(/ /g, "-").toLowerCase() });
            if (data.vehicleCategory?.label)
              Object.assign(filter, { category: data.vehicleCategory?.label.replace(/ /g, "-").toLowerCase() });
            if (data.province?.label)
              Object.assign(filter, { province: data.province?.label.replace(/ /g, "-").toLowerCase() });
            if (data.condition) Object.assign(filter, { condition: data.condition.replace(/ /g, "-").toLowerCase() });
            if (data.createdAt) Object.assign(filter, { createdAt: `${data.createdAt}`.replace(/\./g, "-") });
            // onSearch(filter);

            Router.push({ pathname: "/search/vehicle", query: { ...filter } });
          })}
        >
          <div>
            <label className="mb-2 text-sm font-light text-sec-text" htmlFor="brand">
              Marca
            </label>
            <Select
              name="brand"
              options={[{ label: "Todos", value: "ALL" }, ...brands]}
              placeholder="Marca"
              onChange={async brand => {
                const { getModels } = await graphqlClient<{ getModels: IOption[] }>({
                  query: GET_MODELS_Q,
                  variables: { idBrand: brand.value },
                });
                setModels(getModels);
                setTypeModels([]);
                methods.setValue("model", null);
                methods.setValue("typeModels", null);
              }}
            />
          </div>
          <div>
            <label className="mb-2 text-sm font-light text-sec-text" htmlFor="model">
              Modelo
            </label>
            <Select
              name="model"
              options={models}
              placeholder="Modelo"
              onChange={async model => {
                const { getTypeModel } = await graphqlClient<{ getTypeModel: IOption[] }>({
                  query: GET_TYPE_MODEL_Q,
                  variables: { idModel: model.value },
                });

                setTypeModels(getTypeModel);
                methods.setValue("typeModels", null);
              }}
            />
          </div>
          <div>
            <label className="mb-2 text-sm font-light text-sec-text" htmlFor="Model">
              Tipos de modelos
            </label>
            <Select name="typeModel" options={typeModels} placeholder="Tipo de modelos" />
          </div>
          <div>
            <label className="mb-2 text-sm font-light text-sec-text" htmlFor="vehicleCategory">
              Categoria
            </label>
            <Select name="vehicleCategory" options={vehicleCategories} isSearchable={false} />
          </div>
          <div>
            <label className="mb-2 text-sm font-light text-sec-text" htmlFor="province">
              Provincia
            </label>
            <Select
              name="province"
              options={provinces}
              defaultValue={{ label: "La Vega", value: "6043781c7c758d479cf297a7" }}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <span className="text-sm font-light text-sec-text">Precio</span>
              <p className="text-xs font-medium text-main-text">
                RD$ {numeral(methods.watch("price")?.length && methods.watch("price")[0]).format("0,0")} - RD${" "}
                {numeral(methods.watch("price")?.length && methods.watch("price")[1]).format("0,0")}
              </p>
            </div>
            <Range
              min={50000}
              max={3000000}
              step={50000}
              value={[1]}
              name={"price"}
              control={methods.control}
              defaultValue={[parseInt(String(query.minPrice)) || 50000, parseInt(String(query.maxPrice)) || 3000000]}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <span className="text-sm font-light text-sec-text">Año</span>
              <p className="text-xs font-medium text-main-text">
                {methods.watch("year")?.length && methods.watch("year")[0]} -{" "}
                {methods.watch("year")?.length && methods.watch("year")[1]}
              </p>
            </div>
            <Range
              name={"year"}
              control={methods.control}
              min={1960}
              max={new Date().getFullYear() + 1}
              step={1}
              defaultValue={[
                parseInt(String(query.minYear)) || 1960,
                parseInt(String(query.maxYear)) || new Date().getFullYear() + 1,
              ]}
            />
          </div>
          {/* <DatePublication register={register} />*/}
          <Conditions conditions={conditions} />
          <DatePublication />
          <button className="w-full btn pri">Aplicar filtro</button>
        </form>
      </FormProvider>
    </div>
  );
};
