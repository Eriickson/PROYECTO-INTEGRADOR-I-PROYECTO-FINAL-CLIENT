import React from "react";

// Next
import Link from "next/link";

// Styles and Icons
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons";
import { LogoIcon } from "./LogoIcon";

export const Footer: React.FC = () => {
  return (
    <div className="bg-white shadow">
      <div className="container pt-5 pb-5 md:pt-10 px:2 sm:px-0">
        <div className="flex flex-col pb-3 mx-2 mb-3 border-b md:pb-5 md:mb-5">
          <div className="grid grid-cols-2 mb-5">
            <h1 className="text-3xl font-semibold text-pri-500">
              <Link href="/">
                <a>
                  <LogoIcon className="w-48" />
                </a>
              </Link>
            </h1>
            {/* <div className="hidden md:block">
              <NavbarMenu />
            </div> */}
            <ul className="flex justify-end">
              <li className="flex items-center duration-150 justify-center w-8 h-8 mx-1 cursor-pointer xs:mx-0.5 text-sec-text hover:text-blue-600 hover:bg-blue-100">
                <a href="https://www.facebook.com/Automarket-RD-106504608052915" target="_blank" rel="noreferrer">
                  <IconBrandFacebook />
                </a>
              </li>
              <li className="flex items-center duration-150 justify-center w-8 h-8 mx-1 cursor-pointer xs:mx-0.5 text-sec-text hover:text-pink-500 hover:bg-pink-100">
                <a href="https://www.instagram.com/automarket_rd_oficial" target="_blank" rel="noreferrer">
                  <IconBrandInstagram />
                </a>
              </li>
              {/* <li className="flex items-center justify-center w-8 h-8 mx-1 cursor-pointer xs:mx-0.5 text-sec-text hover:text-blue-500 hover:bg-blue-100">
                <IconBrandTwitter className="duration-150" />
              </li>
              <li className="flex items-center justify-center w-8 h-8 mx-1 cursor-pointer xs:mx-0.5 text-sec-text hover:text-green-500 hover:bg-green-100">
                <IconBrandWhatsapp className="duration-150" />
              </li> */}
            </ul>
          </div>
          {/* <div className="block md:hidden">
            <NavbarMenu />
          </div> */}
        </div>
        <div className="flex flex-col justify-between py-4 md:flex-row-reverse">
          {/* <div className="flex justify-center mb-5 space-x-4 md:mb-0 md:justify-end">
            <Link href="/terms-of-service">
              <a className="text-gray-600 duration-150 hover:text-pri-600 hover:underline">Términos de servicio</a>
            </Link>
            <Link href="/privacy-policy">
              <a className="text-gray-600 duration-150 hover:text-pri-600 hover:underline">Políticas de privacidad</a>
            </Link>
          </div> */}
          <p className="font-medium text-center text-sec-text">
            &copy; {new Date().getFullYear()} Automarket RD, Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

// const NavbarMenu = () => (
//   <nav>
//     <ul className="flex flex-col justify-center xs:flex-row">
//       <li className="mb-2 mr-2 md:mb-0 sm:mx-2">
//         <Link href="/">
//           <a className="p-1 text-lg font-medium text-sec-text">Inicio</a>
//         </Link>
//       </li>
//       <li className="mb-2 mr-2 md:mb-0 sm:mx-2">
//         <Link href="/search/vehicle">
//           <a className="p-1 text-lg font-medium text-sec-text">Buscar</a>
//         </Link>
//       </li>
//       {/* <li className="mb-2 mr-2 md:mb-0 sm:mx-2">
//         <Link href="/contact-us">
//           <a className="p-1 text-lg font-medium text-sec-text">Contáctanos</a>
//         </Link>
//       </li> */}
//     </ul>
//   </nav>
// );
