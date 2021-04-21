import React from "react";

// NextJS
import Link from "next/link";

// My Components
import { Card } from "@/components";

const BannerCreateAgency: React.FC = () => {
  return (
    <Card notBorderTop>
      <div className="px-4 pt-12 pb-5 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Crea tu agencia <span className="text-pri-500">completamente gratis </span>
          </h2>
          <p className="text-lg font-medium text-sec-text">
            Comienza a publicar vehículos de forma gratuita con todas las ventajas que te da nuestra aplicación.
          </p>
        </div>
        <div className="flex mt-5 md:mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/agency/new">
              <a className="btn pri lg">Crear ahora</a>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BannerCreateAgency;
