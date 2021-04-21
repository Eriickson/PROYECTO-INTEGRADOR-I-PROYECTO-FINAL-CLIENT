import React, { useCallback, useState } from "react";

// Packages
import { FormProvider, useForm } from "react-hook-form";

// Hooks
import { useCropImage, useToggle } from "@/hooks";

// Styles and Icons
import { IconAspectRatio, IconMinus, IconPencil, IconPhoto, IconPlus, IconRotate } from "@tabler/icons";

// My Elements
import { IFileAccepted } from "@/shared";
import { IArea } from "@/models";

// My Components
import { Card, Modal, Range } from "@/components";
import CropperImage from "./CroppedImage";
interface ImageEditorProps {
  file: IFileAccepted;
  position: number;
  onComplete: (newFile: IFileAccepted, position: number) => void;
}

const ImageEditor: React.FC<ImageEditorProps> = ({ file, position, onComplete }) => {
  const { getCroppedImg } = useCropImage();
  const { value, toggle } = useToggle();
  const methods = useForm({ defaultValues: { zoom: [1] } });
  const [zoom, setZoom] = useState<number[]>([1]);
  const [aspectRatio, setAspectRatio] = useState(16 / 9);
  const [croppedArea, setCroppedArea] = useState<IArea>({ height: 0, width: 0, x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [isCover, setIsCover] = useState(file.isCover);

  const onCropComplete = useCallback((_: IArea, croppedAreaPixels: IArea) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  function onChangeZoom(newZoom: number) {
    setZoom([newZoom]);
    methods.setValue("zoom", [newZoom]);
  }

  async function _onComplete() {
    const fileCropped = await getCroppedImg({ src: file.src, pixelCrop: croppedArea, rotation });

    onComplete(
      {
        id: file.id,
        croppedArea,
        croppedImageSrc: fileCropped?.blobUrl || "",
        file: file.file,
        src: file.src,
        rotation,
        isCover,
      },
      position,
    );
    toggle();
  }

  return (
    <>
      <button
        className="flex items-center justify-center w-8 h-8 text-white duration-150 bg-black bg-opacity-30 hover:bg-opacity-60"
        onClick={() => toggle()}
      >
        <IconPencil className="w-5 h-5" />
      </button>
      <Modal name="imageEditor" state={value} setState={toggle} centerContent>
        <div className="w-full max-w-screen-xl mx-auto">
          <CropperImage
            onCropComplete={onCropComplete}
            src={file.src}
            setZoom={onChangeZoom}
            aspectRatio={aspectRatio}
            zoom={zoom[0]}
            rotation={rotation}
          />
          <Card className="mt-2">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  setAspectRatio(16 / 9);
                  setIsCover(true);
                }}
                className={`flex items-center p-1 duration-150 border  border-pri-500 bg-pri-50 active:bg-pri-500 active:text-white ${
                  isCover ? "bg-pri-500 text-white" : "text-pri-500"
                }`}
              >
                <IconPhoto className="w-5 h-5 mr-1" />
                <span className="text-sm">Portada</span>
              </button>
              <button
                className="flex items-center p-1 duration-150 border text-pri-500 border-pri-500 bg-pri-50 active:bg-pri-500 active:text-white"
                onClick={() => {
                  rotation + 90 === 360 ? setRotation(0) : setRotation(rotation + 90);
                }}
              >
                <IconRotate className="w-5 h-5 mr-1" />
                <span className="text-sm">Girar</span>
              </button>
              {!isCover && (
                <button
                  className="flex items-center p-1 duration-150 border text-pri-500 border-pri-500 bg-pri-50 active:bg-pri-500 active:text-white"
                  onClick={() => {
                    if (aspectRatio === 16 / 9) {
                      setAspectRatio(4 / 3);
                    } else if (aspectRatio === 4 / 3) {
                      setAspectRatio(1 / 1);
                    } else if (aspectRatio === 1 / 1) {
                      setAspectRatio(16 / 9);
                    }
                  }}
                >
                  <IconAspectRatio className="w-5 h-5 mr-1" />
                  <span className="text-sm">Reajustar</span>
                </button>
              )}
            </div>
          </Card>
          <Card notBorderTop className="mt-2">
            <FormProvider {...methods}>
              <div className="flex flex-col items-end justify-between sm:flex-row">
                <div className="flex-1 w-full mb-2 sm:w-auto sm:mb-0">
                  <div className="flex items-center space-x-2 md:w-4/12">
                    <button /* disabled={zoom[0] === 1} onClick={() => onChangeZoom(zoom[0] - 0.2)} */>
                      <IconMinus />
                    </button>
                    <Range control="" name="zoom" min={1} max={2} step={0.2} value={zoom} onChange={setZoom} />
                    <button /* disabled={zoom[0] === 2} onClick={() => onChangeZoom(zoom[0] + 0.2)} */>
                      <IconPlus />
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <button
                    className="mr-1 btn danger borderless"
                    onClick={() => {
                      toggle(false);
                      setIsCover(file.isCover);
                    }}
                  >
                    Cancelar
                  </button>
                  <button type="button" className="btn pri" onClick={_onComplete}>
                    Guardar Cambios
                  </button>
                </div>
              </div>
            </FormProvider>
          </Card>
        </div>
      </Modal>
    </>
  );
};

export default ImageEditor;
