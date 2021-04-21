import React from "react";
import { useForm, FormProvider } from "react-hook-form";

// My Components
import { Modal, Range } from "@/components";
import { useToggle } from "@/hooks";
import { IOption } from "@/models";

interface ModalScore {
  onSaveScore: (score: IOption) => void;
}

const ModalScore: React.FC<ModalScore> = () => {
  const { value, toggle } = useToggle();
  const methods = useForm({
    defaultValues: {
      score: [0],
    },
  });

  return (
    <>
      <button className="w-full btn pri" onClick={() => toggle(true)}>
        Agregar Puntuación
      </button>
      <Modal state={value} centerContent setState={toggle}>
        <FormProvider {...methods}>
          <form
            className="container flex flex-col items-center empty" /* onSubmit={methods.handleSubmit(values => {})} */
          >
            <div className="w-full p-5 bg-white max-w-screen-xs">
              <h1 className="mb-5 text-xl font-semibold text-center text-pri-500">Agregar puntuación</h1>
              <div>
                <div className="mb-4">
                  <label className="" htmlFor="title">
                    <b className="text-xs text-gray-600">Título</b>
                  </label>
                  <input
                    id="title"
                    className="w-full form-control pri"
                    name="title"
                    type="text"
                    placeholder="Ej: Motor"
                  />
                </div>
                <div>
                  <label className="" htmlFor="identifier">
                    <b className="text-xs text-gray-600">Puntuación</b>
                  </label>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <Range control="" name="score" min={0} max={10} step={1} />
                    </div>
                    <p className="w-10 text-right">{methods.watch("score")[0]}/10</p>
                  </div>
                  {methods.watch("score")[0] <= 3 && (
                    <p className="py-2 mb-1 font-medium text-center border-2 border-danger-500 bg-danger-100 text-danger-500">
                      Mala
                    </p>
                  )}
                  {methods.watch("score")[0] >= 4 && methods.watch("score")[0] <= 6 && (
                    <p className="py-2 mb-1 font-medium text-center text-orange-500 bg-orange-100 border-2 border-orange-500">
                      Regular
                    </p>
                  )}
                  {methods.watch("score")[0] >= 7 && methods.watch("score")[0] <= 9 && (
                    <p className="py-2 mb-1 font-medium text-center border-2 border-info-500 bg-info-100 text-info-500">
                      Buena
                    </p>
                  )}
                  {methods.watch("score")[0] == 10 && (
                    <p className="py-2 mb-1 font-medium text-center border-2 border-success-500 bg-success-100 text-success-500">
                      Exelente
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full px-5 py-3 mt-2 bg-white max-w-screen-xs">
              <div className="flex justify-end">
                <button type="button" className="mr-3 btn empty">
                  Cancelar
                </button>
                <button type="button" className="btn pri">
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
};

export default ModalScore;
