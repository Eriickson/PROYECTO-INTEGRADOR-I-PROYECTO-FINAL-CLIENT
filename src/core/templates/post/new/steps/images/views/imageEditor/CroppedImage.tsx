import React, { useState } from "react";
import Cropper from "react-easy-crop";

//Styles and Icons
import { css } from "@emotion/core";

// My Components
import { IArea } from "@/models";

interface CropperImageProps {
  onCropComplete: (croppedArea: IArea, croppedAreaPixels: IArea) => void;
  src: string;
  zoom: number;
  setZoom: (state: number) => void;
  aspectRatio: number;
  rotation: number;
}

const CropperImage: React.FC<CropperImageProps> = ({ src, onCropComplete, zoom, setZoom, aspectRatio, rotation }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  return (
    <>
      <div
        className="relative"
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
          maxZoom={2}
          minZoom={1}
          aspect={aspectRatio}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          showGrid={false}
          rotation={rotation}
        />
      </div>
    </>
  );
};

export default CropperImage;
