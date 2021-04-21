import React from "react";

// Packages
import numeral from "numeral";

// Redux
import { useSelector } from "@/store/hooks";

// My Components
import { PanelComponent } from "@/components";

const GeneralData: React.FC = () => {
  const { post } = useSelector(({ post }) => post);

  return (
    <PanelComponent title="Datos Generales" notBorderTop>
      <ul className="grid md:grid-cols-2">
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/1253/1253323.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Marca:
            <span className="font-semibold text-main-text ml-1.5">{post?.brand.label}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/1705/1705367.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Modelo:<span className="font-semibold text-main-text ml-1.5">{post?.model.label}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/2052/2052444.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Color Interior:<span className="font-semibold text-main-text ml-1.5">{post?.interiorColor.label}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/2761/2761393.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Color de Pintura:<span className="font-semibold text-main-text ml-1.5">{post?.paintColor.label}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/2893/2893019.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Combustible:<span className="font-semibold text-main-text ml-1.5">{post?.fuel.label}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/1455/1455330.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Recorrido:
            <span className="font-semibold text-main-text ml-1.5">
              {numeral(post?.mileage.value).format("0,0")} {post?.mileage.unit}
            </span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/3208/3208749.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Año:<span className="font-semibold text-main-text ml-1.5">{post?.year}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/1464/1464738.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Cilindros:<span className="font-semibold text-main-text ml-1.5">{post?.cylinders}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/2481/2481225.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Transmisión:
            <span className="font-semibold text-main-text ml-1.5">{post?.transmission.label}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/603/603512.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Categoria:<span className="font-semibold text-main-text ml-1.5">{post?.category.label}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/vstatic/svg/501/501583.svg?token=exp=1617971441~hmac=1eb39747b503f18f03b5c0586a72b5c8"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Tracción:<span className="font-semibold text-main-text ml-1.5">{post?.traction.label}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/3347/3347753.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Cantidad de puertas:<span className="font-semibold text-main-text ml-1.5">{post?.doors}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.com/svg/static/icons/svg/809/809992.svg"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Cantidad de pasageros:<span className="font-semibold text-main-text ml-1.5">{post?.passengers}</span>
          </p>
        </li>
        <li className="flex items-center p-2 border-b-2 border-dashed border-pri-200">
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://www.flaticon.es/svg/vstatic/svg/2947/2947656.svg?token=exp=1617971550~hmac=ced6e63eb14ba3737ad8cee4be1eaf12"
            alt=""
          />
          <p className="mr-1 text-sm text-sec-text">
            Versión:<span className="font-semibold text-main-text ml-1.5">{post?.version.label}</span>
          </p>
        </li>
      </ul>
    </PanelComponent>
  );
};

export default GeneralData;
