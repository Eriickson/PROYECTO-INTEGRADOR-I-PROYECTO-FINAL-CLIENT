import React, { useCallback, useState } from "react";

// Hooks
import { useToggle, useCropImage } from "@/hooks";

// My Elements
import { IArea } from "@/models";

// My Components
import UploadButton from "./UploadButton";
import { CropperImage } from "./CropperImage";
import { Modal } from "../Modal";

//  Types and Interfaces
export interface IFileSelected {
  file: File;
  src: string;
}

interface SelectProfilePictureComponentProps {
  componentButton?: React.ReactElement;
  aspectRatio?: number;
  onSelectedPicture: ({
    croppedArea,
    fileSelected,
    srcCropped,
  }: {
    croppedArea: IArea;
    fileSelected?: IFileSelected;
    srcCropped: string;
  }) => void;
}

export const SelectProfilePictureComponent: React.FC<SelectProfilePictureComponentProps> = ({
  onSelectedPicture,
  componentButton,
  aspectRatio,
}) => {
  const { value, toggle } = useToggle(false);
  const { getCroppedImg } = useCropImage();

  const [fileSelected, setFileSelected] = useState<IFileSelected>();
  const [croppedArea, setCroppedArea] = useState<IArea>();

  function handleFileSelected(file: File) {
    setFileSelected({ file, src: URL.createObjectURL(file) });
    toggle(true);
  }

  const handleCropComplete = useCallback((_: IArea, newCroppedArea: IArea) => {
    const { height, width, x, y } = newCroppedArea;
    newCroppedArea = {
      height: Math.round(height),
      width: Math.round(width),
      x: Math.round(x),
      y: Math.round(y),
    };
    setCroppedArea(newCroppedArea);
  }, []);

  async function handleSaveChange() {
    if (fileSelected && croppedArea) {
      const imageCropped = await getCroppedImg({ src: fileSelected?.src, pixelCrop: croppedArea });
      onSelectedPicture({ croppedArea, fileSelected, srcCropped: imageCropped?.blobUrl || "" });
    }
    toggle();
  }

  return (
    <div>
      <Modal state={value} setState={toggle} name="select-profile-picture" centerContent notCloseModalZone>
        <CropperImage
          aspectRatio={aspectRatio}
          src={fileSelected?.src || ""}
          onCropComplete={handleCropComplete}
          actions={
            <>
              <button className="mr-3 btn danger borderless empty" type="button" onClick={() => toggle(false)}>
                Cancelar
              </button>
              <button
                className={`btn pri ${!fileSelected && "cursor-not-allowed"}`}
                type="button"
                disabled={!fileSelected}
                onClick={handleSaveChange}
              >
                Guardar
              </button>
            </>
          }
        />
      </Modal>
      <UploadButton onFileSelected={handleFileSelected} componentButton={componentButton} />
    </div>
  );
};
