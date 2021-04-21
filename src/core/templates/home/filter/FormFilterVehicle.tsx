import React, { useEffect, useState } from "react";

// Packages
import { useForm, FormProvider } from "react-hook-form";

// GraphQL
import { GET_BRANDS_Q, GET_MODELS_Q, graphqlClient } from "@/graphql";

// My Elements
import { IOption } from "@/models";
import { getYears } from "@/utils";

// My Components
import { Select } from "@/components";

export interface IFilterPost {
  brand: IOption;
  model: IOption;
  minYear: IOption;
  maxYear: IOption;
}

interface FormFilterVehicleProps {
  onSearch: (data: IFilterPost) => void;
}

const FormFilterVehicle: React.FC<FormFilterVehicleProps> = ({ onSearch: onSearch }) => {
  const [brands, setBrands] = useState<IOption[]>([]);
  const [models, setModels] = useState<IOption[]>([]);
  const [minYear, setMinYear] = useState(1960);
  const { years, yearsBetween } = getYears(minYear);

  const methods = useForm();

  async function getBrands() {
    const { getBrands } = await graphqlClient<{ getBrands: IOption[] }>({ query: GET_BRANDS_Q });

    setBrands(getBrands);
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-12 gap-3" onSubmit={methods.handleSubmit(onSearch)}>
        <div className="flex flex-col col-span-12 md:col-span-6 lg:col-span-3">
          <label htmlFor="brand" className="text-xs font-semibold text-gray-600">
            Marca
          </label>
          <Select
            name="brand"
            options={brands}
            onChange={async brand => {
              const { getModels } = await graphqlClient<{ getModels: IOption[] }>({
                query: GET_MODELS_Q,
                variables: { idBrand: brand.value },
              });
              setModels(getModels);
              methods.setValue("model", null);
            }}
          />
        </div>
        <div className="flex flex-col col-span-12 md:col-span-6 lg:col-span-3">
          <label htmlFor="model" className="text-xs font-semibold text-gray-600">
            Modelo
          </label>
          <Select name="model" options={models} />
        </div>
        <div className="flex flex-col col-span-6 md:col-span-4 lg:col-span-2">
          <label htmlFor="minYear" className="text-xs font-semibold text-gray-600">
            Año Mín.
          </label>
          <Select
            name="minYear"
            options={years}
            onChange={({ value }) => {
              if (methods.getValues("maxYear") && value > methods.getValues("maxYear").value) {
                methods.setValue("maxYear", {
                  label: String(value),
                  value: parseInt(String(value)),
                });
              }
              setMinYear(parseInt(String(value)));
            }}
          />
        </div>
        <div className="flex flex-col col-span-6 md:col-span-4 lg:col-span-2">
          <label htmlFor="maxYear" className="text-xs font-semibold text-gray-600">
            Año Máx.
          </label>
          <Select name="maxYear" options={yearsBetween} />
        </div>
        <div className="flex flex-col col-span-12 md:col-span-4 lg:col-span-2">
          <label className="invisible hidden text-xs md:block" htmlFor="">
            Boton Buscar.
          </label>
          <button className="w-full btn pri">Buscar</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormFilterVehicle;
