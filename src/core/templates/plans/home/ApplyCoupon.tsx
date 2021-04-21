import React from "react";
import InputMask from "react-input-mask";
import { useForm, Controller } from "react-hook-form";

// Styles and Icons
import { css } from "@emotion/core";
import { IconTicket } from "@tabler/icons";

const ApplyCoupon: React.FC = () => {
  const { handleSubmit, control, errors } = useForm();

  async function onSubmit({ coupon }: { coupon: string }) {
    console.log(coupon);
  }

  return (
    <div className="mx-1 bg-pri-600 sm:mx-0">
      <div className="px-2 py-2 mx-auto">
        <div className="flex flex-col flex-wrap justify-between md:flex-row">
          <div className="flex items-center flex-1 w-full mb-3 md:mb-0">
            <span className="flex p-2 text-white bg-pri-700">
              <IconTicket className="w-6 h-6" />
            </span>
            <div className="ml-3">
              <p className="font-medium text-white">
                <span>Utiliza aquí tus cupones de descuento.</span>
              </p>
            </div>
          </div>
          <form className="sm:flex" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="coupon" className="sr-only">
              Cupón
            </label>
            <Controller
              name="coupon"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 14,
                maxLength: 14,
              }}
              render={({ onChange, value, name }) => (
                <InputMask
                  css={css`
                    &::placeholder {
                      text-transform: lowercase;
                    }
                  `}
                  id="coupon"
                  className={`w-full font-medium px-3 py-2 text-center placeholder-gray-500 uppercase duration-150 border-white rounded-none lg:w-48 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pri-700 focus:ring-white css-1emk2je-ApplyCoupon lg:max-w-md
                  ${errors.coupon && "bg-danger-50 text-danger-500"}`}
                  mask="****-****-****"
                  type="text"
                  name={name}
                  placeholder="Introduce tu cupón"
                  value={value || ""}
                  onChange={e => onChange(e.target.value)}
                />
              )}
            />

            <button
              type="submit"
              className="flex items-center justify-center w-full px-5 py-2 mt-3 text-base font-medium text-white duration-150 border rounded-none shadow border-pri-600 bg-pri-500 hover:bg-pri-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pri-700 focus:ring-white sm:mt-0 sm:ml-2 sm:w-auto sm:flex-shrink-0"
            >
              Aplicar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyCoupon;
