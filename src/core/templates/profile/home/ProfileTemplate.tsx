import React from "react";

// NextJS
import Link from "next/link";

// Packages
import { signOut, useSession } from "next-auth/client";

// My Components
import { MainLayout } from "@/layouts";
import PanelTop from "./PanelTop";
import EditData from "./EditData/EditData";

export const ProfileTemplate: React.FC = () => {
  const [session] = useSession();
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-2">
        {session?.user.agencyId ? (
          <Link href="/app">
            <a className="w-full col-span-12 text-center cursor-pointer btn pri">Administrar mi agencía</a>
          </Link>
        ) : (
          <Link href="/agency/new">
            <a className="w-full col-span-12 text-center cursor-pointer btn warning">Crea tu agencía</a>
          </Link>
        )}
        <div className="col-span-12">
          <PanelTop />
        </div>
        <div className="col-span-12">
          <EditData />
        </div>
        <div className="col-span-12">
          <div className="flex justify-between">
            <button className="w-full btn danger md:w-auto" onClick={() => signOut({ callbackUrl: "/" })}>
              Cerrar sesión
            </button>
            {/* <div className="flex justify-end">
              <button className="mr-2 btn danger outline">Restablecer</button>
              <button className="btn pri">Guardar</button>
            </div> */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
