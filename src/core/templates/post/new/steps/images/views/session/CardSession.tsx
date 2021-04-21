import React from "react";

// Hooks
import { useToggle } from "@/hooks";

// Styles and Icons
import { IconH1, IconPencil, IconPhoto, IconTrash } from "@tabler/icons";

// My Components
import { Alert } from "@/components";
import { ISessions } from "../GallerySeccion";
import ModalShowImages from "./ModalShowImages";

interface CardSessionProps {
  session: ISessions;
  position: number;
  removeSession: (position: number) => void;
  editSession: (position: number) => void;
  setCreatingSession: (state: boolean) => void;
}

const CardSession: React.FC<CardSessionProps> = ({ session, position, removeSession, editSession }) => {
  const { value, toggle } = useToggle(false);
  const { value: valueModal, toggle: toggleModal } = useToggle();

  return (
    <>
      <div className="relative col-span-12 sm:col-span-6 md:col-span-4">
        <div className="absolute flex space-x-2 top-2 right-2">
          <button
            className="flex items-center justify-center w-8 h-8 text-white duration-150 bg-black rounded-full bg-opacity-30 hover:bg-opacity-60"
            onClick={() => {
              editSession(position);
            }}
          >
            <IconPencil className="w-5 h-5" />
          </button>
          <button
            className="flex items-center justify-center w-8 h-8 text-white duration-150 bg-black rounded-full bg-opacity-30 hover:bg-opacity-60"
            onClick={() => toggle(true)}
          >
            <IconTrash className="w-5 h-5" />
          </button>
        </div>

        <div>
          <button
            onClick={() => {
              toggleModal();
            }}
          >
            <img
              className="mb-1 select-none"
              src={session.images.filter(image => image.isCover)[0].croppedImageSrc}
              alt=""
            />
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <IconH1 className="w-5 h-5" />
              <b className="mx-2">-</b>
              <input
                className="text-sm font-semibold border-b md:text-base"
                type="text"
                defaultValue={session.title}
                placeholder="Título"
              />
            </p>
            <p className="flex items-center">
              <IconPhoto className="w-5 h-5 mr-1" />
              <b className="text-sm md:text-base">{session.images.length}</b>
            </p>
          </div>
        </div>
      </div>
      <ModalShowImages state={valueModal} setState={toggleModal} session={session} />
      <Alert
        name="removeSession"
        title="Eliminar sessión"
        message={`Estás seguro que quieres eliminar "${session.title}" de tu lista de sesiones?`}
        state={value}
        setState={toggle}
        type="DANGER"
        labelBtnPri="Eliminar"
        labelBtnSec="Cancelar"
        onBtnSec={toggle}
        onBtnPri={() => {
          toggle();
          removeSession(position);
        }}
      />
    </>
  );
};

export default CardSession;
