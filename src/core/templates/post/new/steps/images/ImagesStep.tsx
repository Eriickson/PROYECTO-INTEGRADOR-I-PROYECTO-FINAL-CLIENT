import React, { useState } from "react";

// Packages
import { useForm } from "react-hook-form";

// Redux
import { useActions, useSelector } from "@/store/hooks";

// My Elements
import { IFileAccepted } from "@/models";

// My Components
import { TemplateStep } from "../TemplateStep";
import ViewSession from "./views/ViewSession/ViewSession";

export const ImagesStep: React.FC = () => {
  const { data } = useSelector(({ post }) => post.newPost);
  const { addNewPostData, setAlertBanner } = useActions();
  const [files, setFiles] = useState<IFileAccepted[]>(data?.images || []);
  const { handleSubmit } = useForm();

  async function getFiles(files: IFileAccepted[]) {
    setFiles(files);
  }

  return (
    <TemplateStep title="Agregar Fotografías" description="Agrega las imágenes de tu vehículo">
      <ViewSession getFiles={getFiles} />
      <form
        id="form-images"
        onSubmit={handleSubmit(() => {
          if (files.length < 7) {
            setAlertBanner({ type: "WARNING", message: "Debe seleccionar almenos 7 imágenes", isActive: true });
            return;
          }
          setAlertBanner({ type: "SUCCESS", message: "", isActive: false });
          addNewPostData({
            images: files,
          });
        })}
      ></form>
    </TemplateStep>
  );
};
