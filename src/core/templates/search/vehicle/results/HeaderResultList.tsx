import React from "react";

// Redux
import { useActions, useSelector } from "@/store/hooks";

// Styles and Icons
import { IconLayoutGrid, IconLayoutList, IconList } from "@tabler/icons";

// My Components
import { Card } from "@/components";

const HeaderResultList: React.FC = () => {
  const { changePostView } = useActions();
  const { listStyle } = useSelector(({ post }) => post);

  return (
    <Card className="col-span-12">
      <div className="flex items-center justify-between">
        <div>{/* <span className="font-semibold text-pri-500">5</span> <b>Resultados encontrados</b> */}</div>
        <div className="flex space-x-1">
          <button
            type="button"
            className={`btn icon pri ${listStyle !== "GRID" && "ghost"}`}
            onClick={() => changePostView("GRID")}
          >
            <IconLayoutGrid className="w-5 h-5" />
          </button>
          <button
            type="button"
            className={`btn icon pri ${listStyle !== "INFO" && "ghost"}`}
            onClick={() => changePostView("INFO")}
          >
            <IconLayoutList className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default HeaderResultList;
