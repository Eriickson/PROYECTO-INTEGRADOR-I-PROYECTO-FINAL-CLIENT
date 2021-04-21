import React from "react";

// My Components
import { PanelComponent } from "@/components";

// Types and Interfaces
interface ListingTemplateProps {
  name: string;
  list: string[];
}

const ListingTemplate: React.FC<ListingTemplateProps> = ({ list, name }) => {
  return (
    <PanelComponent title={name} notBorderTop>
      <ul className="grid grid-cols-12 gap-2 md:gap-3">
        {list.length ? (
          (
          list.map((item, i) => (
            <li key={i} className="col-span-6 md:col-span-4">
              <strong className="text-main-text">{item}</strong>
            </li>
          )))
        )  : (
          <li className="col-span-12 font-medium text-center line-through text-warning-400">
            No se han agregado <b>Accesorios</b>
          </li>
        )}
      </ul>
    </PanelComponent>
  );
};

export default ListingTemplate;
