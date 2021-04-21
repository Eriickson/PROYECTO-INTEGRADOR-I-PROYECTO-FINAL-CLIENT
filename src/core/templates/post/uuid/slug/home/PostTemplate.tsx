import React from "react";

// Packages
import Sticky from "react-sticky-box";

// My Components
import { MainLayout } from "@/layouts";
import { CarouselImages } from "./panels/carousel/CarouselImages";
import GeneralData from "./panels/GeneralData";
import InformationPanel from "./panels/InformationPanel";
import Listings from "./panels/listings/Listings";
import AgencyPanel from "./panels/AgencyPanel";
import Contacts from "./panels/Contacts";
import SidePosts from "./panels/SidePosts";

export const PostTemplate: React.FC = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          <div className="pb-1 mb-2 bg-black shadow">
            {/* <CarouselImages /> */}
            <CarouselImages />
          </div>
          <div className="space-y-2">
            <InformationPanel />
            <GeneralData />
            <div className="lg:hidden">
              <AgencyPanel />
            </div>
            <div className="lg:hidden">
              <Contacts />
            </div>
            <Listings />
          </div>
        </div>
        <div className="hidden col-span-5 lg:block xl:col-span-4">
          <Sticky offsetTop={8}>
            <div className="grid gap-2">
              {/* Agencia */}
              <AgencyPanel />
              <Contacts />
              {/* <SidePosts /> */}
            </div>
          </Sticky>
        </div>
      </div>
    </MainLayout>
  );
};
