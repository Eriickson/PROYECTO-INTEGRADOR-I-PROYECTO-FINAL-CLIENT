import React, { useState } from "react";
import AsideLeft from "./AsideLeft";

// My Components
import { TabBar, ITabBar } from "@/components";
// import HomePanel from "./tabbar/HomePanel";
// import ContactsPanel from "./tabbar/ContactsPanel";
import VehiclesPanel from "./tabbar/VehiclesPanel";

const Dashboard: React.FC = () => {
  const [listTabs] = useState<ITabBar[]>([
    // {
    //   Panel: HomePanel,
    //   name: "Inicio",
    // },
    {
      Panel: VehiclesPanel,
      name: "Vehículos",
    },
    // {
    //   Panel: ContactsPanel,
    //   name: "Contactos",
    // },
  ]);

  return (
    <div className="grid grid-cols-12 gap-2">
      <AsideLeft />
      <div className="col-span-12 xl:col-span-9">
        <TabBar tabs={listTabs} sessionStorageName="activeAppTab" />
      </div>
    </div>
  );
};

export default Dashboard;
