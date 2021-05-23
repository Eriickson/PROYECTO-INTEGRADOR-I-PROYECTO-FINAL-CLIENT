import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface ISendFormPropsOnSubmit {
  email: string;
}

// Variables and Constants
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Correo electrónico requerido")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Ingrese un correo electrónico válido"),
});

export const FormSendEmailRegisterResolver = yupResolver(schema);
