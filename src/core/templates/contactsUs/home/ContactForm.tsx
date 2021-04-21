import React from "react";

// Packages
import { useSession } from "next-auth/client";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactInputMask from "react-input-mask";

// My Components
import { ErrorComponent, LabelInput, Select } from "@/components";
import { IOption } from "@/models";

const schema = yup.object().shape({
  fullName: yup.string().required("Este campo es requerido"),
  email: yup
    .string()
    .required("Este campo es requerido")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Ingrese un correo electrónico válido"),
  numberPhone: yup.string().required("Este campo es requerido"),
  theme: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .nullable(),
  message: yup.string().required("Este campo es requerido"),
});

export interface IContactForm {
  fullName: string;
  email: string;
  numberPhone: string;
  theme: IOption;
  message: string;
}

interface ContactFormProps {
  onSubmit: (values: IContactForm) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({onSubmit}) => {
  const [session] = useSession();
  const methods = useForm({ resolver: yupResolver(schema) });
  const options: IOption[] = [
    {
      value: 1,
      label: "Solicitud de plan",
    },
    {
      value: 2,
      label: "Dar una queja",
    },
    {
      value: 3,
      label: "Dar una retroalimentación",
    },
    {
      value: 4,
      label: "Otros",
    },
  ];

  return (
    <div className="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <FormProvider {...methods}>
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div>
              <LabelInput htmlFor="fullName" required label="Nombre completo" />
              <input
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="name"
                className={`w-full mb-1 form-control ${methods.errors.fullName && "danger"}`}
                placeholder="Nombre completo"
                ref={methods.register}
                defaultValue={String(session?.user.name || "")}
              />
              <ErrorComponent name="fullName" error={methods.errors} />
            </div>
            <div>
              <LabelInput htmlFor="email" required label="Correo electrónico" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`w-full mb-1 form-control lowercase ${methods.errors.email && "danger"}`}
                placeholder="Correo electrónico"
                ref={methods.register}
                defaultValue={String(session?.user.email || "")}
              />
              <ErrorComponent name="email" error={methods.errors} />
            </div>
            <div>
              <LabelInput htmlFor="numberPhone" required label="Número de teléfono" />
              <Controller
                name="numberPhone"
                control={methods.control}
                defaultValue=""
                render={({ onChange, ref, value }) => (
                  <ReactInputMask
                    className={`w-full mb-1 form-control ${methods.errors.numberPhone && "danger"}`}
                    mask={"+1 (899) 999-9999"}
                    onChange={onChange}
                    ref={ref}
                    value={value}
                    placeholder="Número de teléfono"
                  />
                )}
              />
              <ErrorComponent name="numberPhone" error={methods.errors} />
            </div>
            <div>
              <LabelInput required label="Tema" />
              <Select name="theme" options={options} placeholder="Tema" />
              <ErrorComponent name="theme" error={methods.errors} />
            </div>
            <div>
              <LabelInput htmlFor="message" required label="Mensaje" />
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full mb-1 form-control ${methods.errors.message && "danger"}`}
                placeholder="Mensaje"
                style={{
                  minHeight: "126px",
                }}
                ref={methods.register}
              ></textarea>
              <ErrorComponent name="message" error={methods.errors} />
            </div>
            <div>
              <button type="submit" className="w-full btn pri lg">
                Enviar
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ContactForm;
