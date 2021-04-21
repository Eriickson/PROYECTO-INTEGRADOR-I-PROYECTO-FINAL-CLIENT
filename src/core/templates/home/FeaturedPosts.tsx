import React from "react";

// NextJS
// import Image from "next/image";

// Package
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Functions
SwiperCore.use([Autoplay]);

// Styles and Icons
import { css } from "@emotion/core";

// My Components
import { PanelComponent } from "@/components";

// Variables and Constants
const autoUrl = Array(0).fill("https://s1.1zoom.me/b5370/665/McLaren_Aurora_Blue_720s_Blue_567533_1920x1080.jpg");

const FeaturedPosts: React.FC = () => {
  return (
    <PanelComponent title="Vehículos Destacados" notBorderTop>
      {autoUrl?.length > 0 ? (
        <div
          css={css`
            .swiper-container {
              z-index: 0;
            }
          `}
        >
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            slidesPerGroup={2}
            loopFillGroupWithBlank
            speed={800}
            loop
            autoplay={{
              delay: 6000,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              1280: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
            }}
          >
            {autoUrl.map((brand, index) => (
              <SwiperSlide key={index}>
                {/* Intente usar el componente de Image de NextJS pero muestra un error */}
                <img width={288} height={162} className="select-none" src={brand} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="pt-3 pb-2 font-semibold text-center text-gray-400">No hay vehículos destacados</p>
      )}
    </PanelComponent>
  );
};

export default FeaturedPosts;
