import React from "react";

// Packages
import moment from "moment";

// Redux
import { useSelector } from "@/store/hooks";

// Styles and Icons
import { IconClock, IconMapPin, IconEye } from "@tabler/icons";

// My Components
import ContactOwner from "./ContactOwner";
import { PanelComponent } from "@/components";

const InformationPanel: React.FC = () => {
  const { post } = useSelector(({ post }) => post);
  const postCreatedAt = new Date(parseInt(post?.createdAt || ""));
  console.log(post?.createdAt);

  return (
    <PanelComponent
      title={
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <h3 className="text-lg font-semibold text-pri-500">{post?.title}</h3>
          <h3 className="w-auto p-1 font-semibold text-success-500 bg-success-50 max-w-max">RD$ 3,244,324</h3>
        </div>
      }
    >
      <div className="flex flex-col justify-between md:items-center md:flex-row lg:flex-col xl:flex-row">
        <div className="mb-1">
          <div className="flex space-x-3 mb-1.5">
            {/* Fecha */}
            <div className="flex">
              <div className="flex items-center text-xs font-medium md:text-sm text-sec-text">
                <IconClock className="w-5 h-5 mr-1 text-gray-400" />
                <span> {moment(postCreatedAt).locale("es-do").startOf("minutes").fromNow()}</span>
              </div>
            </div>
            {/* Lugar */}
            <div className="flex md:flex-row">
              <div className="flex items-center text-xs font-medium md:text-sm text-sec-text">
                <IconMapPin className="w-5 h-5 mr-1 text-gray-400" />
                <span>USA</span>
              </div>
            </div>
            {/* Vistas */}
            {/* <div className="flex md:flex-row">
              <div className="flex items-center text-xs font-medium md:text-sm text-sec-text">
                <IconEye className="w-5 h-5 mr-1 text-gray-400" />
                <span>{post?.visits}</span>
              </div>
            </div> */}
          </div>
          <div className="flex flex-wrap items-center text-xs">
            {post?.tags.map((tag, i) => (
              <span key={i} className="p-1 px-2 mb-1 mr-1 font-semibold bg-pri-100 text-pri-500">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* <div className="hidden md:block">
          <ContactOwner />
        </div> */}
      </div>
      <div className="mb-2">
        <h3 className="font-semibold text-main-text">Descripción</h3>
        <p className="text-sm xl:text-base text-sec-text">{post?.description}</p>
      </div>
      {/* Datos Generales */}
      {/* <div className="md:hidden">
        <ContactOwner />
      </div> */}
    </PanelComponent>
  );
};

export default InformationPanel;
