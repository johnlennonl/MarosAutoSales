import React from "react";
import { useNavigate } from "react-router-dom";
import { KeyRound, Gauge, Car, Calendar, BadgeDollarSign } from "lucide-react";

const CardVehiculo = ({ vehiculo }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-lg hover:shadow-2xl transition cursor-pointer overflow-hidden border border-gray-200 flex flex-col"
      onClick={() => navigate(`/vehiculo/${vehiculo.id}`)}
    >
      <img src={vehiculo.imagenUrl} alt={vehiculo.modelo}
        className="w-full h-56 object-cover object-center" />
      <div className="p-5 flex flex-col flex-1">
        <div className="font-bold text-xl text-[#101010] mb-1 leading-tight">
          {vehiculo.año} {vehiculo.marca} {vehiculo.modelo}
        </div>
        <div className="text-gray-600 text-sm mb-2 line-clamp-2">{vehiculo.descripcionCorta}</div>
        <div className="flex flex-wrap gap-4 my-3 text-[#323A43]">
          <span className="flex items-center gap-1 text-xs"><KeyRound className="text-[#3498DB] w-4 h-4" /> {vehiculo.llaves} Llaves</span>
          <span className="flex items-center gap-1 text-xs"><Gauge className="text-[#3498DB] w-4 h-4" /> {vehiculo.kilometraje.toLocaleString()} km</span>
          <span className="flex items-center gap-1 text-xs"><Car className="text-[#3498DB] w-4 h-4" /> VIN: {vehiculo.vin || 'N/A'}</span>
          <span className="flex items-center gap-1 text-xs"><Calendar className="text-[#3498DB] w-4 h-4" /> {vehiculo.año}</span>
        </div>
        <div className="border-t border-gray-200 pt-3 mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-[#3498DB]">Ofrecido en: ${vehiculo.precio.toLocaleString('en-US')}</span>
          {vehiculo.esDestacado && <span className="bg-[#3498DB] text-white text-xs px-2 py-1 rounded shadow">Destacado</span>}
        </div>
      </div>
    </div>
  );
};

export default CardVehiculo;
