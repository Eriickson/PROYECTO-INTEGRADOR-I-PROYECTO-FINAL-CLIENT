import React, { useCallback, useState } from "react";

// Packages
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

// Hooks
import { useGenerateCroppedArea, useCropImage, useToggle } from "@/hooks";

// Styles and Icons
import { IconPhoto, IconCirclePlus, IconHelp } from "@tabler/icons";

// My Elements
import { compressImage } from "@/utils";

// My Components
import { Alert, ScreenLoader } from "@/components";
import { IFileAccepted } from "@/shared";

interface UploadZoneProps {
  getAcceptedFiles: (newFiles: IFileAccepted[]) => void;
  numberCurrentFiles: number;
  limitImages: number;
}

const UploadZone: React.FC<UploadZoneProps> = ({ getAcceptedFiles, numberCurrentFiles, limitImages }) => {
  const { getCroppedImg } = useCropImage();
  const [loadingImages, setLoadingImages] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const { value: maxcapacityExceeded, toggle: setMaxcapacityExceeded } = useToggle();

  const onDrop = useCallback(acceptedFiles => {
    addNewImages(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ["image/jpeg", "image/png"],
    maxSize: 26214400,
  });
  async function addNewImages(files: File[]) {
    if (files.length + numberCurrentFiles > limitImages) {
      setFiles(files);
      setMaxcapacityExceeded(true);
      return;
    }

    setLoadingImages(true);

    const newAcceptedFiles = await Promise.all(
      files.map(
        async (file): Promise<IFileAccepted> => {
          file = await compressImage(file);
          const src = URL.createObjectURL(file);
          const croppedArea = await useGenerateCroppedArea(src);
          const croppedImageSrc = await getCroppedImg({ src, pixelCrop: croppedArea });

          return { id: nanoid(), src, file, croppedArea, croppedImageSrc: croppedImageSrc?.blobUrl || "" };
        },
      ),
    );
    getAcceptedFiles(newAcceptedFiles);
    setLoadingImages(false);
  }

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="relative hidden md:block">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div
              className={`flex flex-col items-center text-gray-600 justify-center h-96 mb-2 duration-150 bg-gray-100 border-gray-300 border-2 border-dashed cursor-pointer opacity-80 hover:opacity-100 ${
                isDragActive && "bg-pri-200 text-pri-500 border-pri-500"
              }`}
            >
              <div className="relative mb-1">
                <IconPhoto className="w-16 h-16" strokeWidth={1.5} />
                <IconCirclePlus
                  className={`absolute bottom-0 right-0 w-8 h-8 -m-1 bg-white border-2 border-transparent rounded-full duration-150 ${
                    isDragActive && "bg-pri-200"
                  }`}
                />
              </div>
              <p className="text-lg font-medium">Arrastra y suelta tus archivos aquí</p>
              <div className="flex items-center w-full max-w-xs">
                <hr className="flex-1 border-gray-300" />
                <b className="mx-2 my-5">O</b>
                <hr className="flex-1 border-gray-300" />
              </div>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button type="button" className="btn pri outline">
                  Click para seleccionar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <button type="button" className="w-full btn pri outline md:hidden">
            {loadingImages ? "Cargando..." : "Seleccionar Fotografías"}
          </button>
        </div>
        <div className="flex items-center mt-3">
          <IconHelp className="w-6 h-6 p-1 mr-2 rounded-full bg-info-100 text-info-500" />
          <p className="flex-1 text-xs leading-none md:text-sm text-sec-text">
            Solo se pueden subir archivos en formato imágen(.jpg, .png, .gif) con tamaño máximo de hasta 5 mb.
          </p>
        </div>
      </motion.div>
      <Alert
        // maxWidth="max-w-screen-sm"
        name="warning-limit-file"
        title="Capacidad máxima excedida"
        message="Los sentimos, pero usted desea agregar un mayor número de fotografías del que permite su plan. Desea agregar la porción necesaria para completar el límite total?"
        type="WARNING"
        labelBtnPri="Agregar"
        state={maxcapacityExceeded}
        setState={setMaxcapacityExceeded}
        onBtnSec={() => {
          setMaxcapacityExceeded(false);
          setFiles([]);
        }}
        labelBtnSec="Cancelar"
        onBtnPri={() => {
          const numberAccepted = limitImages - numberCurrentFiles;
          const filesAccepted = files.filter((_, i) => i + 1 <= numberAccepted);
          addNewImages(filesAccepted);
          setMaxcapacityExceeded(false);
          setFiles([]);
        }}
      />
      <ScreenLoader msg="Agregando imágenes" isLoading={loadingImages} />
    </>
  );
};

export default UploadZone;
