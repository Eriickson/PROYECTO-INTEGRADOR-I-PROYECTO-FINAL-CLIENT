import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles and Icons
import { IconAward, IconBolt, IconRefresh, IconStack, TablerIconProps } from "@tabler/icons";

// My Components
import { Card } from "../../components";

const Advantage: React.FC = () => {
  return (
    <Card notBorderTop>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 md:text-3xl sm:text-4xl">
            Antes de <span className="text-pri-500">publicar</span> tu vehículo
          </p>
          <p className="max-w-2xl mt-2 text-gray-500 md:mt-4 md:text-xl lg:mx-auto">
            Nuestra página de promociones de vehículos tiene muchas ventajas que ofrecerte, entre las cuales están:
          </p>
        </div>

        <div className="mt-6 md:mt-10">
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              slidesPerGroup={1}
              loopFillGroupWithBlank
              speed={700}
              loop
              autoplay={{
                delay: 5000,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
              }}
            >
              <SwiperSlide>
                <AdvantageItem
                  Icon={IconStack}
                  title={"Diseño Intuitivo"}
                  description={
                    <p>
                      Al usar nuesta aplicación no tendrás problema en encontrar lo que necesitas, gracias a nuestro{" "}
                      <span className="font-semibold text-pri-600">
                        diseño simple, intuitivo, minimalista y adaptable
                      </span>{" "}
                      a cualquier pantalla.
                    </p>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdvantageItem
                  Icon={IconBolt}
                  title={"Rapidez Asegurada"}
                  description={
                    <p>
                      Date la oportunidad de experimentar una{" "}
                      <span className="font-semibold text-pri-600">venta o compra rápida</span> de tus vehículos,
                      gracias a las cualidades por las que se destaca nuestra página.
                    </p>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdvantageItem
                  Icon={IconRefresh}
                  title={"Actualizaciones frecuentes"}
                  description={
                    <p>
                      Nunca te abandonaremos, por esa razón siempre estamos trabajando en{" "}
                      <span className="font-semibold text-pri-600">grandes funcionalidades futuras</span> que harán tu
                      experiencia cada vez mejor.
                    </p>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdvantageItem
                  Icon={IconAward}
                  title={"Amplio público"}
                  description={
                    <p>
                      Nuestra página está{" "}
                      <span className="font-semibold text-pri-600">dirigida para empresas o persona </span>
                      que simplemente desean cambiar o adquir un vehículo. Cree su cuenta y luego su agencia online
                      completamente gratis.
                    </p>
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Card>
  );
};

interface AdvantageItemProps {
  Icon: React.FC<TablerIconProps>;
  title: string;
  description: React.ReactElement;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ Icon, title, description }) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="grid w-10 h-10 text-white md:w-12 md:h-12 bg-pri-500 place-items-center">
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
    </div>
    <div className="ml-2 md:ml-4">
      <dt className="text-lg font-medium leading-6 text-gray-900">{title}</dt>
      <dd className="mt-1 text-base text-gray-500 md:mt-2">{description}</dd>
    </div>
  </div>
);

export default Advantage;
