import React from "react";

// NextJS
import { useRouter } from "next/router";

// Packages
import { useFormContext } from "react-hook-form";

// My Elements
import { IOption } from "@/models";

// Types and Interfaces
interface ConditionsProps {
  conditions: IOption[];
}

const Conditions: React.FC<ConditionsProps> = ({ conditions }) => {
  const { query } = useRouter();
  const { register } = useFormContext();

  return (
    <div className="select-none">
      <p className="mb-2 text-sm font-light text-sec-text">Condiciones</p>
      <div className="px-1">
        <label className="block mb-1 cursor-pointer" htmlFor="all">
          <input id="all" type="radio" name="condition" value="" ref={register} defaultChecked />
          <span className="ml-2 font-medium cursor-pointer text-main-text">Todos</span>
        </label>
        {conditions.map((condition, i) => (
          <label key={i} className="block mb-1 cursor-pointer" htmlFor={`${i}`}>
            <input
              id={`${i}`}
              type="radio"
              name="condition"
              value={`${condition.label}`}
              ref={register}
              defaultChecked={query.condition === condition.label.replace(/ /, "-").toLowerCase()}
            />
            <span className="ml-2 font-medium cursor-pointer text-main-text">{condition.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Conditions;
