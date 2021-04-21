import React from "react";

// NextJS
import { useRouter } from "next/router";

// Packages
import moment from "moment";
import { useFormContext } from "react-hook-form";

const DatePublication: React.FC = () => {
  const { query } = useRouter();
  const { register } = useFormContext();

  return (
    <div className="select-none">
      <p className="mb-2 text-sm font-light text-sec-text">Fecha de publicación</p>
      <div className="px-1">
        <label className="block mb-1 cursor-pointer" htmlFor="all-days">
          <input id="all-days" type="radio" ref={register} name="createdAt" value="" defaultChecked />
          <span className="ml-2 font-medium cursor-pointer text-main-text">Todos</span>
        </label>
        <label className="block mb-1 cursor-pointer" htmlFor="only-day">
          <input
            type="radio"
            ref={register}
            name="createdAt"
            id="only-day"
            value={moment().subtract(1, "day").format("YYYY-MM-DD").replace(/-/g, ".")}
            defaultChecked={query.createdAt === moment().subtract(1, "day").format("YYYY-MM-DD")}
          />
          <span className="ml-2 font-medium cursor-pointer text-main-text">Hace 1 día</span>
        </label>
        <label className="block mb-1 cursor-pointer" htmlFor="seven-days">
          <input
            type="radio"
            ref={register}
            name="createdAt"
            id="seven-days"
            value={moment().subtract(7, "days").format("YYYY-MM-DD").replace(/-/g, ".")}
            defaultChecked={query.createdAt === moment().subtract(7, "day").format("YYYY-MM-DD")}
          />
          <span className="ml-2 font-medium cursor-pointer text-main-text">Hace 7 días</span>
        </label>
        <label className="block mb-1 cursor-pointer" htmlFor="thirty-days">
          <input
            type="radio"
            ref={register}
            name="createdAt"
            id="thirty-days"
            value={moment().subtract(30, "days").format("YYYY-MM-DD").replace(/-/g, ".")}
            defaultChecked={query.createdAt === moment().subtract(30, "day").format("YYYY-MM-DD")}
          />
          <span className="ml-2 font-medium cursor-pointer text-main-text">Hace 30 días</span>
        </label>
      </div>
    </div>
  );
};

export default DatePublication;
