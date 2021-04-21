import React from "react";

// NextJS
import Link from "next/link";

// Styles and Icons
import { IconPencil, IconPlus, IconTrash } from "@tabler/icons";

const Options: React.FC = () => {
  return (
    <div className="flex mb-2 space-x-2">
      <Link href="/post/new">
        <a className="btn pri icon right">
          Nuevo <IconPlus />
        </a>
      </Link>

      <button className="btn warning icon right">
        Editar <IconPencil />
      </button>
      <button className="btn danger icon right">
        Eliminar <IconTrash />{" "}
      </button>
    </div>
  );
};

export default Options;
