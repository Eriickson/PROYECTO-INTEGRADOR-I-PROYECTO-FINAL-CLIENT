import React from "react";

// Styles and Icons
import { IconCheck } from "@tabler/icons";
import { css } from "@emotion/core";

// My Elements
import { IWizardStep } from "@/models";

// Types and Interfaces
interface StepIndicatorProps {
  stepsList: IWizardStep[];
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ stepsList, currentStep }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {stepsList.map((step, current) => {
        const followStep = stepsList.length - 1 !== current;
        const limitPosition = current < currentStep;
        const isCurrent = current == currentStep;

        return (
          <React.Fragment key={current}>
            <div className="relative mx-1">
              <button>
                {limitPosition ? (
                  <div className="grid w-10 h-10 border-2 rounded-full xs:w-12 xs:h-12 border-pri-500 bg-pri-500 place-items-center">
                    <IconCheck className="w-6 h-6 text-white" strokeWidth="2.5" />
                  </div>
                ) : (
                  <div
                    className={`grid w-10 xs:w-12 h-10 xs:h-12 duration-150 border-2 rounded-full shadow-md place-items-center font-semibold ${
                      isCurrent
                        ? "border-pri-500 text-pri-500 bg-white hover:bg-pri-200"
                        : "text-gray-500 bg-white border-gray-300 cursor-not-allowed"
                    }`}
                  >
                    <p>{current + 1}</p>
                  </div>
                )}
              </button>
              <div
                className={`absolute -mb-8 mt-0.5 font-medium text-sec-text ${followStep ? "left-0" : "right-0"}`}
                css={css`
                  transform: ${followStep && current !== 0 && "translate(-50%, -50%)"};
                  left: ${followStep && current !== 0 && "50%"};
                  margin-top: ${followStep && current !== 0 && "1rem"};
                `}
              >
                <button
                  className="hidden text-sm font-medium duration-200 cursor-pointer select-none md:block"
                  /* className={`hidden text-sm md:block cursor-pointer duration-200 select-none font-medium ${
                    step.completed ? "text-pri-500" : "cursor-not-allowed"
                  }`} */
                  disabled={!true}
                  css={css`
                    width: max-content;
                  `}
                >
                  {step.title}
                </button>
              </div>
            </div>

            {followStep && (
              <>
                <hr
                  className={`flex-1 border border-pri-400 ${
                    current <= currentStep ? "border-pri-400" : "border-sec-100"
                  }`}
                />
                <hr className={`flex-1 border ${limitPosition ? "border-pri-400" : "border-sec-100"}`} />
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
