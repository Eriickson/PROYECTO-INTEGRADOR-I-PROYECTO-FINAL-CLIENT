import React, { useState } from "react";

// NextJS
import Router from "next/router";

// Packages
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/client";

// GraphQL
import { graphqlClient, CREATE_AGENCY_M } from "@/graphql";

// Redux
import { useSelector, useActions } from "@/store/hooks";

// My Components
import { TemplateStepWizard, ScreenLoader } from "@/components";

export const VerifyStep: React.FC = () => {
  const { data } = useSelector(store => store.agency.newAgency);
  const { setAlertBanner } = useActions();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit } = useForm();
  const [session] = useSession();

  async function onSubmit() {
    setIsLoading(true);
    const { ubication } = data;

    const newAgency = {
      ...data,
      logo: {
        file: data.logo?.file,
        croppedArea: data.logo?.croppedArea,
      },
      ubication: {
        direction: {
          province: ubication?.province?.value,
          municipality: ubication?.municipality?.value,
          sector: ubication?.sector?.value,
          reference: ubication?.reference,
        },
      },
    };

    try {
      await graphqlClient({
        query: CREATE_AGENCY_M,
        variables: {
          agency: newAgency,
          userId: session?.user.userId,
        },
      });
      Router.push("/app");
    } catch (err) {
      setAlertBanner(err[0]);
      setIsLoading(false);
    }
  }

  return (
    <TemplateStepWizard
      title={"Verificar información"}
      description={"Para finalizar, revisa que los datos agregados en los pasos anteriores estén correctos."}
    >
      <form id="form-verify" className="divide-y" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Oficio:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data.isProfessional ? "Personal" : "Professional"}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Logo:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <img className="w-32 border-2" src={data.logo?.srcCropped} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Nombre:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data.name}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Eslogan:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">{data.slogan}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Ubicación:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-medium text-main-text">
              {data.ubication?.reference} / {data.ubication?.sector?.label} / {data.ubication?.municipality?.label} /{" "}
              {data.ubication?.province?.label}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 py-2 md:gap-5">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-sm font-medium md:text-right text-sec-text">Contactos:</h5>
          </div>
          <div className="col-span-12 md:col-span-8">
            {data.contacts?.numberPhones.map(({ label, value }, i) => (
              <p key={i} className="mb-1 font-medium text-main-text">
                {label}:{" "}
                <a className="text-blue-600 underline" href="">
                  {value}
                </a>
              </p>
            ))}
            {data.contacts?.emails.map(({ label, value }, i) => (
              <p key={i} className="mb-1 font-medium text-main-text">
                {label}:{" "}
                <a className="text-blue-600 underline" href="">
                  {value}
                </a>
              </p>
            ))}
          </div>
        </div>
      </form>
      <ScreenLoader isLoading={isLoading} msg="Creando agencia" />
    </TemplateStepWizard>
  );
};
