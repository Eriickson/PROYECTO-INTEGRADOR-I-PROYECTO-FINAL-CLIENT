import React from "react";

// Packages
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactInputMask from "react-input-mask";
import * as yup from "yup";

// My Components
import { Card, ErrorComponent, Modal } from "@/components";
import { useToggle } from "@/hooks";
import { IOption } from "@/models";

const schema = yup.object().shape({
  label: yup.string().required("Campo requerido"),
  value: yup.string().required("Campo requerido"),
});

export interface IContact {
  title: string;
  value: string;
}

interface NewNumberPhoneModalProps {
  newPhoneNumber: (value: IOption) => void;
}

const NewNumberPhoneModal: React.FC<NewNumberPhoneModalProps> = ({ newPhoneNumber }) => {
  const { value, toggle } = useToggle();
  const { register, handleSubmit, errors, control, setError } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <button className="w-full btn pri" onClick={() => toggle()}>
        Nuevo número telefónico
      </button>
      <Modal state={value} setState={toggle} centerContent>
        <form
          id="form-new-numberphone"
          className="w-full max-w-md mx-auto"
          onSubmit={handleSubmit(data => {
            const numberPhone = data.value.replace(/\D+/g, "");
            if (numberPhone.length !== 11) {
              setError("value", { message: "Campo inváido" });
              return;
            }
            newPhoneNumber(data);
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
                    mask="+1 (899) 999-9999"
                    // maskChar={null}
                    onChange={onChange}
                    ref={ref}
                    value={value}
                    placeholder="+1 (800) 000-0000"
                  />
                )}
              />
              <ErrorComponent name="value" error={errors} />
            </div>
            <button type="submit" form="form-new-numberphone" className="w-full btn pri ghost">
              Agregar
            </button>
          </Card>
        </form>
      </Modal>
    </>
  );
};

export default NewNumberPhoneModal;
