import React, { useEffect, useState } from "react";

// Packages
import { useFormContext } from "react-hook-form";
import combineQuery from "graphql-combine-query";

// GraphQL
import { GET_MUNICIPALITIES_Q, GET_PROVINCES_Q, GET_SECTORS_Q, GET_COUNTRIES_Q, graphqlClient } from "@/graphql";

// My Elements
import { IOption } from "@/models";

// My Components
import { ErrorComponent, Select } from "@/components";
import SectionCover from "./SectionCover";
import TitleSection from "./TitleSection";
import SelectProfileImage from "./SelectProfileImage";

const PersonalInformation: React.FC = () => {
  const { register, errors, setValue } = useFormContext();

  const [provinces, setProvinces] = useState<IOption[]>([]);
  const [municipalities, setMunicipalities] = useState<IOption[]>([]);
  const [sectors, setSectors] = useState<IOption[]>([]);
  const [countries, setCountries] = useState<IOption[]>([]);

  async function getProvinces() {
    const { document: DOCUMENT_Q } = combineQuery("initialState").add(GET_PROVINCES_Q).add(GET_COUNTRIES_Q);

    interface IResponseGql {
      getCountries: IOption[];
      getProvinces: IOption[];
    }
    const { getProvinces, getCountries } = await graphqlClient<IResponseGql>({ query: DOCUMENT_Q });

    setProvinces(getProvinces);
    setCountries(getCountries);
  }

  useEffect(() => {
    getProvinces();
  }, []);

  return (
    <div className="mb-3 bg-white divide-y rounded-md">
      <TitleSection
        title="Información Personal"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur pariatur ex suscipit fugit explicabo animi."
      />
      <SelectProfileImage />
      <SectionCover>
        <div className="flex justify-between col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <div>
            <label htmlFor="name" className="text-sm font-medium select-none text-sec-text">
              Nombre <b className="text-danger-500 font-roboto">*</b>
            </label>
            <br />
            {/* <ErrorComponent name="name" error={localErrors} /> */}
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-6">
          <input
            id="name"
            type="text"
            className={`w-full form-control ${errors.name && "danger"}`}
            name="name"
            placeholder="Nombre"
            ref={register}
          />
          <ErrorComponent name="name" error={errors} />
        </div>
      </SectionCover>
      <SectionCover>
        <div className="flex justify-between col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <label htmlFor="lastname" className="text-sm font-medium select-none text-sec-text">
            Apellido <b className="text-danger-500 font-roboto">*</b>
          </label>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-6">
          <input
            id="lastname"
            type="text"
            className={`w-full form-control ${errors.lastname && "danger"}`}
            placeholder="Apellido"
            name="lastname"
            ref={register({
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
          />
          <ErrorComponent name="lastname" error={errors} />
        </div>
      </SectionCover>
      <SectionCover>
        <div className="flex justify-between col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <label className="text-sm font-medium select-none text-sec-text">
            Dirección <b className="text-danger-500 font-roboto">*</b>
          </label>
        </div>
        <div className="col-span-12 space-y-2 md:space-x-2 md:space-y-0 md:flex md:col-span-9 lg:col-span-8 xl:col-span-6">
          <div className="flex-1">
            <Select
              name="province"
              placeholder="Provincias"
              options={provinces}
              onChange={async ({ value }) => {
                const { getMunicipalities } = await graphqlClient<{ getMunicipalities: IOption[] }>({
                  query: GET_MUNICIPALITIES_Q,
                  variables: {
                    provinceId: value,
                  },
                });
                setMunicipalities(getMunicipalities);
                setValue("municipality", null);
                setValue("sector", null);
                setSectors([]);
              }}
            />
          </div>
          <div className="flex-1">
            <Select
              name="municipality"
              placeholder="Municipios"
              options={municipalities}
              onChange={async ({ value }) => {
                const { getSectors } = await graphqlClient<{ getSectors: IOption[] }>({
                  query: GET_SECTORS_Q,
                  variables: {
                    municipalityId: value,
                  },
                });
                setSectors(getSectors);
              }}
            />
          </div>
          <div className="flex-1">
            <Select name="sector" placeholder="Sectores" options={sectors} />
          </div>
        </div>
      </SectionCover>
      <SectionCover>
        <div className="flex justify-between col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <label htmlFor="nationality" className="text-sm font-medium select-none text-sec-text">
            Pais de Origen <b className="text-danger-500 font-roboto">*</b>
          </label>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-6">
          <Select name="nationality" placeholder="País de origen" options={countries} />
        </div>
      </SectionCover>
      <SectionCover>
        <div className="flex justify-between col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <label htmlFor="lastname" className="text-sm font-medium select-none text-sec-text">
            Fecha de nacimiento <b className="text-danger-500 font-roboto">*</b>
          </label>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-6">
          <input
            id="birthday"
            className={`w-full form-control ${errors.name && "danger"}`}
            type="date"
            name="birthday"
            ref={register}
          />
          <ErrorComponent name="birthday" error={errors} />
        </div>
      </SectionCover>
      <SectionCover>
        <div className="flex justify-between col-span-12 md:col-span-3 lg:col-span-5 md:flex-col">
          <label className="text-sm font-medium select-none text-sec-text">
            Sexo <b className="text-danger-500 font-roboto">*</b>
          </label>
        </div>
        <label htmlFor="m" className="flex col-span-4 lg:col-span-2 xl:col-span-1">
          <input
            id="m"
            type="radio"
            name="sex"
            className="mr-1 transform scale-95"
            value="M"
            ref={register}
            defaultChecked
          />
          <p>Hombre</p>
        </label>
        <label htmlFor="f" className="flex col-span-4 lg:col-span-2 xl:col-span-1">
          <input id="f" type="radio" name="sex" className="mr-1 transform scale-95" value="F" ref={register} />
          <p>Mujer</p>
        </label>
      </SectionCover>
    </div>
  );
};

export default PersonalInformation;
