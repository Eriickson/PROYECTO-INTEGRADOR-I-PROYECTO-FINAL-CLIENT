import React, { useState } from "react";

// Packages
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Hooks
import { useSelector } from "src/store/hooks";

// My Elements
import { IOption } from "@/models";

// My Components
import { LabelInput, Select, validateSelectYup } from "@/components";

// Variables and Constants
const schema = yup.object().shape({
  name: yup.string().required("Campo requerido"),
  lastanme: yup.string().required("Campo requerido"),
  provinces: validateSelectYup(),
  municipality: validateSelectYup(),
  sector: validateSelectYup(),
  nationality: validateSelectYup(),
  birthday: yup.string().required("Campo requerido"),
});

const EditDataForm: React.FC = () => {
  const { userData, provinces, municipalities, sectors, nationalities } = useSelector(store => store.users.userProfile);
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const [provincesState] = useState<IOption[]>(provinces || []);
  const [municipalitiesState] = useState<IOption[]>(municipalities || []);
  const [sectorsState] = useState<IOption[]>(sectors || []);

  return (
    <FormProvider {...methods}>
      <form id="form-edit-profile" className="col-span-12">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6">
            <LabelInput label="Nombre" htmlFor="name" required />
            <input
              id="name"
              type="text"
              className="w-full form-control"
              name="name"
              placeholder="Nombre"
              defaultValue={userData?.name}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <LabelInput label="Apellido" htmlFor="lastname" required />
            <input
              id="lastname"
              type="text"
              className="w-full form-control"
              name="lastname"
              placeholder="Apellido"
              defaultValue={userData?.lastname}
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <LabelInput label="Provincia" htmlFor="identifier" required />
            <Select name="province" options={provincesState} defaultValue={userData?.direction.province} />
          </div>
          <div className="col-span-12 md:col-span-4">
            <LabelInput label="Municipio" htmlFor="municipality" required />
            <Select name="municipality" options={municipalitiesState} defaultValue={userData?.direction.municipality} />
          </div>
          <div className="col-span-12 md:col-span-4">
            <LabelInput label="Sector" htmlFor="sector" required />
            <Select name="sector" options={sectorsState} defaultValue={userData?.direction.sector} />
          </div>
          <div className="col-span-6 md:col-span-4">
            <LabelInput label="Nacionalidad" htmlFor="nationality" required />
            <Select name="nationality" options={nationalities} defaultValue={userData?.nationality} />
          </div>
          <div className="col-span-6 md:col-span-4">
            <LabelInput label="Fecha de nacimiento" htmlFor="birthday" required />
            <input
              id="birthday"
              type="date"
              className="w-full form-control"
              name="birthday"
              defaultValue={userData?.birthday}
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <LabelInput label="Sexo" required />
            <div className="flex mt-2">
              <label htmlFor="f" className="flex col-span-4 mr-8 lg:col-span-2 xl:col-span-1">
                <input
                  id="f"
                  type="radio"
                  name="sex"
                  className="mr-1 transform scale-95"
                  value="F"
                  defaultChecked={userData?.sex === "F"}
                />
                <p>Mujer</p>
              </label>
              <label htmlFor="m" className="flex col-span-4 lg:col-span-2 xl:col-span-1">
                <input
                  type="radio"
                  name="sex"
                  id="m"
                  className="mr-1 transform scale-95"
                  value="M"
                  defaultChecked={userData?.sex === "M"}
                />
                <p>Hombre</p>
              </label>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditDataForm;
