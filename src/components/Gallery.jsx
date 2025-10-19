import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Gallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        className="w-full h-[340px] rounded-lg mb-2"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`Foto vehículo ${idx + 1}`} className="w-full h-[340px] object-contain bg-white rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2 overflow-x-auto mt-2 justify-center">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Miniatura ${idx + 1}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${activeIndex === idx ? 'border-blue-700' : 'border-transparent'}`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
