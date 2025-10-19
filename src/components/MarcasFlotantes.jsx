import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import kiaLogo from "../assets/kia.svg";
import toyotaLogo from "../assets/toyota-1.svg";
import fordLogo from "../assets/ford-7.svg";
import hyundaiLogo from "../assets/hyundai.svg";
import jeepLogo from "../assets/jeep-5.svg";
import nissanLogo from "../assets/nissan-6.svg";
import chevroletLogo from "../assets/chevrolet-1.svg";
import mitsubishiLogo from "../assets/mitsubishi.svg";

const marcas = [
  { nombre: "KIA", icon: kiaLogo },
  { nombre: "TOYOTA", icon: toyotaLogo },
  { nombre: "FORD", icon: fordLogo },
  { nombre: "HYUNDAI", icon: hyundaiLogo },
  { nombre: "JEEP", icon: jeepLogo },
  { nombre: "NISSAN", icon: nissanLogo },
  { nombre: "CHEVROLET", icon: chevroletLogo },
  { nombre: "MITSUBISHI", icon: mitsubishiLogo },
];

const MarcasFlotantes = () => {
  return (
    <section className="w-full flex justify-center items-center py-4 pb-4 bg-white">
      {/* Swiper en todas las vistas */}
      <div className="w-full px-2">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={8}
          slidesPerView={2.5}
          breakpoints={{
            768: { slidesPerView: 4.5 },
            1024: { slidesPerView: 6 }
          }}
          centeredSlides={false}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
          speed={3500}
          loop={true}
          freeMode={true}
          className="!pb-4"
        >
          {marcas.map(marca => (
            <SwiperSlide key={marca.nombre}>
              <div className="flex flex-col items-center">
                <div className="bg-transparent rounded-lg border-none flex items-center justify-center h-20 w-36 p-2">
                  <img src={marca.icon} alt={marca.nombre + " logo"} className="h-16 w-auto max-w-[130px] object-contain" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MarcasFlotantes;
