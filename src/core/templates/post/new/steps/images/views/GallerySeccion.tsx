import React from "react";

// Styles and Icons
import { IconNewSection } from "@tabler/icons";

// My Elements
import { IFileAccepted } from "@/shared";

// My Components
import CardSession from "./session/CardSession";
import ProgressBar from "./ProgressBar";

export interface ISessions {
  title: string;
  images: IFileAccepted[];
}

interface GallerySeccionProps {
  sessions: ISessions[];
  setCreatingSession: (state: boolean) => void;
  removeSession: (position: number) => void;
  editSession: (position: number) => void;
}

const GallerySeccion: React.FC<GallerySeccionProps> = ({
  sessions,
  setCreatingSession,
  removeSession,
  editSession,
}) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-3 mb-2">
        {!sessions.length && (
          <p className="col-span-12 py-5 font-semibold text-center text-gray-400 bg-gray-100 border-2 border-gray-300 border-dashed">
            No se han agregado secciones
          </p>
        )}
        {sessions.map((session, i) => (
          <CardSession
            key={i}
            session={session}
            removeSession={removeSession}
            position={i}
            setCreatingSession={setCreatingSession}
            editSession={editSession}
          />
        ))}
      </div>
      <div className="flex flex-col-reverse justify-between sm:flex-row sm:items-center">
        <div className="flex-1">
          <ProgressBar title="Cantidad de imágenes permitidas" total={sessions.length} max={6} />
        </div>
        <div className="flex justify-end flex-1">
          <button className="w-full sm:w-auto btn pri icon right" onClick={() => setCreatingSession(true)}>
            Nueva sección
            <IconNewSection />
          </button>
        </div>
      </div>
    </>
  );
};

export default GallerySeccion;
