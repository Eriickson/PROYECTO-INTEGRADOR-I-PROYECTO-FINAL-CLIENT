import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "@/store/hooks";

// Styles and Icons
import { IconFilePlus, IconPencil } from "@tabler/icons";

// My Elements
import { IFileAccepted } from "@/shared";

// My Components
import ImageGallery from "../ImageGallery";
import ProgressBar from "../ProgressBar";
import UploadZone from "./UploadZone";

export interface ViewSessionProps {
  getFiles: (newFiles: IFileAccepted[]) => void;
}

const ViewSession: React.FC<ViewSessionProps> = ({ getFiles }) => {
  const { data } = useSelector(store => store.post.newPost);
  const [acceptedFiles, setAcceptedFiles] = useState<IFileAccepted[]>(data?.images || []);
  const [addingImages, setAddingImages] = useState<boolean>(true);
  const [limitImages] = useState(15);

  function getAcceptedFiles(newFiles: IFileAccepted[]) {
    newFiles = [...acceptedFiles, ...newFiles];

    // Seleccionar el primer archivo como portada
    if (!acceptedFiles.length) {
      newFiles = newFiles.map((file, i) => (i === 0 ? { ...file, isCover: true } : file));
    }

    setAcceptedFiles(newFiles);
    getFiles(newFiles);
    setAddingImages(false);
  }

  function deleteFile(position: number) {
    const newFiles = acceptedFiles.filter((_, i) => i !== position);
    setAcceptedFiles(newFiles);
  }

  function onCompleteEditor(newFile: IFileAccepted, position: number) {
    // Map para eliminar la imagen
    let newFiles = acceptedFiles.map((file, i) => (i !== position ? file : newFile));

    if (newFile.isCover) {
      newFiles = newFiles.map((file, i) => (i === position ? { ...file, isCover: true } : { ...file, isCover: false }));
    }

    setAcceptedFiles(newFiles);
    getFiles(newFiles);
  }

  useEffect(() => {
    if (data?.images) {
      setAddingImages(false);
      return;
    }
  }, [acceptedFiles]);

  return (
    <div>
      {addingImages ? (
        <UploadZone
          getAcceptedFiles={getAcceptedFiles}
          numberCurrentFiles={acceptedFiles.length}
          limitImages={limitImages}
        />
      ) : (
        <ImageGallery files={acceptedFiles} onCompleteEditor={onCompleteEditor} deleteFile={deleteFile} />
      )}
      <div className="flex flex-col-reverse justify-between mt-3 md:items-center md:flex-row">
        <div className="flex-1">
          <ProgressBar
            title="Cantidad de imágenes por sesión permitidas"
            total={acceptedFiles.length}
            max={limitImages}
          />
        </div>
        <div className="flex justify-end flex-1">
          {/* <button
            className="w-full mb-2 mr-2 md:mr-0 md:w-auto md:mb-0 md:ml-3 btn danger icon right ghost"
            onClick={() => {
              setCreatingSession(false);
              setSessionToEdit(null);
            }}
          >
            Cancelar <IconX className="ml-0 mr-2" />
          </button> */}
          {addingImages ? (
            <button
              className="w-full mb-2 md:w-auto md:mb-0 md:ml-3 btn danger icon right"
              onClick={() => setAddingImages(false)}
              disabled={!acceptedFiles.length}
            >
              Editar fotografías <IconPencil className="ml-0 mr-2" />
            </button>
          ) : (
            acceptedFiles.length !== limitImages && (
              <button
                className="w-full mb-2 md:w-auto md:mb-0 md:ml-3 btn pri icon right"
                onClick={() => setAddingImages(true)}
              >
                Añadir Imágenes <IconFilePlus className="ml-0 mr-2" />
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewSession;
