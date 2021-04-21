import React from "react";
import { TemplateStep } from "../TemplateStep";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Redux
import { useActions, useSelector } from "@/store/hooks";
// import { IconX } from "@tabler/icons";
// import ModalScore from "./ModalScore";

const schema = yup.object().shape({
  accessories: yup.array(yup.string()),
  features: yup.array(yup.string()),
  version: yup.string(),
});
interface IListing {
  accessories: string[];
  features: string[];
  includeds: string[];
  version: string;
}

export const ListingStep: React.FC = () => {
  const { addNewPostData } = useActions();
  const { accesories, versions, features, includeds } = useSelector(store => store.post.initialState);
  const { data } = useSelector(store => store.post.newPost);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: IListing) {
    const { accessories, features, includeds, version } = data;
    addNewPostData({
      accessories,
      features,
      includeds,
      version,
    });
  }

  return (
    <TemplateStep title="Rellenar listados" description="Agrega listados como característica, props, contras, etc...">
      <form id="form-listing" className="grid grid-cols-12 gap-x-2.5" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-span-12 lg:col-span-6">
          <fieldset className="h-full px-3 pt-3 border">
            <legend className="px-1 text-sm font-semibold bg-white text-pri-400">Accesorios</legend>
            <ul className="flex flex-wrap">
              {accesories.map(accessory => (
                <li key={String(accessory.value)} className="w-1/2 mb-4 md:w-1/3 lg:w-1/2 xl:w-1/3">
                  <label
                    htmlFor={`accessory-${String(accessory.value)}`}
                    className="flex items-center font-medium cursor-pointer select-none"
                  >
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="accessories"
                      id={`accessory-${String(accessory.value)}`}
                      ref={register}
                      value={String(accessory.value)}
                      defaultChecked={data?.accessories?.includes(String(accessory.value))}
                    />
                    {accessory.label}
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <fieldset className="h-full px-3 pt-3 border">
            <legend className="px-1 text-sm font-semibold bg-white text-pri-400">Características</legend>
            <ul className="flex flex-wrap">
              {features.map(feature => (
                <li key={String(feature.value)} className="w-1/2 mb-4 md:w-1/3 lg:w-1/2 xl:w-1/3">
                  <label
                    htmlFor={`feature-${String(feature.value)}`}
                    className="flex items-center font-medium cursor-pointer select-none"
                  >
                    <input
                      id={`feature-${String(feature.value)}`}
                      className="mr-2"
                      type="checkbox"
                      name="features"
                      value={String(feature.value)}
                      ref={register}
                      defaultChecked={data?.features?.includes(String(feature.value))}
                    />
                    {feature.label}
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <fieldset className="h-full px-3 pt-3 border">
            <legend className="px-1 text-sm font-semibold bg-white text-pri-400">Versión</legend>
            <ul className="flex flex-wrap">
              {versions.map(version => (
                <li key={String(version.value)} className="w-1/2 mb-4 md:w-1/3">
                  <label
                    htmlFor={`version-${String(version.value)}`}
                    className="flex items-center font-medium cursor-pointer select-none"
                  >
                    <input
                      className="mr-2"
                      type="radio"
                      name="version"
                      id={`version-${String(version.value)}`}
                      value={String(version.value)}
                      ref={register}
                      defaultChecked={
                        data?.version ? String(version.value) === data?.version : version.label === "Otra"
                      }
                    />
                    {version.label}
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <fieldset className="h-full px-3 pt-3 border">
            <legend className="px-1 text-sm font-semibold bg-white text-pri-400">Incluidos</legend>
            <ul className="flex flex-wrap">
              {includeds.map(included => (
                <li key={String(included.value)} className="w-1/2 mb-4 md:w-1/3 lg:w-1/2 xl:w-1/3">
                  <label
                    htmlFor={`included-${String(included.value)}`}
                    className="flex items-center font-medium cursor-pointer select-none"
                  >
                    <input
                      id={`included-${String(included.value)}`}
                      className="mr-2"
                      type="checkbox"
                      name="includeds"
                      value={String(included.value)}
                      ref={register}
                      defaultChecked={data?.includeds?.includes(String(included.value))}
                    />
                    {included.label}
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
        {/* <div className="col-span-12 lg:col-span-6">
          <fieldset className="h-full p-3 border">
            <legend className="px-1 text-sm font-semibold bg-white text-pri-400">Puntuaciones</legend>
            <ul className="grid grid-cols-12 gap-2">
              <li className="col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4">
                <div className="">
                  <div className="flex justify-between border-2 bg-pri-500 border-pri-500">
                    <h5 className="p-2 font-semibold text-white truncate">Aire Acondicionador</h5>
                    <button className="p-2 rounded-none hover:bg-danger-500">
                      <IconX className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="p-2 border-2 border-t-0 border-pri-500 bg-pri-50">
                    <p className="text-sm text-center text-gray-500">
                      <span className="w-full text-xl font-semibold text-pri-600">6</span>/10
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4">
                <div className="">
                  <div className="flex justify-between border-2 bg-warning-500 border-warning-500">
                    <h5 className="p-2 font-semibold text-white truncate">Motor</h5>
                    <button className="p-2 rounded-none hover:bg-danger-500">
                      <IconX className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="p-2 border-2 border-t-0 border-warning-500 bg-warning-50">
                    <p className="text-sm text-center text-gray-500">
                      <span className="w-full text-xl font-semibold text-warning-600">6</span>/10
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4">
                <div className="">
                  <div className="flex justify-between border-2 bg-success-500 border-success-500">
                    <h5 className="p-2 font-semibold text-white truncate">Motor</h5>
                    <button className="p-2 rounded-none hover:bg-danger-500">
                      <IconX className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="p-2 border-2 border-t-0 border-success-500 bg-success-50">
                    <p className="text-sm text-center text-gray-500">
                      <span className="w-full text-xl font-semibold text-success-600">6</span>/10
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex justify-end mt-2"></div>
          </fieldset>
        </div> */}
      </form>
    </TemplateStep>
  );
};
{
  /* <ModalScore onSaveScore={} /> */
}
