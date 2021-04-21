import React, { useState } from "react";

// Next
import Link from "next/link";
import { useSession } from "next-auth/client";

// Styles and Icons
import { IconMenu } from "@tabler/icons";

// My Components
import { LayoutModalSm } from "@/layouts";

const ModalScreenSm: React.FC = () => {
  const [session] = useSession();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative">
      <button className="block ml-2 shadow btn pri icon ghost lg:hidden" onClick={() => setModalOpen(!modalOpen)}>
        <IconMenu />
      </button>
      <LayoutModalSm state={modalOpen} setState={setModalOpen}>
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="mb-4">
            {session?.user ? (
              <Link href="/profile">
                <a className="px-8 py-2 text-sm font-semibold text-pri-500">Mi perfil</a>
              </Link>
            ) : (
              <Link href="/signin">
                <a className="px-8 py-2 text-sm font-semibold text-pri-500">Iniciar sesión</a>
              </Link>
            )}
          </li>
          <li className="mb-4">
            <Link href="/search/vehicle">
              <a className="px-8 py-2 text-sm font-semibold text-pri-500">Buscar</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/plans">
              <a className="px-8 py-2 text-sm font-semibold text-pri-500">Planes</a>
            </Link>
          </li>
          {true && (
            <li className="mb-4">
              <Link href="/post/new">
                <a className="px-8 py-2 text-sm font-semibold text-pri-500">Publicar</a>
              </Link>
            </li>
          )}
          <li className="mb-4">
            <Link href="/contact-us">
              <a className="px-8 py-2 text-sm font-semibold text-pri-500">Contáctanos</a>
            </Link>
          </li>
        </ul>
      </LayoutModalSm>
    </div>
  );
};
export default ModalScreenSm;
