import { PanelComponent } from "@/components";
import React from "react";

// Redux
import { useSelector } from "@/store/hooks";
import { IconMail, IconPhoneCall } from "@tabler/icons";

const AsideLeft: React.FC = () => {
  const { agencyProfile } = useSelector(({ agency }) => agency);

  return (
    <aside className="col-span-12 xl:col-span-3">
      <div className="space-y-2">
        <PanelComponent title="Contactos " notBorderTop>
          <ul className="space-y-2">
            {agencyProfile?.data.contacts.numberPhones.map((numberPhone, i) => (
              <li key={i}>
                <a className="flex items-center space-x-2 duration-150 hover:text-pri-600" href="#">
                  <IconPhoneCall className="w-5 h-5 text-gray-500" />
                  <p className="font-semibold text-gray-500 truncate w-36">{numberPhone.label}:</p>
                  <span className="font-semibold">{numberPhone.value}</span>
                </a>
              </li>
            ))}
            {agencyProfile?.data.contacts.emails.map((email, i) => (
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
        <PanelComponent notBorderTop title="Valoración"></PanelComponent>
      </div>
    </aside>
  );
};

export default AsideLeft;
