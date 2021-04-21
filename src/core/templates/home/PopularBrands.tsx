import React from "react";

// NextJS
import Image from "next/image";

// Package
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Functions
SwiperCore.use([Autoplay]);

// My Components
import { PanelComponent } from "@/components";
import Link from "next/link";

// Variables and Constants
const brands = [
  {
    _id: 1,
    src: "alfa-romeo",
  },
  {
    _id: 2,
    src: "audi",
  },
  {
    _id: 3,
    src: "bmw",
  },
  {
    _id: 4,
    src: "ferrari",
  },
  {
    _id: 5,
    src: "ford",
  },
  {
    _id: 6,
    src: "honda",
  },
  {
    _id: 7,
    src: "lexus",
  },
  {
    _id: 8,
    src: "mazda",
  },
];

const PopularBrands: React.FC = () => {
  return (
    <PanelComponent title="Marcas Populares" notBorderTop>
      {brands?.length > 0 ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 8,
            },
            1280: {
              slidesPerView: 10,
            },
          }}
        >
          {brands.map(brand => (
            <SwiperSlide key={brand._id}>
              {/* Arregla el src de las imagenes si gustas. Las imagenes se encuentra dentro la folder que se muestra abajo. Me base en la imagen que tu pusiste en el MainCover */}
              {/* Prestale atencion al objeto que creo arriba, el src es el nombre de cada imagen */}
              <Link href={{ pathname: "/search/vehicle", query: { brand: brand.src } }}>
                <a className="duration-150 hover:opacity-80">
                  <Image width={96} height={96} className="select-none" src={`/assets/logos/${brand.src}.png`} />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        "No hay publicaciones recientes"
      )}
    </PanelComponent>
  );
};

export default PopularBrands;
