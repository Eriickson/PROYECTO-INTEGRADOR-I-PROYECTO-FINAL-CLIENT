import React, { useEffect, useState } from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/router";

// Packages
import { useForm } from "react-hook-form";

// Redux
import { useActions } from "@/store/hooks";

// My Elements
import { FormSignInResolver, IFormSignInOnSubmit } from "@/validations";

// My Components
import { ErrorComponent } from "src/core/components";
import { useSelector } from "@/store/hooks";

interface FromSigninProps {
  onSubmit: (values: IFormSignInOnSubmit) => void;
}

export const FormSignin: React.FC<FromSigninProps> = ({ onSubmit }) => {
  const { csrfToken } = useSelector(({ auth }) => auth);
  const { setAlertBanner } = useActions();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: FormSignInResolver });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    document.getElementById("identifier")?.focus();
    if(router.query.error) setAlertBanner({ isActive: true, message: String(router.query.error), type: "DANGER" });
    
  }, []);

  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <div className="mb-1">
        <div className="mb-2">
          <div className="flex items-center justify-between mb-1 text-xs">
            <div className="ml-1">
              <label htmlFor="identifier">
                <b className="text-gray-600">Correo o nombre de usuario</b>
              </label>
              <b className="text-danger-500 font-roboto">*</b>
            </div>
          </div>
          <input
            id="identifier"
            className={`w-full form-control ${errors.identifier && "danger"}`}
            placeholder="Correo o nombre de usuario"
            defaultValue={router.query.identifier}
            minLength={6}
            required
            {...register("identifier")}
          />
          <ErrorComponent name="identifier" error={errors} />
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-xs">
            <div className="ml-1">
              <label htmlFor="password">
                <b className="text-gray-600">Contraseña</b>
              </label>
              <b className="text-danger-500 font-roboto">*</b>
            </div>
            <div className="flex items-center">
              <button type="button" className="mr-1" onClick={() => setShowPassword(!showPassword)}>
                <b className="duration-150 text-success-500 hover:opacity-50">
                  {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                </b>
              </button>
            </div>
          </div>
          <input
            id="password"
            className={`w-full form-control ${errors.password && "danger"}`}
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            minLength={8}
            required
            autoComplete="on"
            {...register("password")}
          />
          <ErrorComponent name="password" error={errors} />
        </div>
      </div>
      <div className="flex justify-end mb-2">
        {/* <label htmlFor="recordarme" className="text-sm cursor-pointer select-none">
          <input id="recordarme" name="remember" type="checkbox" className="mr-1 transform scale-75" ref={register} />
          Recordarme
        </label> */}
        <Link href="/reset-password">
          <a className="text-sm font-medium duration-200 cursor-pointer text-sec-text hover:underline hover:text-warning-500">
            Olvidaste tu contraseña?
          </a>
        </Link>
      </div>
      <button className="w-full btn pri">Iniciar Sesión</button>
    </form>
  );
};
