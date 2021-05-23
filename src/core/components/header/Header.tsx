import React from "react";

// Next
import Link from "next/link";

// Packages
import Headroom from "react-headroom";
import { signIn, useSession } from "next-auth/client";

// Styles and Icons
import { IconBusinessplan, IconSearch, IconSquarePlus } from "@tabler/icons";
import { css } from "@emotion/core";

// My Components
import { LogoIcon, Image } from "@/components";
import ModalScreensSm from "./ModalScreenSm";
import { TopAlertBanner } from "../TopAlertBanner";

export const MainHeaderComponent: React.FC = () => {
  const [session] = useSession();

  return (
    <>
      <>
        <Headroom
          css={css`
            width: 100%;
            .headroom {
              z-index: 30 !important;
            }
          `}
        >
          <header className="pr-1.5 py-6 bg-white border-b shadow md:py-8">
            <div className="container flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="mr-5 text-xl font-semibold text-pri-500">
                  <Link href="/">
                    <a>
                      <LogoIcon className="w-48 md:w-56 lg:64" />
                    </a>
                  </Link>
                </h1>
              </div>
              <NavBar />
              <div className="flex items-center justify-end">
                {session ? (
                  <div className="flex items-center">
                    <div className="hidden mr-2 md:block">
                      <h3 className="w-32 font-medium truncate">{session?.user.name}</h3>
                    </div>
                    <div className="w-12 h-12">
                      <Link href="/profile">
                        <a>
                          <picture>
                            <Image src={session?.user.image || ""} />
                          </picture>
                        </a>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <button
                      className="mr-0 md:mr-2 btn pri"
                      onClick={() => {
                        sessionStorage.setItem("viewLogin", "SIGNUP");
                        signIn();
                      }}
                    >
                      Únete
                    </button>
                    <button
                      className="hidden btn pri outline md:flex"
                      onClick={() => {
                        sessionStorage.setItem("viewLogin", "SIGNIN");
                        signIn();
                      }}
                    >
                      Iniciar Sesión
                    </button>
                  </div>
                )}
                <ModalScreensSm />
              </div>
            </div>
          </header>
          <TopAlertBanner />
        </Headroom>
        <div className="fixed top-0 left-0 right-0 z-10 w-full">
          <TopAlertBanner />
        </div>
      </>
    </>
  );
};

const NavBar: React.FC = () => {
  const [session] = useSession();

  return (
    <nav className="items-center hidden lg:flex">
      <ul className="flex">
        <li className="mx-1">
          <Link href="/search/vehicle">
            <a className="flex items-center px-3 py-2 font-semibold duration-150 border-b-2 border-transparent hover:text-pri-500 hover:border-pri-500">
              <IconSearch className="w-5 h-5 mr-2" />
              Buscar vehículos
            </a>
          </Link>
        </li>
        {session?.user.agencyId && (
          <li className="mx-1">
            <Link href="/post/new">
              <a className="flex items-center px-3 py-2 font-semibold duration-150 border-b-2 border-transparent hover:text-pri-500">
                <IconSquarePlus className="w-5 h-5 mr-2" />
                Publica tu vehículo
              </a>
            </Link>
          </li>
        )}
        {session?.user && !session?.user.agencyId && (
          <li className="mx-1">
            <Link href="/agency/new">
              <a className="flex items-center px-3 py-2 font-semibold duration-150 border-b-2 border-transparent text-warning-500 hover:text-warning-400 hover:border-warning-500">
                <IconSquarePlus className="w-5 h-5 mr-2" />
                Crea tu agencia
              </a>
            </Link>
          </li>
        )}
        <li className="mx-1">
          <Link href="/plans">
            <a className="flex items-center px-3 py-2 font-semibold duration-150 border-b-2 border-transparent hover:text-pri-500 hover:border-pri-500">
              <IconBusinessplan className="w-5 h-5 mr-2" />
              Planes
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
