import React from "react";

// NextJS
import Image from "next/image";

// Package
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Functions
SwiperCore.use([Autoplay]);

// My Components
import { Card } from "@/components";

// Variables and Constants
const homeImage = Array(5).fill("/assets/banner.png");

const MainCover: React.FC = () => {
  return (
    <Card notBorderTop>
      {homeImage?.length > 0 ? (
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          // breakpoints={{
          //     640: {
          //     slidesPerView: 1,
          //     },
          //     768: {
          //     slidesPerView: 1,
          //     spaceBetween: 20,
          //     },
          //     1024: {
          //     slidesPerView: 1,
          //     },
          //     1280: {
          //     slidesPerView: 1,
          //     },
          // }}
        >
          {homeImage.map((url, index) => (
            <SwiperSlide key={index}>
              <Image width={1478} height={591} src="/assets/banner.png" className="w-full" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        "No hay publicaciones recientes"
      )}
    </Card>
  );
};

export default MainCover;
