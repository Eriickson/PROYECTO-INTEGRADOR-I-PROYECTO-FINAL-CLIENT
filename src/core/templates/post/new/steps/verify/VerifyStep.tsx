import React, { useState } from "react";

// NextJS
import Router from "next/router";

// Packages
import numeral from "numeral";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/client";

// GraphQL
import { graphqlClient, CREATE_POST_M } from "@/graphql";

// Redux
import { useSelector, useActions } from "@/store/hooks";

// My Components
import { ScreenLoader, TemplateStepWizard } from "@/components";

export const VerifyStep: React.FC = () => {
  const { setGeneralError } = useActions();
  const { features, accesories, includeds, versions } = useSelector(store => store.post.initialState);
  const { handleSubmit } = useForm();
  const { data } = useSelector(store => store.post.newPost);
  const [session] = useSession();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit() {
    setIsLoading(true);

    const newPost = {
      accessories: data?.accessories,
      brand: data?.brand?.value,
      category: data?.category?.value,
      condition: data?.condition?.value,
      cylinders: parseInt(`${data?.cylinders?.value}`),
      cover: data?.images?.filter(image => image.isCover)[0].id,
      description: data?.description,
      doors: data?.doors,
      features: data?.features,
      fuel: data?.fuel?.value,
      images: data?.images?.map(image => ({ file: image.file, croppedArea: image.croppedArea, id: image.id })),
      includeds: data?.includeds,
      interiorColor: data?.interiorColor?.value,
      mileage: data?.mileage,
      model: data?.model?.value,
      paintColor: data?.paintColor?.value,
      passengers: data?.passengers,
      pricing: data?.price,
      tags: data?.tags,
      title: data?.title,
      traction: data?.traction?.value,
      transmission: data?.transmission?.value,
      typeModel: data?.typeModel?.value,
      version: data?.version,
      year: parseInt(`${data?.year?.value}`),
    };

    try {
      await graphqlClient({
        query: CREATE_POST_M,
        variables: {
          post: newPost,
          userId: session?.user.userId,
        },
      });

      Router.push("/app");
    } catch (err) {
      setGeneralError(true);

      setIsLoading(false);
    }
  }

  return (
    <TemplateStepWizard
      title="Verificar información"
      description="Para finalizar, revisa que los datos agregados en los pasos anteriores estén correctos."
    >
      <form id="form-verify" onSubmit={handleSubmit(onSubmit)}></form>
      <div className="divide-y">
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Título:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.title}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Descripción:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            {data?.description ? (
              <p className="font-medium lg:w-3/4 text-main-text">{data?.description}</p>
            ) : (
              <p className="font-medium line-through text-warning-400">Este campo se ha dejado vacío</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Etiquetas:</h5>
          </div>
          <div className="flex col-span-12 md:col-span-8">
            {data?.tags?.length ? (
              data?.tags?.map((tag, i) => (
                <span key={i} className="mb-1 mr-1 btn pri ghost sm">
                  {tag}
                </span>
              ))
            ) : (
              <p className="font-medium line-through text-warning-400">Este campo se ha dejado vacío</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Marca:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.brand?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Modelo:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.model?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Año:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.year?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Combustible:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.fuel?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Transmisión:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.transmission?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Tracción:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.traction?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Precio:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">
              {data?.price?.currency === "DOP" ? "RD$" : "US$"} {numeral(data?.price?.amount).format("0,0.00")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Cilindros:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.cylinders?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Recorrido:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">
              {numeral(data?.mileage?.value).format("0,0")} <span className="uppercase">{data?.mileage?.unit}</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Número de pasajeros:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.passengers}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Número de puertas:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.doors}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Condición:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.condition?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Color de pintura:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.paintColor?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Color del interior:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data?.interiorColor?.label}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Versión:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">
              {versions.find(item => item.value === data?.version)?.label || ""}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Características:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="list-disc list-inside">
              {data?.features?.length ? (
                data?.features?.map((feature, i) => {
                  feature = features.find(item => item.value === feature)?.label || "";
                  return (
                    <li key={i} className="font-medium text-main-text">
                      {feature}
                    </li>
                  );
                })
              ) : (
                <p className="font-medium line-through text-warning-400">Este campo se ha dejado vacío</p>
              )}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Accesorios:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="list-disc list-inside">
              {data?.accessories?.length ? (
                data?.accessories?.map((accessory, i) => {
                  accessory = accesories.find(item => item.value === accessory)?.label || "";
                  return (
                    <li key={i} className="font-medium text-main-text">
                      {accessory}
                    </li>
                  );
                })
              ) : (
                <p className="font-medium line-through text-warning-400">Este campo se ha dejado vacío</p>
              )}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Incluidos:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="list-disc list-inside">
              {data?.includeds?.length ? (
                data?.includeds?.map((included, i) => {
                  included = includeds.find(item => item.value === included)?.label || "";
                  return (
                    <li key={i} className="font-medium text-main-text">
                      {included}
                    </li>
                  );
                })
              ) : (
                <p className="font-medium line-through text-warning-400">Este campo se ha dejado vacío</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <ScreenLoader isLoading={isLoading} />
    </TemplateStepWizard>
  );
};
