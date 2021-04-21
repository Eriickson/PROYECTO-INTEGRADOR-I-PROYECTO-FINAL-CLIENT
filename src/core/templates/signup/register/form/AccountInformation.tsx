import { ErrorComponent } from "@/components";
import React from "react";

// Packages
import { useFormContext } from "react-hook-form";

// Redux
import { useSelector } from "src/store/hooks/useSelector";

// My Components
import SectionCover from "./SectionCover";
import TitleSection from "./TitleSection";

const AccountInformation: React.FC = () => {
  const { register, errors } = useFormContext();
  const { emailVerifed } = useSelector(store => store.account);

  return (
    <div className="mb-3 bg-white rounded-md">
      <TitleSection
        title={"Datos de tu cuenta"}
        subtitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur pariatur ex suscipit fugit explicabo animi."
        }
      />
      <SectionCover>
        <div className="flex justify-between col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <label htmlFor="username" className="text-sm font-medium select-none text-sec-text">
            Nombre de usuario <b className="text-danger-500 font-roboto">*</b>
          </label>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-6">
          <input
            id="username"
            type="text"
            className={`w-full form-control ${errors.username && "danger"}`}
            name="username"
            placeholder="Nombre de usuario"
            ref={register}
          />
          <ErrorComponent name="username" error={errors} />
        </div>
      </SectionCover>
      <SectionCover>
        <div className="flex justify-between col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <label htmlFor="email" className="text-sm font-medium select-none text-sec-text">
            Correo electrónico <b className="text-danger-500 font-roboto">*</b>
          </label>
        </div>
        <input
          id="email"
          type="text"
          className="col-span-12 form-control md:col-span-9 lg:col-span-8 xl:col-span-6"
          name="email"
          placeholder="Correo electrónico"
          value={emailVerifed}
          disabled
        />
      </SectionCover>
      <SectionCover>
        <div className="flex justify-between col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <label htmlFor="password" className="text-sm font-medium select-none text-sec-text">
            Contraseña <b className="text-danger-500 font-roboto">*</b>
          </label>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-6">
          <input
            id="password"
            type="password"
            className={`w-full form-control ${errors.password && "danger"}`}
            name="password"
            placeholder="Contraseña"
            ref={register}
          />
          <ErrorComponent name="password" error={errors} />
        </div>
      </SectionCover>
      <SectionCover>
        <div className="flex justify-between col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <label htmlFor="confirmPassword" className="text-sm font-medium select-none text-sec-text">
            Confirmar Contraseña <b className="text-danger-500 font-roboto">*</b>
          </label>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8 xl:col-span-6">
          <input
            id="confirmPassword"
            className={`w-full form-control ${errors.confirmPassword && "danger"}`}
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            ref={register}
          />
          <ErrorComponent name="confirmPassword" error={errors} />
        </div>
      </SectionCover>
    </div>
  );
};

export default AccountInformation;
