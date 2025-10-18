import React, { useState } from "react";

const Gallery = ({ images }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div>
  <img src={images[selected]} alt="Foto vehículo" className="w-full h-[340px] object-contain bg-white rounded-lg mb-2" />
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Miniatura ${idx + 1}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${selected === idx ? 'border-blue-700' : 'border-transparent'}`}
            onClick={() => setSelected(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
