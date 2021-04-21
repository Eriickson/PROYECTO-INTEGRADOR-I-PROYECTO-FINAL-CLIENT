import React from "react";

// Redux
import { useSelector } from "@/store/hooks";

// Styles and Icons
import { IconMail, IconPhoneCall, IconCar } from "@tabler/icons";

// My Components
import { Card, PanelComponent, Image } from "@/components";
const AsideLeft: React.FC = () => {
  const { myAgency } = useSelector(({ agency }) => agency);

  return (
    <aside className="col-span-12 space-y-2 xl:col-span-3">
      <Card>
        <div className="mb-2 bg-gray-300 border-2">
          <Image resolution="x500" src={myAgency?.data.logo || ""} />
        </div>
        <h2 className="text-xl font-semibold text-pri-600">{myAgency?.data.name}</h2>
        <p className="text-sm text-gray-600">{myAgency?.data.slogan}</p>
      </Card>
      <PanelComponent title="Contactos " notBorderTop>
        <ul className="space-y-2">
          {myAgency?.data.contacts.numberPhones.map((numberPhone, i) => (
            <li key={i}>
              <a className="flex items-center space-x-2 duration-150 hover:text-pri-600" href="#">
                <IconPhoneCall className="w-5 h-5 text-gray-500" />
                <p className="font-semibold text-gray-500 truncate w-36">{numberPhone.label}:</p>
                <span className="font-semibold">{numberPhone.value}</span>
              </a>
            </li>
          ))}
          {myAgency?.data.contacts.emails.map((email, i) => (
            <li key={i}>
              <a className="flex items-center space-x-2 duration-150 hover:text-pri-600" href="#">
                <IconMail className="w-5 h-5 text-gray-500" />
                <p className="font-semibold text-gray-500 truncate w-36">{email.label}:</p>
                <span className="font-semibold">{email.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </PanelComponent>
      <PanelComponent notBorderTop title="Plan">
        <h1 className="font-semibold">Profesional</h1>
        <div className="w-full h-6 border bg-pri-100 border-pri-500 mb-1.5">
          <div className="w-1/2 h-full bg-pri-500"></div>
        </div>
        <div className="flex items-center font-semibold">
          <p className="mr-1">
            25/<span className="text-ter-500">100</span>
          </p>
          <IconCar />
        </div>
      </PanelComponent>
    </aside>
  );
};

export default AsideLeft;
