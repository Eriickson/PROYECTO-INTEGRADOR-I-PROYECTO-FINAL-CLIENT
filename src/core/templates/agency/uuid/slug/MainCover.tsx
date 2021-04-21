import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Redux
import { useSelector } from "@/store/hooks";

// Styles And Icons
import { IconBrandWhatsapp, IconChevronLeft, IconChevronRight } from "@tabler/icons";

// My Components
import { Card, Image } from "@/components";

const MainCover: React.FC = () => {
  const { agencyProfile } = useSelector(({ agency }) => agency);

  return (
    <div className="col-span-12">
      <div className="relative mb-2">
        <div className="absolute top-0 right-0 z-20 flex">
          <button id="button-previous-swiper" className="p-1.5 bg-black md:p-2 bg-opacity-30 hover:bg-opacity-60">
            <IconChevronLeft className="w-4 h-4 text-white md:w-5 md:h-5" />
          </button>
          <button id="button-next-swiper" className="p-1.5 bg-black md:p-2 bg-opacity-30 hover:bg-opacity-60">
            <IconChevronRight className="w-4 h-4 text-white md:w-5 md:h-5" />
          </button>
        </div>
        <Swiper
          spaceBetween={3}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          navigation={{
            prevEl: "#button-previous-swiper",
            nextEl: "#button-next-swiper",
          }}
        >
          <SwiperSlide>
            <Image className="w-full md:hidden" src="/cover-sm.jpg" resolution="" />
            <Image className="hidden w-full md:block" src="/cover.png" resolution="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full md:hidden" src="/cover-sm.jpg" resolution="" />
            <Image className="hidden w-full md:block" src="/cover.png" resolution="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full md:hidden" src="/cover-sm.jpg" resolution="" />
            <Image className="hidden w-full md:block" src="/cover.png" resolution="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full md:hidden" src="/cover-sm.jpg" resolution="" />
            <Image className="hidden w-full md:block" src="/cover.png" resolution="" />
          </SwiperSlide>
        </Swiper>
        {/* <div className="absolute z-20 flex items-end bottom-2 left-2 right-2">
          <div className="bg-white w-72">
            <Image className="w-full" src={agencyProfile?.logo || ""} resolution="x250" />
          </div>
          <div className="flex-1 ml-2">
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold leading-none text-main-text">{agencyProfile?.name}</h2>
                  <p className="text-sm">{agencyProfile?.slogan}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="btn pri">Llamar</button>
                  <button className="btn success icon left">
                    <IconBrandWhatsapp />
                    Contactar
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainCover;
