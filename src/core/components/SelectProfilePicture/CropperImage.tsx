import React, { useState } from "react";

// Packages
import Cropper from "react-easy-crop";

//Styles and Icons
import { css } from "@emotion/core";

// My Components
import { IArea } from "@/models";

// Types and Interfaces
interface CropperImageProps {
  actions: React.ReactElement;
  src: string;
  aspectRatio?: number;
  onCropComplete: (croppedArea: IArea, croppedAreaPixels: IArea) => void;
}

export const CropperImage: React.FC<CropperImageProps> = ({ src, actions, onCropComplete, aspectRatio = 1 / 1 }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  return (
    <>
      <div
        className="relative w-full max-w-2xl mx-auto"
        css={css`
          width: 100%;
          height: 20rem;
          @media (min-width: 768px) {
            height: 40rem;
          }
          .reactEasyCrop_CropArea {
            border: 2px solid #1e86ff;
          }
        `}
      >
        <Cropper
          image={src}
          crop={crop}
          zoom={zoom}
          zoomSpeed={0.2}
          maxZoom={4}
          minZoom={1}
          aspect={aspectRatio}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          showGrid={false}
        />
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex justify-end p-3 mt-5 bg-white">
          <div>{actions}</div>
        </div>
      </div>
    </>
  );
};
