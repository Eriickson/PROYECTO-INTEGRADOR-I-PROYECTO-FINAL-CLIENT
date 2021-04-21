import React, { useEffect } from "react";

// Packages
import { Controller, useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactInputMask from "react-input-mask";

// Styles and Icons
import { IconX } from "@tabler/icons";

// My elements
import { useToggle } from "@/hooks";
import { IOption } from "@/models";

// My Components
import { Card, ErrorComponent, Modal } from "@/components";

interface NewContactProps {
  name: string;
  legend: string;
  mask: string;
  typeContact: "email" | "numberPhone";
  addNewContact: (newContact: IOption) => void;
  defaultValues?: IOption[];
}

const schema = yup.object().shape({
  label: yup.string().required("Este campo es requerido"),
  value: yup.string().required("Este campo es requerido"),
});

const NewContact: React.FC<NewContactProps> = ({ legend, name, mask, typeContact, addNewContact, defaultValues }) => {
  const { control, handleSubmit, errors, register, setError } = useForm({ resolver: yupResolver(schema) });
  const { append, fields, remove } = useFieldArray({ control, name });

  const { value, toggle } = useToggle();

  useEffect(() => {
    if (defaultValues) append(defaultValues);
  }, [defaultValues]);

  return (
    <>
      <div className="col-span-12 md:col-span-6">
        <fieldset className="h-full p-3 border">
          <legend className="px-1 text-sm text-gray-400 bg-white select-none">{legend}</legend>
          <ul className="divide-y">
            {!fields.length && <li className="my-3 text-center text-gray-400">No se han agregado contactos</li>}
            {fields.map((field, i) => (
              <li key={i} className="flex justify-between py-3">
                <div className="flex">
                  <h6 className="mr-1 font-semibold text-gray-700">{field.label}:</h6>
                  <p className="font-semibold text-pri-600">{field.value}</p>
                </div>
                <button onClick={() => remove(i)}>
                  <IconX className="w-5 h-5 text-gray-400 duration-150 hover:text-danger-500" />
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="w-full btn pri" onClick={() => toggle()}>
            Agregar nuevo Contacto
          </button>
        </fieldset>
      </div>
      <Modal state={value} setState={toggle} centerContent notCloseModalZone>
        <form
          className="w-full max-w-md mx-auto"
          onSubmit={handleSubmit(data => {
            if (typeContact === "numberPhone") {
              const numberPhone = data.value.replace(/\D+/g, "");
              if (numberPhone.length !== 11) {
                setError("value", { message: "Campo inváido" });
                return;
              }
            } else if (typeContact === "email") {
              const isEmail = data.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
              if (!isEmail) {
                setError("value", { message: "Campo inváido" });
                return;
              }
            }
            toggle();
            append(data);
            addNewContact({ label: data.label, value: data.value });
          })}
        >
          <Card>
            <h3 className="mb-3 text-lg font-semibold text-center">Nuevo Contacto</h3>
            <div className="mb-2">
              <div className="flex items-center justify-between">
                <div className="text-xs">
                  <label htmlFor="">
                    <b className="text-gray-600">Titulo</b>
                  </label>
                  <b className="text-danger-500 font-roboto">*</b>
                </div>
              </div>
              <input
                name="label"
                type="text"
                className="w-full form-control"
                placeholder="Ej: Oficina"
                ref={register}
              />
              <ErrorComponent name="label" error={errors} />
            </div>
            <div className="mb-2">
              <div className="flex items-center justify-between">
                <div className="text-xs">
                  <label htmlFor="">
                    <b className="text-gray-600">Número</b>
                  </label>
                  <b className="text-danger-500 font-roboto">*</b>
                </div>
              </div>
              <Controller
                name="value"
                control={control}
                defaultValue=""
                render={({ onChange, ref, value }) => (
                  <ReactInputMask
                    className="w-full form-control"
                    mask={mask}
                    onChange={onChange}
                    ref={ref}
                    value={value}
                    placeholder="Valor"
                  />
                )}
              />
              <ErrorComponent name="value" error={errors} />
            </div>
            <button type="submit" className="w-full mb-2 btn pri">
              Agregar Contacto
            </button>
            <button type="button" className="w-full btn danger ghost" onClick={() => toggle()}>
              Cancelar
            </button>
          </Card>
        </form>
      </Modal>
    </>
  );
};

export default NewContact;
// matches(, "Ingrese un correo electrónico válido")
