import React, { useState } from "react";

// Packages
import { useForm, FormProvider } from "react-hook-form";
import { DebounceInput } from "react-debounce-input";
import { IFilterAgency } from "@/shared";

interface FormFilterAgencyProps {
  onSearch: (newFilter: IFilterAgency) => void;
}

const FormFilterAgency: React.FC<FormFilterAgencyProps> = ({ onSearch }) => {
  const methods = useForm();
  const [filterState, setFilterState] = useState<IFilterAgency>({
    name: "",
    occupation: "SALE",
    isProfessional: true,
  });

  async function onChange(newField: Record<string, string | boolean>) {
    const newFilter = {
      ...filterState,
      ...newField,
    };

    onSearch(newFilter);
    setFilterState(newFilter);
  }

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-12 gap-3">
        <div className="flex flex-col col-span-12 md:col-span-5 lg:col-span-4">
          <label htmlFor="brand" className="text-xs font-semibold text-gray-600">
            Nombre
          </label>
          <DebounceInput
            className="form-control"
            placeholder="Nombre de la agencía"
            minLength={4}
            debounceTimeout={500}
            onChange={e => onChange({ name: e.target.value })}
          />
        </div>
        {/* <div className="flex flex-col col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
          <label htmlFor="brand" className="text-xs font-semibold text-gray-600">
            Oficio
          </label>
          <div className="flex items-center h-full space-x-4">
            <label htmlFor="SALE" className="flex col-span-4 lg:col-span-2 xl:col-span-1">
              <input
                id="SALE"
                type="radio"
                name="occupation"
                className="mr-1 transform scale-95"
                value="SALE"
                defaultChecked
                onChange={e => onChange({ occupation: e.target.value })}
              />
              <p>Venta</p>
            </label>
            <label htmlFor="RENT" className="flex col-span-4 lg:col-span-2 xl:col-span-1">
              <input
                id="RENT"
                type="radio"
                name="occupation"
                className="mr-1 transform scale-95"
                value="RENT"
                onChange={e => onChange({ occupation: e.target.value })}
              />
              <p>Renta</p>
            </label>
          </div>
        </div> */}
        <div className="flex flex-col col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2">
          <label htmlFor="brand" className="text-xs font-semibold text-gray-600">
            Agencia
          </label>
          <div className="flex items-center h-full space-x-4">
            <label htmlFor="PROFESSIONAL" className="flex col-span-4 lg:col-span-2 xl:col-span-1">
              <input
                id="PROFESSIONAL"
                type="radio"
                name="isProfessional"
                className="mr-1 transform scale-95"
                value="PROFESSIONAL"
                defaultChecked
                onChange={() => onChange({ isProfessional: true })}
              />
              <p>Profesional</p>
            </label>
            <label htmlFor="PERSONAL" className="flex col-span-4 lg:col-span-2 xl:col-span-1">
              <input
                id="PERSONAL"
                type="radio"
                name="isProfessional"
                className="mr-1 transform scale-95"
                value="PERSONAL"
                onChange={() => onChange({ isProfessional: false })}
              />
              <p>Personal</p>
            </label>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormFilterAgency;
