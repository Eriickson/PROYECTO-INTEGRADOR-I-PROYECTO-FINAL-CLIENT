import React, { useState } from "react";

// Packages
import { Controller, useFormContext } from "react-hook-form";

// Hooks
import { useCropImage } from "@/hooks";

// Styles and Icons
import { IconCamera, IconPhotoOff } from "@tabler/icons";

// My Elements
import { IArea } from "@/models";

// My Components
import { SelectProfilePictureComponent, IFileSelected } from "@/components";

const GetLogoAgency: React.FC = () => {
  const { errors } = useFormContext();

  const [srcImage, setSrcImage] = useState("");
  const { getCroppedImg } = useCropImage();

  async function handleSelctedPicture({
    croppedArea,
    fileSelected,
  }: {
    croppedArea: IArea;
    fileSelected: IFileSelected;
  }) {
    const resCroppedImg = await getCroppedImg({ src: fileSelected.src, pixelCrop: croppedArea });
    setSrcImage(resCroppedImg?.blobUrl || "");
  }
  return (
    <div>
      <div className="flex">
        <div
          className={`relative flex items-center justify-center mr-2 overflow-hidden bg-white border-2 rounded-none w-28 h-28 text-gray-300 ${
            errors.profilePicture && "border-danger-500 bg-danger-50 text-danger-300"
          }`}
        >
          <IconPhotoOff className="w-12 h-12 " />
          <img src={srcImage} alt="" className="absolute top-0 bottom-0 left-0 right-0" />

          <Controller
            name="profilePicture"
            render={({ onChange, ref }) => (
              <div tabIndex={0} ref={ref}>
                <SelectProfilePictureComponent
                  onSelectedPicture={({ croppedArea, fileSelected }) => {
                    if (fileSelected) {
                      handleSelctedPicture({ croppedArea, fileSelected });
                      onChange({ croppedArea, file: fileSelected.file });
                    }
                  }}
                  componentButton={
                    <button
                      className={`absolute bottom-0 right-0 flex items-center justify-center w-10 h-10 text-white rounded-none bg-pri-500 ${
                        srcImage && "opacity-50 hover:opacity-95 duration-150"
                      }`}
                      type="button"
                    >
                      <IconCamera />
                    </button>
                  }
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default GetLogoAgency;
