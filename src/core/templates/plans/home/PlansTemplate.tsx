import React from "react";

// Packages
import { useSession } from "next-auth/client";

// My Components
import { MainLayout } from "@/layouts";
import { Card } from "@/components";
import PricingPlan from "./PricingPlan";
import ApplyCoupon from "./ApplyCoupon";
import { IPlan } from "@/models";

interface PlansTemplateProps {
  plans: IPlan[];
}

export const PlansTemplate: React.FC<PlansTemplateProps> = ({ plans }) => {
  return (
    <MainLayout>
      <div className="mx-1 md:mx-0">
        <div className="mx-auto mb-3 sm:px-6 lg:px-8 ">
          <div className="text-center">
            {/* <p className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              Selecciona uno de nuestros <span className="text-pri-500">planes flexibles</span>
            </p> */}
            <p className="max-w-2xl text-sm leading-none text-gray-500 md:text-lg lg:mx-auto">
              Con <b className="text-main-text">Automarker RD</b> tendrás la oportunidad de hacer crecer tu agencia con
              los planes que mayor se adaptan a tus necesidades.
            </p>
          </div>
        </div>
      </div>
      <Card className="mb-2 text-center">
        {/* <h1>
          Si necesitas expandir más espacios, <b className="underline text-pri-500">Solicita una Agencia Profesional</b>
        </h1> */}
        <strong className="text-sm text-center text-danger-500">
          Por el momento estos planes no se pueden adquirir de manera pagada, contáctanos para adquirir algunos de
          ellos.
        </strong>
      </Card>
      <div className="grid gap-2 mb-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {plans.map((plan, i) => (
          <PricingPlan
            key={i}
            name={plan.name}
            price={{ currency: plan.price.currency, amount: plan.price.amount }}
            images={plan.benefits.images}
            numberPost={plan.benefits.posts}
            description={plan.description}
          />
        ))}
      </div>
      <ApplyCoupon />
    </MainLayout>
  );
};
