import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IOption } from "@/models";

// GraphQL
import { graphqlClient, GET_MODELS_Q, GET_TYPE_MODEL_Q } from "@/graphql";

// Redux
import { useActions, useSelector } from "@/store/hooks";

// Hooks
import { useYear, useCylinders } from "@/hooks";

// My Components
import { Select, InputNumber, ErrorComponent } from "@/components";

// Variables and Constants
const schema = yup.object().shape({
  brand: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  model: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  typeModel: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .nullable(),
  year: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  category: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  fuel: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  transmission: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  traction: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  cylinders: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  condition: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  paintColor: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  interiorColor: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  passengers: yup
    .number()
    .required("Campo requerido")
    .min(1, "Mínimo 1")
    .max(20, "Máximo 20")
    .nullable()
    .transform((v, o) => (o === "" ? null : v)),
  doors: yup
    .number()
    .required("Campo requerido")
    .min(2, "Mínimo 2")
    .max(10, "Máximo 10")
    .nullable()
    .transform((v, o) => (o === "" ? null : v)),
  currency: yup.string().required(),
  minAmount: yup.number().default(50000),
  amount: yup
    .number()
    .required("Campo requerido")
    .nullable()
    .transform((v, o) => (o === "" ? null : v)),
  mileageUnit: yup.string().required(),
  mileageValue: yup
    .number()
    .required("Campo requerido")
    .nullable()
    .transform((v, o) => (o === "" ? null : v)),
});

