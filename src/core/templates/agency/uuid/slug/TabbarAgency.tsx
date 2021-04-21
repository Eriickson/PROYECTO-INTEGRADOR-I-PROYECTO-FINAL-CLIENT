import React, { useState } from "react";

// My Components
import { TabBar, ITabBar } from "@/components";
import PostTab from "./tabs/PostTab";

const TabbarAgency: React.FC = () => {
  const [listTabs] = useState<ITabBar[]>([
    {
      name: "Publicaciones",
      Panel: PostTab,
      isActive: true,
    },
  ]);

  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9">
      <TabBar tabs={listTabs} sessionStorageName="agency" />
    </div>
  );
};

export default TabbarAgency;
