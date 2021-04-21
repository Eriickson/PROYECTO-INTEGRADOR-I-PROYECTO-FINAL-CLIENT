import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// My Components
import { ISessions } from "../GallerySeccion";
import { Modal } from "@/components";

interface ModalShowImages {
  state: boolean;
  setState: (state: boolean) => void;
  session: ISessions;
}

const ModalShowImages: React.FC<ModalShowImages> = ({ state, setState, session }) => {
  return (
    <Modal state={state} setState={setState} centerContent>
      <div className="w-full mx-auto max-w-7xl">
        <Swiper spaceBetween={50} slidesPerView={1} autoHeight>
          {session.images.map((image, i) => (
            <SwiperSlide key={i}>
              <img className="w-full select-none" src={image.croppedImageSrc} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Modal>
  );
};

export default ModalShowImages;
