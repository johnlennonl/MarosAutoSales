import React from "react";
import kiaLogo from "../assets/kia.svg";
import toyotaLogo from "../assets/toyota-1.svg";
import fordLogo from "../assets/ford-7.svg";
import hyundaiLogo from "../assets/hyundai.svg";
import jeepLogo from "../assets/jeep-5.svg";
import nissanLogo from "../assets/nissan-6.svg";
import chevroletLogo from "../assets/chevrolet-1.svg";
// import mitsubishiLogo from "../assets/mitsubishi.svg";

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

const MarcasFlotantes = () => (
  <section className="w-full flex justify-center items-center py-7 pb-4 bg-white shadow-lg  ">
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-y-6 gap-x-4 md:gap-x-10 w-full max-w-6xl px-2 md:px-6">
      {marcas.map(marca => (
        <div key={marca.nombre} className="flex flex-col items-center">
          <div className="bg-transparent rounded-lg shadow-lg border-none flex items-center justify-center h-20 w-28 md:h-20 md:w-32 p-3">
            <img src={marca.icon} alt={marca.nombre + " logo"} className="h-12 md:h-16 w-auto max-w-[110px] object-contain" />
          </div>
          <span className="mt-2 text-xs md:text-sm text-gray-800 font-bold tracking-wide text-center uppercase">{marca.nombre}</span>
        </div>
      ))}
    </div>
  </section>
);

export default MarcasFlotantes;
