import React from "react";
import { motion } from "framer-motion";

// Styles and Icons
import { css } from "@emotion/core";
import { IconMaximize, IconPhoto, IconTrash } from "@tabler/icons";
import { IFileAccepted } from "@/shared";
import ImageEditor from "./imageEditor/ImageEditor";

interface IImageGalleryProps {
  files: IFileAccepted[];
  deleteFile: (position: number) => void;
  onCompleteEditor: (newFile: IFileAccepted, position: number) => void;
}

const ImageGallery: React.FC<IImageGalleryProps> = ({ files, deleteFile, onCompleteEditor }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>
        <div className="grid grid-cols-12 gap-1 p-2 bg-gray-200 shadow-inner">
          {files.map((file, i) => (
            <div
              key={i}
              className="relative col-span-12 overflow-hidden border sm:col-span-6 md:col-span-4 xl:col-span-3"
            >
              <div
                className="h-full bg-black bg-center bg-cover"
                css={css`
                  background-image: url(${`${file.src}`});
                  filter: blur(3px) brightness(0.7);
                `}
              >
                <img className="invisible " src={file.croppedImageSrc} alt="" />
              </div>
              <figure key={i} className="absolute bottom-0 left-0 flex items-center h-full">
                <div className="relative">
                  <img
                    className="select-none"
                    src={file.croppedImageSrc}
                    css={css`
                      width: 100%;
                      height: auto;
                    `}
                    alt="i"
                  />
                </div>
              </figure>
              {file.isCover && (
                <button className="absolute flex items-center justify-center w-8 h-8 text-white duration-150 bg-black left-2 top-2 bg-opacity-30 hover:bg-opacity-60">
                  <IconPhoto />
                </button>
              )}

              <div className="absolute flex space-x-1 top-2 right-2">
                <button
                  className="flex items-center justify-center w-8 h-8 text-white duration-150 bg-black bg-opacity-30 hover:bg-opacity-60"
                  onClick={() => deleteFile(i)}
                >
                  <IconTrash className="w-5 h-5" />
                </button>
                <ImageEditor file={file} position={i} onComplete={onCompleteEditor} />
                <button className="flex items-center justify-center w-8 h-8 text-white duration-150 bg-black bg-opacity-30 hover:bg-opacity-60">
                  <IconMaximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageGallery;
