import React, { useState } from "react";
import Link from "next/link";

// Styles and Icons
import { IconHelp, IconHome } from "@tabler/icons";

// My Components
import { TransitionPage } from "@/animations";
import { Footer, LogoIcon, TopAlertBanner } from "@/components";

interface LoginLayoutProps {
  BottomComponent?: React.FC;
}

export const LoginLayout: React.FC<LoginLayoutProps> = ({ children, BottomComponent }) => {
  const [showError, setShowError] = useState(false);

  return (
    <TransitionPage>
      <div className="flex flex-col justify-between min-h-screen bg-bg">
        <div>
          <header className="px-5 py-6 text-center bg-white shadow">
            <div className="container flex justify-between w-full">
              <Link href="/">
                <a className="flex items-center font-medium duration-150 cursor-pointer hover:opacity-60">
                  <IconHome className="w-5 h-5 mr-1" />
                  <span className="hidden md:inline-block">Inicio</span>
                </a>
              </Link>
              <h1 className="text-2xl font-semibold duration-150 text-main-text hover:text-pri-500">
                <Link href="/">
                  <a>
                    <LogoIcon className="w-48 opacity-90" />
                  </a>
                </Link>
              </h1>
              <Link href="#">
                <a className="flex items-center font-medium duration-150 cursor-pointer hover:opacity-60">
                  <IconHelp className="w-5 h-5 mr-1" />
                  <span onClick={() => setShowError(!showError)} className="hidden md:inline-block">
                    Ayuda
                  </span>
                </a>
              </Link>
            </div>
          </header>
          <TopAlertBanner />
        </div>
        <div className="container">
          <div className="max-w-sm px-1 mx-auto">{children}</div>
          <div className="mt-5 text-center">{BottomComponent && <BottomComponent />}</div>
        </div>
        <Footer />
      </div>
    </TransitionPage>
  );
};
