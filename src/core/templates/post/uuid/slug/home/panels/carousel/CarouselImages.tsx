import React, { useState } from "react";

// Packages
import SwiperCore, { Thumbs, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Redux
import { useSelector } from "@/store/hooks";

// Styles and Icons
import { css } from "@emotion/core";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons";

// My Elements
import { useToggle } from "@/hooks";

// My Components
import CarouselFullScreen from "./CarouselFullScreen";

// My Components
SwiperCore.use([Thumbs, Navigation, EffectCoverflow]);

export const CarouselImages: React.FC = () => {
  const { post } = useSelector(({ post }) => post);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [currentSlider, setCurrentSlider] = useState(1);
  const { value, toggle } = useToggle();

  return (
    <>
      <CarouselFullScreen state={value} setState={toggle} currentSlider={currentSlider} />
      <div className="relative w-full mb-1">
        <button
          id="swiper-thumb-left"
          className="absolute top-0 bottom-0 left-0 z-10 hidden py-6 pr-2 text-opacity-50 duration-150 bg-black bg-opacity-0 lg:block hover:bg-opacity-40 text-pri-500 hover:text-opacity-90"
        >
          <IconChevronLeft className="w-16 h-16" strokeWidth={1.5} />
        </button>
        <button
          id="swiper-thumb-right"
          className="absolute top-0 bottom-0 right-0 z-10 hidden py-6 pl-2 text-opacity-50 duration-150 bg-black bg-opacity-0 lg:block hover:bg-opacity-40 text-pri-500 rigth-0 hover:text-opacity-90 "
        >
          <IconChevronRight className="w-16 h-16" strokeWidth={1.5} />
        </button>

        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={5}
          initialSlide={0}
          navigation={{
            prevEl: "#swiper-thumb-left",
            nextEl: "#swiper-thumb-right",
          }}
          slidesPerView={1}
          /* eslint-disable @typescript-eslint/no-explicit-any*/
          onSlideChange={function (this: any) {
            setCurrentSlider(this.activeIndex + 1);
          }}
          autoHeight
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          onClick={() => toggle()}
        >
          {post?.images.map((image, i) => (
            <SwiperSlide key={i}>
              <img className="w-full" src={image.replace(/resolution/, "x500")} alt="" />
              {/* <Image src={image} resolution="" /> */}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-0 left-0 z-10 flex items-center px-2 py-1 m-2 text-sm text-white bg-black bg-opacity-75 rounded">
          <span className="ml-1">
            {currentSlider}/{post?.images.length}
          </span>
        </div>
      </div>
      <div
        css={css`
          max-height: max-content;
          overflow: hidden;
          .swiper-slide:not(.swiper-slide-thumb-active) {
            filter: blur(1px) brightness(0.8);
          }
        `}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
          breakpoints={{
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {post?.images.map((image, i) => (
            <SwiperSlide key={i}>
              <div
                className={`cursor-pointer overflow-hidden border-2 duration-150 border-white w-full ${
                  currentSlider === i + 1 && "border-pri-500"
                }`}
                style={{ height: 93 }}
              >
                <img className="w-full" src={image.replace(/resolution/, "x100")} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
