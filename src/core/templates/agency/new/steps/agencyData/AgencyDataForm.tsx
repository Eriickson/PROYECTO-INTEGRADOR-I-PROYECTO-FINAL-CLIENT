import React, { useEffect, useState } from "react";

// Packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Redux
import { useActions, useSelector } from "@/store/hooks";

// Styles and Icons
import { IconCamera } from "@tabler/icons";

// My Elements
import { IArea } from "@/models";

// My Components
import { ErrorComponent, LabelInput, SelectProfilePictureComponent } from "@/components";

const schema = yup.object().shape({
  name: yup.string().required("Campo requerido").min(8, "Mín. 8 caracteres"),
  slogan: yup.string().required("Campo requerido").min(8, "Mín. 8 caracteres"),
  isProfessional: yup.boolean().required("Campo requerido"),
});

export interface IAgencyDataForm {
  name: string;
  slogan: string;
  isProfessional: boolean;
}

interface AgencyDataForm {
  onSubmit: (data: IAgencyDataForm) => void;
}

const AgencyDataForm: React.FC<AgencyDataForm> = () => {
  const { data } = useSelector(store => store.agency.newAgency);
  const [logoSelected, setLogoSelected] = useState<{ file: File; croppedArea: IArea; src: string }>();
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });
  const { addNewAgencyData } = useActions();

  useEffect(() => {
    if (data.logo)
      setLogoSelected({
        file: data?.logo.file,
        croppedArea: data?.logo.croppedArea,
        src: data?.logo.srcCropped,
      });
  }, []);

  return (
    <form
      id="form-agency-data"
      className="max-w-2xl mx-auto"
      onSubmit={handleSubmit(data => {
        const { name, slogan, isProfessional } = data;

        if (logoSelected) {
          addNewAgencyData({
            logo: {
              file: logoSelected.file,
              croppedArea: logoSelected.croppedArea,
              srcCropped: logoSelected.src,
            },
            name,
            slogan,
            isProfessional,
          });
        }
      })}
    >
      <div className="mb-5">
        <LabelInput label="Logo" required />
        <div className={`relative w-32 border-2 ${logoSelected?.src ? "" : "h-24"}`}>
          <img src={logoSelected?.src || data.logo?.srcCropped} alt="" />
          <SelectProfilePictureComponent
            componentButton={
              <button type="button" className="absolute bottom-0 right-0 btn icon pri">
                <IconCamera />
              </button>
            }
            aspectRatio={4 / 3}
            onSelectedPicture={data => {
              if (data.fileSelected)
                setLogoSelected({
                  croppedArea: data.croppedArea,
                  file: data.fileSelected.file,
                  src: data.srcCropped,
                });
            }}
          />
        </div>
        <ErrorComponent name="name" error={errors} />
      </div>
      <div className="mb-5">
        <LabelInput label="Nombre" required />
        <input
          id="name"
          type="text"
          className={`w-full form-control ${errors.name && "danger"}`}
          name="name"
          placeholder="Nombre de tu agencia"
          ref={register}
          defaultValue={data.name}
        />
        <ErrorComponent name="name" error={errors} />
      </div>
      <div className="mb-5">
        <LabelInput label="Eslogan" required />
        <input
          id="name"
          type="text"
          className={`w-full form-control ${errors.slogan && "danger"}`}
          name="slogan"
          placeholder="Frase representativa"
          ref={register}
          defaultValue={data.slogan}
        />
        <ErrorComponent name="slogan" error={errors} />
      </div>
      <div>
        <div className="flex mb-5">
          <input
            type="radio"
            className="mr-2 mt-1.5"
            name="isProfessional"
            ref={register}
            id="professional"
            value={1}
            defaultChecked={data.isProfessional === true}
          />
          <div>
            <label className="cursor-pointer" htmlFor="professional">
              <p className="text-lg font-semibold select-none">Profesional</p>
            </label>
            <p className="text-xs text-gray-500">Ideal para las empresas que buscan publicar sus vehículos.</p>
          </div>
        </div>
        <div className="flex">
          <input
            type="radio"
            className="mr-2 mt-1.5"
            name="isProfessional"
            ref={register}
            id="personal"
            value={0}
            defaultChecked={data.isProfessional === false}
          />
          <div>
            <label className="cursor-pointer" htmlFor="personal">
              <p className="text-lg font-semibold select-none">Personal</p>
            </label>
            <p className="text-xs text-gray-500">Diriga a personas que solo desean publicar su vehículo.</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AgencyDataForm;
