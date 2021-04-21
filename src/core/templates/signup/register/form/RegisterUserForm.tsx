import React from "react";

// Packages
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// My Elements
import { IUser } from "@/models";

// My Components
import { Card } from "@/components";
import PersonalInformation from "./PersonalInformation";
import AccountInformation from "./AccountInformation";

// Types and Interfaces
interface RegisterUserFormProps {
  onSubmit: (newUser: IUser) => void;
}

// Variables and Constants
const schema = yup.object().shape({
  profilePicture: yup
    .object()
    .required("Seleccione una imagen de perfil")
    .shape({
      file: yup.mixed<File>().required("Seleccione una imagen de perfil"),
      croppedArea: yup.object().required().shape({
        x: yup.number().required(),
        y: yup.number().required(),
        width: yup.number().required(),
        height: yup.number().required(),
      }),
    }),
  name: yup.string().required("Ingrese su nombre"),
  lastname: yup.string().required("Ingrese su apellido"),
  province: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione una provincia"),
      value: yup.string().required("Seleccione una provincia"),
    })
    .nullable(),
  municipality: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione un municipio"),
      value: yup.string().required("Seleccione un municipio"),
    })
    .required()
    .nullable(),
  sector: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione un sector"),
      value: yup.string().required("Seleccione un sector"),
    })
    .required()
    .nullable(),
  birthday: yup.string().required("Ingrese tu fecha de nacimiento"),
  nationality: yup
    .object()
    .shape({
      value: yup.string().required().required("Ingresa tu país de origen"),
      label: yup.string().required().required("Ingresa tu país de origen"),
    })
    .nullable(),
  sex: yup.string().required("Ingrese su sexo"),
  username: yup
    .string()
    .required("Ingrese un nombre de usuario")
    .min(6, "Mínimo 6 caracteres")
    .max(20, "Máximo 20 caracteres"),
  password: yup
    .string()
    .required("Ingrese una contraseña")
    .min(8, "Mínimo 8 caracteres")
    .max(25, "Máximo 25 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirma tu contraseña")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});

const RegisterUserForm: React.FC<RegisterUserFormProps> = ({ onSubmit }) => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form
          id="form-signup"
          className="space-y-2"
          onSubmit={methods.handleSubmit(data => {
            const newUser: IUser = {
              profilePicture: {
                file: data.profilePicture.file,
                croppedArea: data.profilePicture.croppedArea,
              },
              name: data.name,
              lastname: data.lastname,
              direction: {
                province: data.province.value,
                municipality: data.municipality.value,
                sector: data.sector.value,
              },
              birthday: data.birthday,
              sex: data.sex,
              nationality: data.nationality.value,
              username: data.username,
              password: data.password,
            };

            onSubmit(newUser);
          })}
        >
          <Card>
            <PersonalInformation />
          </Card>
          <Card>
            <AccountInformation />
          </Card>
          <div className="flex justify-end">
            <button className="btn pri">Crear cuenta</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterUserForm;
