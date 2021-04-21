import React from "react";

// NextJS
import Link from "next/link";

// My Components
import { Card } from "@/components";

const MakePost: React.FC = () => {
  return (
    <>
      <Card notBorderTop>
        <div className="px-4 pt-12 pb-5 mx-auto lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16 sm:px-6">
          <div>
            <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Publica <span className="text-pri-600">Gratis</span> tus vehiculos
            </h2>
            <p className="text-lg font-medium text-sec-text">
              Publica tus primeros <strong>5</strong> vehículos de forma gratuita en la mejor página.
            </p>
          </div>
          <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex mr-3">
              <Link href="/post/new">
                <a className="shadow btn pri borderless lg">Nueva publicación</a>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default MakePost;
