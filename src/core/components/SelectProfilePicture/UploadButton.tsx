import React, { useCallback } from "react";

// Packages
import { DropzoneState, useDropzone } from "react-dropzone";

// Hooks
import { compressImage } from "src/utils";

// Types and Interfaces
interface UploadButtonProps {
  onFileSelected: (file: File) => void;
  componentButton?: React.ReactElement;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onFileSelected, componentButton }) => {
  const onDrop = useCallback(async (acceptedFiles: File[]): Promise<void> => {
    let file: File = acceptedFiles[0];
    file = await compressImage(file);
    onFileSelected(file);
  }, []);

  const { getRootProps, getInputProps }: DropzoneState = useDropzone({
    onDrop,
    accept: ["image/jpeg", "image/png", "image/gif"],
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {componentButton ? (
          componentButton
        ) : (
          <button className="btn pri" type="button">
            Cambiar
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadButton;
