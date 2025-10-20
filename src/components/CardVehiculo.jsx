import React from "react";
import { useNavigate } from "react-router-dom";
import { KeyRound, Gauge, Car, Calendar, BadgeDollarSign } from "lucide-react";

const CardVehiculo = ({ vehiculo }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-xl hover:shadow-[0_8px_32px_rgba(52,152,219,0.15)] transition cursor-pointer overflow-hidden border border-gray-100 rounded-xl flex flex-col group"
      onClick={() => navigate(`/vehiculo/${vehiculo.id}`)}
    >
      <div className="w-full h-64 bg-gradient-to-br from-[#F5F6FA] via-white to-[#eaf6fb] flex items-center justify-center border-b border-gray-100 relative">
        <img
          src={vehiculo.imagenUrl}
          alt={vehiculo.modelo}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
        />
        {vehiculo.esDestacado && (
          <span className="absolute top-3 left-3 bg-[#3498DB] text-white text-xs px-3 py-1 rounded-full shadow font-bold tracking-wide">Destacado</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="font-extrabold text-xl md:text-2xl text-[#101010] mb-1 leading-tight tracking-tight">
          {vehiculo.año} {vehiculo.marca} {vehiculo.modelo}
        </div>
  <div className="text-gray-600 text-sm mb-2 line-clamp-2">{vehiculo.descripcionCorta}</div>
  <div className="flex flex-wrap gap-4 my-3 text-[#323A43]">
          <span className="flex items-center gap-1 text-xs"><KeyRound className="text-[#3498DB] w-4 h-4" /> {vehiculo.llaves} Llaves</span>
          <span className="flex items-center gap-1 text-xs"><Gauge className="text-[#3498DB] w-4 h-4" /> {vehiculo.kilometraje.toLocaleString()} km</span>
          <span className="flex items-center gap-1 text-xs"><Car className="text-[#3498DB] w-4 h-4" /> VIN: {vehiculo.vin || 'N/A'}</span>
          <span className="flex items-center gap-1 text-xs"><Calendar className="text-[#3498DB] w-4 h-4" /> {vehiculo.año}</span>
        </div>
        <div className="border-t border-gray-100 pt-3 mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-[#3498DB]">Ofrecido en: ${vehiculo.precio.toLocaleString('en-US')}</span>
        </div>
      </div>
    </div>
  );
};

export default CardVehiculo;
