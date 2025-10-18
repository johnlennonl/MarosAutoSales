import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { FaCalendarAlt, FaTachometerAlt, FaPalette, FaCarSide, FaKey, FaWhatsapp, FaPhoneAlt, FaCalculator } from "react-icons/fa";
import FinanciamientoCalculator from "../components/FinanciamientoCalculator";
import LeadForm from "../components/LeadForm";
import { mockVehicles } from "../data/mockVehicles";

const DetalleVehiculo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const vehiculo = mockVehicles.find(v => v.id === id);

  if (!vehiculo) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-red-600">Vehículo no encontrado</h1>
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded" onClick={() => navigate(-1)}>Volver</button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        <button className="mb-6 text-[#0B1C2A] font-semibold hover:underline" onClick={() => navigate(-1)}>&larr; Volver</button>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-8">
            <Gallery images={vehiculo.images} className="rounded-none max-h-[420px] object-contain" />
            <div className="bg-white border border-gray-200 p-6 md:p-8 shadow-lg flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2 text-[#0B1C2A] font-bold text-lg"><FaCalculator className="text-2xl" /> Calculadora de financiamiento</div>
              <FinanciamientoCalculator precio={vehiculo.precio} />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B1C2A] mb-2">{vehiculo.marca} {vehiculo.modelo}</h1>
              <div className="text-2xl font-bold text-[#EA0029] mb-2">{vehiculo.precio.toLocaleString('es-US', { style: 'currency', currency: 'USD' })}</div>
              <div className="mb-4 text-gray-700 text-lg">{vehiculo.descripcionCorta}</div>
              <ul className="mb-4 text-[#323A43] text-base space-y-2">
                <li className="flex items-center gap-2"><FaCalendarAlt className="text-[#3498DB] text-lg" /><span className="font-semibold">Año:</span> {vehiculo.año}</li>
                <li className="flex items-center gap-2"><FaTachometerAlt className="text-[#3498DB] text-lg" /><span className="font-semibold">Kilometraje:</span> {vehiculo.kilometraje.toLocaleString()} km</li>
                <li className="flex items-center gap-2"><FaPalette className="text-[#3498DB] text-lg" /><span className="font-semibold">Color:</span> {vehiculo.color}</li>
                <li className="flex items-center gap-2"><FaCarSide className="text-[#3498DB] text-lg" /><span className="font-semibold">VIN:</span> {vehiculo.vin || 'N/A'}</li>
                <li className="flex items-center gap-2"><FaKey className="text-[#3498DB] text-lg" /><span className="font-semibold">Llaves:</span> {vehiculo.llaves || 'N/A'}</li>
              </ul>
              <div className="flex gap-4 mb-6">
                <a href="https://wa.me/1XXXXXXXXXX?text=Hola,%20estoy%20interesado%20en%20el%20vehículo%20{vehiculo.marca}%20{vehiculo.modelo}" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2 px-6 rounded shadow-lg text-lg transition">
                  <FaWhatsapp className="text-xl" /> WhatsApp
                </a>
                <a href="tel:+1XXXXXXXXXX" className="flex items-center gap-2 bg-[#0B1C2A] hover:bg-[#3498DB] text-white font-bold py-2 px-6 rounded shadow-lg text-lg transition">
                  <FaPhoneAlt className="text-xl" /> Llamar
                </a>
              </div>
              <div className="bg-white border border-gray-200 p-6 md:p-8 shadow-lg mb-6">
                <LeadForm title="¿Interesado? ¡Contáctanos!" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetalleVehiculo;
