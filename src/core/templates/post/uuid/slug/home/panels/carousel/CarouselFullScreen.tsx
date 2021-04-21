import React, { useState } from "react";

// Packages
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs } from "swiper/core";
import { GlassMagnifier } from "react-image-magnifiers";

// Redux
import { useSelector } from "@/store/hooks";

// Styles and Icons
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons";
import { css } from "@emotion/core";

// My Components
import { Modal } from "@/components";

SwiperCore.use([Thumbs]);

interface CarouselFullScreenProps {
  currentSlider: number;
  state: boolean;
  setState: (value?: boolean) => void;
}

const CarouselFullScreen: React.FC<CarouselFullScreenProps> = ({ state, setState, currentSlider }) => {
  const { post } = useSelector(({ post }) => post);
  const [thumbsSwiper] = useState<SwiperCore | null>(null);
  const [currentSliderSwiper, setCurrentSliderSwiper] = useState(currentSlider);

  return (
    <Modal state={state} setState={setState} noScroll>
      <div className="flex flex-col justify-between bg-black p-2.5 h-screen max-h-screen overflow-hidden">
        <header className="text-white">
          <div className="flex justify-between">
            <span>
              {currentSliderSwiper}/{post?.images.length}
            </span>
            <div className="flex items-center space-x-4">
              <button onClick={() => setState()}>
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>
        <main className="flex items-center justify-center flex-1 my-3 space-x-5 overflow-auto xl">
          <button className="text-white">
            <IconChevronLeft id="button-left" className="w-10 h-10 duration-150 opacity-80 hover:opacity-100" />
          </button>
          <div className="w-full mx-auto max-w-7xl">
            <Swiper
              slidesPerView={1}
              thumbs={{ swiper: thumbsSwiper }}
              autoHeight
              /*eslint-disable @typescript-eslint/no-explicit-any*/
              onSlideChange={function (this: any) {
                setCurrentSliderSwiper(this.activeIndex + 1);
              }}
              navigation={{
                nextEl: "#button-right",
                prevEl: "#button-left",
              }}
            >
              {post?.images.map((image, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="h-full"
                    css={css`
                      img {
                        max-width: none;
                      }
                    `}
                  >
                    <GlassMagnifier
                      imageSrc={image.replace(/resolution/, "full")}
                      allowOverflow={true}
                      magnifierBorderSize={1}
                      magnifierSize={"450px"}
                      imageAlt="Example"
                      square
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="text-white">
            <IconChevronRight id="button-right" className="w-10 h-10 duration-150 opacity-80 hover:opacity-100" />
          </button>
        </main>
      </div>
    </Modal>
  );
};

// interface CarouselFooterProps {
//   images: string[];
//   currentSliderSwiper: number;
//   setThumbsSwiper: any;
// }

// const CarouselFooter: React.FC<CarouselFooterProps> = ({ images, currentSliderSwiper, setThumbsSwiper }) => (
//   <footer className="flex items-center">
//     <Swiper
//       slidesPerView={4}
//       spaceBetween={5}
//       // onSwiper={setThumbsSwiper}
//       watchSlidesVisibility
//       watchSlidesProgress
//       breakpoints={{
//         768: {
//           slidesPerView: 6,
//         },
//         1024: {
//           slidesPerView: 7,
//         },
//         1280: {
//           slidesPerView: 10,
//         },
//       }}
//       // onSlideChange={() => console.log("slide change")}
//     >
//       {images.map((image, i) => (
//         <SwiperSlide key={i}>
//           <div
//             style={{ maxHeight: 106 }}
//             className={`overflow-hidden border-2 cursor-pointer  ${
//               currentSliderSwiper === i + 1 ? "border-pri-500" : "border-white"
//             }`}
//           >
//             <img src={image.replace(/resolution/, "x100")} alt="" className="w-full" />
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </footer>
// );

export default CarouselFullScreen;
