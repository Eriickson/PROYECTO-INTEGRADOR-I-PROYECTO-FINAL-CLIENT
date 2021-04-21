import React from "react";

import Sticky from "react-sticky-box";

// Redux
import { useSelector } from "@/store/hooks";

// My Components
import { MainLayout } from "@/layouts";
// import PanelPosts from "./PanelPosts";
import MainCover from "./MainCover";
// import AsideLeft from "./AsideLeft";
import TabbarAgency from "./TabbarAgency";
import { Card } from "@/components";
import Contacts from "./Contacts";
import { IconMapPin } from "@tabler/icons";

export const AgencyTemplate: React.FC = () => {
  const { agencyProfile } = useSelector(({ agency }) => agency);

  return (
    <MainLayout>
      <div>
        <MainCover />
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
            <Sticky offsetTop={8}>
              <div className="space-y-2">
                <Card>
                  <div className="flex flex-col sm:flex-row md:flex-col">
                    <div className="w-full mb-2 mr-2 sm:w-5/12 md:w-full">
                      <div className="p-2 shadow-inner bg-gray-50">
                        <img
                          src="https://cdn2.f-cdn.com/contestentries/159844/14014300/54ec258802556_thumb900.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold leading-none sm:text-2xl text-main-text">
                        {agencyProfile?.data.name}
                      </h2>
                      <p className="mb-2 text-sm">{agencyProfile?.data.slogan}</p>
                      {/* <button className="w-full btn pri">Contactar</button> */}
                    </div>
                    <div className="flex items-start">
                      <IconMapPin className="mr-2 text-orange-600" />
                      <p>
                        {agencyProfile?.data.ubication.direction.reference},{" "}
                        {agencyProfile?.data.ubication.direction.sector.label},{" "}
                        {agencyProfile?.data.ubication.direction.municipality.label},{" "}
                        {agencyProfile?.data.ubication.direction.province.label}
                      </p>
                    </div>
                  </div>
                </Card>
                <Contacts />
              </div>
            </Sticky>
          </div>
          <TabbarAgency />
        </div>
      </div>
    </MainLayout>
  );
};
