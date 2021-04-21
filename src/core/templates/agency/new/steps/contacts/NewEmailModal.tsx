import React from "react";

// Packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// My Components
import { Card, ErrorComponent, Modal } from "@/components";
import { useToggle } from "@/hooks";

const schema = yup.object().shape({
  title: yup.string().required("Campo requerido"),
  value: yup
    .string()
    .required("Campo requerido")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Ingrese un correo electrónico válido"),
});

export interface IContact {
  title: string;
  value: string;
}

interface NewEmailModalProps {
  newEmail: (value: IContact) => void;
}

const NewEmailModal: React.FC<NewEmailModalProps> = ({ newEmail }) => {
  const { value, toggle } = useToggle();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <button className="w-full btn pri" onClick={() => toggle()}>
        Agregar
      </button>
      <Modal state={value} setState={toggle} centerContent>
        <form
          id="form-new-email"
          className="w-full max-w-md mx-auto"
          onSubmit={handleSubmit(data => {
            newEmail(data);
            toggle();
          })}
        >
          <Card>
            <h3 className="mb-3 text-lg font-semibold text-center">Nuevo número telefónico</h3>
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
                name="title"
                type="text"
                className="w-full form-control"
                placeholder="Ej: Oficina"
                ref={register}
              />
              <ErrorComponent name="title" error={errors} />
            </div>
            <div className="mb-2">
              <div className="flex items-center justify-between">
                <div className="text-xs">
                  <label htmlFor="">
                    <b className="text-gray-600">Correo electrónico</b>
                  </label>
                  <b className="text-danger-500 font-roboto">*</b>
                </div>
              </div>
              <input name="value" type="text" className="w-full form-control" ref={register} />
              <ErrorComponent name="value" error={errors} />
            </div>
            <button form="form-new-email" className="w-full btn pri ghost">
              Agregar
            </button>
          </Card>
        </form>
      </Modal>
    </>
  );
};

export default NewEmailModal;
