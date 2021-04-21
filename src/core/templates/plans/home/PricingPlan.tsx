import React from "react";
import { Card } from "@/components";
import { IconCircleCheck } from "@tabler/icons";
import numeral from "numeral";
import Link from "next/link";

interface IPricingPlan {
  name: string;
  price: {
    currency: string;
    amount: number;
  };
  images: number;
  numberPost: number;
  description: string;
}

const PricingPlan: React.FC<IPricingPlan> = ({ name, price, images, numberPost, description }) => {
  return (
    <div className="col-span-1">
      <Card notBorderTop className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex items-center">
                <hr className="flex-1 border-gray-400" />
                <h1 className="mx-2.5 mb-1 text-2xl font-semibold text-main-text">{name}</h1>
                <hr className="flex-1 border-gray-400" />
              </div>
              <p className="text-sm leading-4 text-sec-text">{description}</p>
            </div>
            <h1 className="flex justify-center my-8 text-sm font-medium text-sec-text">
              {price.currency}${" "}
              <span className="mx-1 -mt-1 text-4xl font-bold tracking-tighter text-pri-600">
                {numeral(price.amount).format("0,0")}
              </span>
              /mes
            </h1>
            <ul className="mb-3 space-y-3">
              <li className="flex leading-3 text-main-text">
                <IconCircleCheck className="w-5 h-5 mr-2 text-pri-500" strokeWidth={2.5} />
                <span className="flex-1 text-sm">
                  Publicaciones con hasta <b className="underline text-pri-500">{images}</b> imágenes.
                </span>
              </li>
              <li className="flex leading-3 text-main-text">
                <IconCircleCheck className="w-5 h-5 mr-2 text-pri-500" strokeWidth={2.5} />
                <span className="flex-1 text-sm">
                  Podrás almacenar <b className="underline text-pri-500">{numberPost}</b> Publicaciones.
                </span>
              </li>
              {/* <li className="flex leading-3 text-main-text">
                  <IconCircleCheck
                    className="w-5 h-5 mr-2 text-pri-500"
                    strokeWidth={2.5}
                  />
                  <span className="flex-1 text-sm">
                    Realiza un máximo de{" "}
                    <b className="underline text-pri-500">
                      {plan.benefits.postLimit}
                    </b>{" "}
                    publicaciones.
                  </span>
                </li> */}
              {/* <li className="flex leading-3 text-main-text">
                  <IconCircleCheck className="w-5 h-5 mr-2 text-pri-500" strokeWidth={2.5} />
                  <span className="flex-1 text-sm">
                    Destaca aspectos importantes con{" "}
                    <b className="underline text-pri-500">{plan.benefits.sections.allow} </b>
                    {plan.benefits.sections.allow === 1 ? "Sección." : "Secciones."}{" "}
                    {/* {!!plan.benefits.sections.videos && (
                      <b className="underline text-pri-500">
                        {`(máx. ${plan.benefits.sections.videos} ${
                          plan.benefits.sections.videos === 1
                            ? "video"
                            : "videos"
                        }).`}
                      </b>
                    )} 
                  </span>
                </li> 
                {/* {plan.benefits.branchOffice > 1 && (
                  <li className="flex leading-3 text-main-text">
                    <IconCircleCheck
                      className="w-5 h-5 mr-2 text-pri-500"
                      strokeWidth={2.5}
                    />
                    <span className="flex-1 text-sm">
                      Reparte tus publicaciones entre{" "}
                      <b className="underline text-pri-500">
                        {plan.benefits.branchOffice}
                      </b>{" "}
                      Sucursales.
                    </span>
                  </li>
                )} */}

              <li className="flex leading-3 text-main-text">
                <IconCircleCheck className="w-5 h-5 mr-2 text-pri-500" strokeWidth={2.5} />
                <span className="flex-1 text-sm">Nuevas funciones futuras.</span>
              </li>
            </ul>
          </div>
          <Link href="/contact-us">
            <a className="block w-full text-center btn pri">Contáctanos</a>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default PricingPlan;
