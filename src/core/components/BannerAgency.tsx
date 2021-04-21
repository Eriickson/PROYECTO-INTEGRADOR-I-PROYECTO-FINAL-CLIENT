import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// Redux

// Styles and Icons
import { IconX } from "@tabler/icons";

const BannerAgency = (): JSX.Element => {
  const [isActive] = useState(true);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          animate={{
            height: "max-content",
          }}
          exit={{
            height: 0,
          }}
          className="relative overflow-hidden bg-pri-600"
        >
          <div>
            <div className="container py-3">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center flex-1 w-0">
                  <span className="flex p-2 rounded-lg bg-pri-800">{/* <Zap className="text-white" /> */}</span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">Publicar tus vehiculos</span>
                    <span className="hidden md:inline">
                      Felicidades! Ya puede empezar a publicar tus vehiculos completamente gratis
                    </span>
                  </p>
                </div>
                <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
                  <div className="rounded-md shadow-sm">
                    <Link href="/agency/new">
                      <a className="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out bg-white border border-transparent rounded-none text-pri-600 hover:text-pri-500 focus:outline-none focus:shadow-outline">
                        Crea tu Agencia
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
                  <button className="w-6 h-6 text-white">
                    <IconX />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BannerAgency;
