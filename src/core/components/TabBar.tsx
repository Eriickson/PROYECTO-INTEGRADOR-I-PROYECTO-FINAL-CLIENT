import React, { useEffect, useState } from "react";

export interface ITabBar {
  name: string;
  isActive?: boolean;
  Panel: React.FC;
}

interface TabBarProps {
  right?: boolean;
  tabs: ITabBar[];
  sessionStorageName: string;
}

export const TabBar: React.FC<TabBarProps> = ({ right, tabs, sessionStorageName }) => {
  const [tabsState, setTabsState] = useState<ITabBar[]>([]);

  useEffect(() => {
    const activeAppTab = sessionStorage.getItem(sessionStorageName);
    if (activeAppTab) {
      setTabsState(
        tabs.map(tab => (tab.name === activeAppTab ? { ...tab, isActive: true } : { ...tab, isActive: false })),
      );
    } else {
      setTabsState(tabs.map((tab, i) => (i === 0 ? { ...tab, isActive: true } : { ...tab, isActive: false })));
    }
  }, []);

  return (
    <div>
      <div className="mb-2 overflow-auto bg-gray-100 shadow">
        <nav className="max-w-max w-max">
          <ul className={`flex ${right && "justify-end"}`}>
            {tabsState.map((tab, currency) => (
              <li
                key={currency}
                className={`px-4 py-2.5 md:px-6 md:py-3 font-semibold duration-150 border-t-2 cursor-pointer flex items-center ${
                  tab.isActive
                    ? "hover:border-pri-500 border-pri-500 text-pri-500 bg-white"
                    : "text-gray-500 border-gray-200"
                }`}
                onClick={() => {
                  sessionStorage.setItem(sessionStorageName, tab.name);

                  setTabsState(
                    tabsState.map((item, i) =>
                      currency === i ? { ...item, isActive: true } : { ...item, isActive: false },
                    ),
                  );
                }}
              >
                <div className="mx-auto text-sm select-none max-w-max md:text-base">{tab.name}</div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <section>
        {tabsState.map(({ Panel, isActive }, currency) => (
          <React.Fragment key={currency}>{isActive && <Panel />}</React.Fragment>
        ))}
      </section>
    </div>
  );
};
