import React from "react";
import kiaLogo from "../assets/kia.svg";
import toyotaLogo from "../assets/toyota-1.svg";
import fordLogo from "../assets/ford-7.svg";
import hyundaiLogo from "../assets/hyundai.svg";
import jeepLogo from "../assets/jeep-5.svg";
import nissanLogo from "../assets/nissan-6.svg";
import chevroletLogo from "../assets/chevrolet-1.svg";
// import mitsubishiLogo from "../assets/mitsubishi-motors-2.svg";

const marcas = [
  { nombre: "KIA", icon: kiaLogo },
  { nombre: "TOYOTA", icon: toyotaLogo },
  { nombre: "FORD", icon: fordLogo },
  { nombre: "HYUNDAI", icon: hyundaiLogo },
  { nombre: "JEEP", icon: jeepLogo },
  { nombre: "NISSAN", icon: nissanLogo },
  { nombre: "CHEVROLET", icon: chevroletLogo },
//   { nombre: "MITSUBISHI", icon: mitsubishiLogo },
];

const MarcasFlotantes = () => {
  // Si el número de marcas es impar, centramos la última (Chevrolet)
  const isOdd = marcas.length % 2 !== 0;
  return (
    <section className="w-full flex justify-center items-center py-7 pb-4 bg-white shadow-lg">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-y-8 gap-x-4 md:gap-x-10 w-full max-w-6xl px-2 md:px-6">
        {marcas.map((marca, idx) => {
          // Centrar Chevrolet en mobile si es la última y el número de marcas es impar
          const isLast = idx === marcas.length - 1;
          const mobileCenter = isOdd && isLast ? "col-span-2 justify-self-center" : "";
          return (
            <div key={marca.nombre} className={`flex flex-col items-center ${mobileCenter}`}>
              <div className="bg-transparent rounded-lg border-none flex items-center justify-center h-24 w-32 md:h-20 md:w-32 p-3">
                <img src={marca.icon} alt={marca.nombre + " logo"} className="h-16 md:h-16 w-auto max-w-[120px] object-contain" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MarcasFlotantes;