const VehicleDataForm: React.FC = () => {
  const { addNewPostData } = useActions();
  const methods = useForm({ resolver: yupResolver(schema) });
  const { brands, models, conditions, colors, fuels, tractions, transmissions, categories } = useSelector(
    store => store.post.initialState,
  );
  const { data } = useSelector(store => store.post.newPost);

  const [modelsState, setModelsState] = useState<IOption[]>(models || []);
  const [typeModels, setTypeModel] = useState<IOption[]>([]);
  const { years } = useYear();
  const { cylinders } = useCylinders();

  async function getModels(idBrand: string) {
    const { getModels } = await graphqlClient<{ getModels: IOption[] }>({
      query: GET_MODELS_Q,
      variables: { idBrand },
    });

    setModelsState(getModels);
  }

  async function getTypeModels(idModel: string) {
    const { getTypeModel } = await graphqlClient<{ getTypeModel: IOption[] }>({
      query: GET_TYPE_MODEL_Q,
      variables: { idModel },
    });
    setTypeModel(getTypeModel);
  }

  async function initialState() {
    await getModels(`${data?.brand?.value}`);
    await getTypeModels(`${data?.model?.value}`);
  }

  useEffect(() => {
    initialState();
  }, []);

  return (
    <FormProvider {...methods}>
      <form
        id="form-description-vehicle"
        className="grid grid-cols-12 mx-auto gap-y-5 gap-x-2 lg:w-3/4"
        onSubmit={methods.handleSubmit(data => {
          const {
            brand,
            model,
            typeModel,
            year,
            category,
            fuel,
            traction,
            transmission,
            cylinders,
            currency,
            amount,
            mileageUnit,
            mileageValue,
            passengers,
            doors,
            condition,
            paintColor,
            interiorColor,
          } = data;

          addNewPostData({
            brand,
            model,
            typeModel,
            year,
            category,
            fuel,
            traction,
            transmission,
            cylinders,
            price: {
              amount,
              currency,
            },
            mileage: {
              unit: mileageUnit,
              value: mileageValue,
            },
            passengers,
            doors,
            condition,
            paintColor,
            interiorColor,
            title: "",
          });
        })}
      >
        <div className="col-span-12 md:col-span-6">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="brand">
              Marca
            </label>
          </div>
          <Select
            name="brand"
            options={brands}
            placeholder="Seleccione una marca"
            defaultValue={data?.brand}
            onChange={async ({ value }) => {
              await getModels(`${value}`);
              methods.setValue("model", null);
              setTypeModel([]);
              methods.setValue("typeModel", null);
            }}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="model">
              Modelo
            </label>
          </div>
          <Select
            name="model"
            options={modelsState}
            placeholder="Seleccione un modelo"
            isDisabled={!modelsState.length}
            defaultValue={data?.model}
            onChange={async ({ value }) => {
              await getTypeModels(`${value}`);
              methods.setValue("typeModel", null);
            }}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="year">
              Tipo
            </label>
          </div>
          <Select
            name="typeModel"
            options={typeModels}
            placeholder="Seleccione un tipo"
            defaultValue={data?.typeModel}
            isDisabled={!typeModels.length}
            isSearchable={false}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="year">
              Año
            </label>
          </div>
          <Select name="year" options={years} placeholder="Seleccione un año" defaultValue={data?.year} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="year">
              Categoria
            </label>
          </div>
          <Select
            name="category"
            options={categories}
            placeholder="Seleccione una categoria"
            defaultValue={data?.category}
            isSearchable={false}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="fuel">
              Combustible
            </label>
          </div>
          <Select
            name="fuel"
            options={fuels}
            placeholder="Seleccione su combustible"
            defaultValue={data?.fuel}
            isSearchable={false}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="transmission">
              Transmisión
            </label>
          </div>
          <Select
            name="transmission"
            options={transmissions}
            placeholder="Seleccione su combustible"
            defaultValue={data?.transmission}
            isSearchable={false}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="traction">
              Tracción
            </label>
          </div>

          <Select
            name="traction"
            options={tractions}
            placeholder="Seleccione su combustible"
            defaultValue={data?.traction}
            isSearchable={false}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="cylinder">
              Cilindros
            </label>
          </div>
          <Select
            name="cylinders"
            options={cylinders}
            placeholder="Seleccione su combustible"
            defaultValue={data?.cylinders}
            isSearchable={false}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="price">
              Precio
            </label>
          </div>
          <div className="flex items-start">
            <div className="flex mt-3 mr-4">
              <label className="mr-2 text-sm font-medium" htmlFor="dop">
                <input
                  className="mr-2"
                  type="radio"
                  name="currency"
                  id="dop"
                  value="DOP"
                  defaultChecked={data?.price?.currency ? data?.price?.currency === "DOP" : true}
                  ref={methods.register}
                />
                DOP$
              </label>
              <label className="text-sm font-medium" htmlFor="usd">
                <input
                  className="mr-2"
                  type="radio"
                  name="currency"
                  id="usd"
                  value="USD"
                  defaultChecked={data?.price?.currency === "USD"}
                  ref={methods.register}
                />
                USD$
              </label>
            </div>
            <InputNumber
              name="amount"
              prefix={methods.watch("currency") === "DOP" ? "RD$ " : "US$ "}
              defaultValue={data?.price?.amount}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="mileage">
              Recorrido
            </label>
          </div>
          <div className="flex items-start">
            <div className="flex mt-3 mr-4">
              <label className="mr-2 text-sm font-medium" htmlFor="km">
                <input
                  id="km"
                  className="mr-2"
                  type="radio"
                  name="mileageUnit"
                  value="KM"
                  defaultChecked={data?.mileage?.unit ? data?.mileage?.unit === "KM" : true}
                  ref={methods.register}
                />
                Km
              </label>
              <label className="text-sm font-medium" htmlFor="mi">
                <input
                  id="mi"
                  className="mr-2"
                  type="radio"
                  name="mileageUnit"
                  value="MI"
                  defaultChecked={data?.mileage?.unit === "MI"}
                  ref={methods.register}
                />
                Mi
              </label>
            </div>
            <InputNumber
              name="mileageValue"
              suffix={methods.watch("mileageUnit") === "KM" ? " Km" : " Mi"}
              defaultValue={data?.mileage?.value}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="">
              Número de pasajeros
            </label>
          </div>
          <input
            id="passengers"
            className={`w-full form-control ${methods.errors.passengers && "danger"}`}
            type="number"
            name="passengers"
            placeholder="Escribe algo..."
            ref={methods.register}
            defaultValue={data?.passengers}
          />
          <ErrorComponent name="passengers" error={methods.errors} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="doors">
              Número de puertas
            </label>
          </div>
          <input
            id="doors"
            className={`w-full form-control ${methods.errors.doors && "danger"}`}
            type="number"
            name="doors"
            placeholder="Escribe algo..."
            ref={methods.register}
            defaultValue={data?.doors}
          />
          <ErrorComponent name="doors" error={methods.errors} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="">
              Condición
            </label>
          </div>
          <Select
            name="condition"
            options={conditions}
            placeholder="Seleccione su combustible"
            defaultValue={data?.condition}
            isSearchable={false}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="paintColor">
              Color de pintura
            </label>
          </div>
          <Select
            name="paintColor"
            options={colors}
            placeholder="Seleccione su combustible"
            defaultValue={data?.paintColor}
            isSearchable={false}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-gray-600" htmlFor="interiorColor">
              Color del interior
            </label>
          </div>
          <Select
            name="interiorColor"
            options={colors}
            placeholder="Seleccione su combustible"
            defaultValue={data?.interiorColor}
            isSearchable={false}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default VehicleDataForm;
