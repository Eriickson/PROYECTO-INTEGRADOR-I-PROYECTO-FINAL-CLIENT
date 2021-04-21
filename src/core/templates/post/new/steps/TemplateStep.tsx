import React from "react";

// Styles and icons
import { motion } from "framer-motion";

// My Components
import { Card } from "@/components";

// Types and Interfaces
export interface TemplateStepProps {
  title: string;
  description: string;
}

export const TemplateStep: React.FC<TemplateStepProps> = ({ children, title, description }) => {
  return (
    <>
      <Card className="mb-2">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="w-full"
        >
          <div className="flex flex-col items-center mb-5">
            <h2 className="mb-1 text-xl font-semibold text-pri-500">{title}</h2>
            <div className="flex items-center justify-center w-full">
              <hr className="flex-1 border-gray-400" />
              <p className="mx-3 text-sm text-center text-sec-text">{description}</p>
              <hr className="flex-1 border-gray-400" />
            </div>
          </div>
          <>{children}</>
        </motion.div>
      </Card>
      {/* <Card notBorderTop>
        <div className="flex justify-end">
          <div className="flex">
            {!start && (
              <button
                className="mr-3 btn icon outline pri left"
                onClick={() => disptach(publicationActions.prevStepWizard())}
              >
                <ChevronLeft className="w-5 h-5" />
                Anterior
              </button>
            )}
            <button
              form="formulario"
              className="btn pri icon right"
              // disabled={!stepComponents[currentStep].completed}
            >
              {end ? "Publicar" : "Siguiente"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Card> */}
    </>
  );
};
