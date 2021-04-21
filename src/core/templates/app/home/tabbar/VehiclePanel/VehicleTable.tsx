import React, { useState } from "react";

// Styles and Icons
import { IconChevronUp, IconChevronDown } from "@tabler/icons";

// My Components
import RowTable from "./RowTable";

const VehicleTable: React.FC = () => {
  const [columns] = useState([
    {
      label: "Marca",
      isSort: false,
      orderByDesc: true,
      fieldObject: "brand",
    },
    {
      label: "Modelo",
      isSort: false,
      orderByDesc: true,
      fieldObject: "model",
    },
    {
      label: "Año",
      isSort: false,
      orderByDesc: true,
      fieldObject: "year",
    },
    {
      label: "Subido",
      isSort: false,
      orderByDesc: true,
      fieldObject: "createdAt",
    },
    {
      label: "Precio",
      isSort: false,
      orderByDesc: true,
      fieldObject: "pricing.price",
    },
  ]);

  return (
    <div className="mx-1 bg-white border-t-2 shadow border-pri-500 md:mx-0">
      <div className="flex flex-col overflow-hidden">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b-2 bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase"></th>
                    {columns.map((column, current) => (
                      <th
                        key={current}
                        className="px-6 py-3 text-sm leading-4 tracking-wider text-left text-gray-500 uppercase"
                      >
                        <button className="flex items-center w-full">
                          <span className="mr-1.5 font-medium ">{column.label}</span>
                          <div className={`${!column.isSort && "invisible"}`}>
                            <IconChevronUp
                              strokeWidth={2.5}
                              className={`w-3 h-3  ${!column.orderByDesc ? "opacity-1 text-pri-500" : "opacity-50"}`}
                            />
                            <IconChevronDown
                              strokeWidth={2.5}
                              className={`w-3 h-3 -mt-1 opacity-1 ${
                                column.orderByDesc ? "opacity-1 text-pri-500" : "opacity-50"
                              }`}
                            />{" "}
                          </div>
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <RowTable />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleTable;
