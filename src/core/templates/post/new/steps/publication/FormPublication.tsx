import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconX } from "@tabler/icons";
import { ErrorComponent } from "@/components";

// Redux
import { useActions, useSelector } from "@/store/hooks";

interface FormPublicationProps {
  onSubmit: (data: any) => void;
}

const schema = yup.object().shape({
  title: yup.string(),
  description: yup.string(),
  tags: yup.array(),
});

export const FormPublication: React.FC<FormPublicationProps> = () => {
  const { data } = useSelector(store => store.post.newPost);
  const { addNewPostData } = useActions();
  const { register, handleSubmit, errors, control, setError } = useForm({ resolver: yupResolver(schema) });
  const { append, fields, remove } = useFieldArray({ control, name: "tags" });
  const [tag, setTag] = useState<string>("");

  useEffect(() => {
    if (data?.tags) append(data?.tags.map(tag => ({ tag: tag })));
  }, []);

  return (
    <div>
      <form
        id="form-publication"
        onSubmit={handleSubmit(values => {
          const { description } = values;
          addNewPostData({
            title: `Vendo ${data?.brand?.label} ${data?.model?.label} ${data?.year?.label}`,
            description,
            tags: fields.map(tag => tag.tag),
          });
        })}
      >
        <div className="w-full mx-auto sm:w-10/12 md:w-8/12 lg:w-10/12">
          <div className="mb-5">
            <div className="flex items-center justify-between">
              <div className="text-xs">
                <label htmlFor="">
                  <b className="text-gray-600">Título</b>
                </label>
                <b className="text-danger-500 font-roboto">*</b>
              </div>
            </div>
            <input
              className={`w-full form-control ${errors.title ? "danger" : ""}`}
              name="title"
              type="text"
              placeholder="Título de la publicación"
              ref={register}
              defaultValue={`Vendo ${data?.brand?.label} ${data?.model?.label} ${data?.year?.label}`}
              disabled
            />
            <ErrorComponent name="title" error={errors} />
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <div className="text-xs">
                <label htmlFor="">
                  <b className="text-gray-600">Descripción</b>
                </label>
              </div>
            </div>
            <textarea
              className={`w-full form-control ${errors.description ? "danger" : ""}`}
              id=""
              cols={30}
              rows={10}
              name="description"
              placeholder="Escribe algo..."
              ref={register}
              defaultValue={data?.description}
            ></textarea>
            <ErrorComponent name="description" error={errors} />
          </div>
          <div className="mb-3">
            <label className="text-xs font-semibold text-gray-600" htmlFor="">
              Etiquetas <span className="text-sm font-semibold text-sec-text">({fields.length}/6)</span>
            </label>
            <br />
            <div className="flex">
              <ul className="flex flex-wrap items-center mb-3 text-xs">
                {fields.map((tag, i) => (
                  <span key={i} className="mb-1 mr-1 btn pri ghost icon right sm">
                    {tag.tag}
                    <button type="button" onClick={() => remove(i)}>
                      <IconX />
                    </button>
                  </span>
                ))}
              </ul>
            </div>
            {fields.length !== 6 && (
              <div>
                <div className="flex">
                  <input
                    id="tag-input"
                    type="text"
                    className={`w-full form-control ${errors.tags && "danger"}`}
                    placeholder="Escribe algo..."
                    value={tag}
                    onChange={e => setTag(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn ter ghost"
                    onClick={() => {
                      if (tag.length <= 5) {
                        setError("tag", { message: "Mín. 5 caracteres" });
                        document.getElementById("tag-input")?.focus();
                        return;
                      }
                      append({ tag });
                      setTag("");
                      document.getElementById("tag-input")?.focus();
                    }}
                    disabled={fields.length === 6}
                  >
                    Agregar
                  </button>
                </div>
                <ErrorComponent name="tag" error={errors} />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
