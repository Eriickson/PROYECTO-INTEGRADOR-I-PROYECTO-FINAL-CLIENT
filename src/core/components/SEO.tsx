import React from "react";
import { NextSeo } from "next-seo";

interface SEOProps {
  title: string;
}

export const SEO: React.FC<SEOProps> = ({ title, children }) => {
  return (
    <>
      <NextSeo
        title={`${title} | Automarket RD`}
        description={
          "Automarket RD es la página más moderna para comprar y vender todo tipos de vehículos en República Dominicana. Cuenta con todas las mejores funciones que harán experiencia lo más placentera posible, con la ventaja de que podrás crear agencias completamente gratis y comenzar a publicar tus vehículos de forma gratuita."
        }
      />
      {children}
    </>
  );
};
