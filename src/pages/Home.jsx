import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardVehiculo from "../components/CardVehiculo";
import ProcesoCompra from "../components/ProcesoCompra";
import FAQ from "../components/FAQ";
import CTAContacto from "../components/CTAContacto";
import { mockVehicles } from "../data/mockVehicles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#F2F2F2] min-h-screen flex flex-col font-montserrat">
      <NavBar />
      <header className="relative overflow-hidden text-[#101010] flex flex-col items-center justify-center min-h-[320px] md:min-h-[520px] w-full bg-[#F2F2F2] px-2 md:px-0 py-6 md:py-12">
        {/* Imagen de fondo hero actualizada */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img src="https://www.kia.com/content/dam/kia/us/en/vehicles/k5/2026/mep/in-page-gallery-v2/my26_k5-mep-gallery-ext8.jpg" alt="Concesionario autos usados" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>
          <div className="absolute inset-0 bg-white bg-opacity-40"></div>
        </div>
        {/* Logo protagonista animado */}
        <div className="relative z-10 flex flex-col items-center mt-8 animate-fade-in">
          <span className="inline-block bg-[#3498DB]/90 text-white text-xs md:text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-lg tracking-wide uppercase animate-fade-in">Financiamiento fácil · Autos inspeccionados</span>
        </div>
        {/* Título hero brutal */}
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg leading-tight text-center animate-fade-in-up">
          Encuentra tu <span className="text-[#3498DB] font-semibold">auto ideal</span> en Colorado
        </h1>
        <p className="relative z-10 text-base sm:text-lg md:text-2xl mb-6 md:mb-8 max-w-xl mx-auto text-[#030303]  text-center animate-fade-in-up delay-200">Compra seguro, rápido y con atención personalizada. ¡Tu próximo vehículo te espera!</p>
        <Link to="/inventario" className="relative z-10 inline-block bg-[#3498DB] hover:bg-[#323A43] text-white font-bold py-3 px-8 md:py-4 md:px-14 rounded-xl text-lg md:text-2xl shadow-xl transition-all duration-200 scale-100 hover:scale-105 animate-fade-in-up delay-300">Ver inventario</Link>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full px-2 md:px-4 py-6 md:py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3498DB] mb-2 tracking-tight">Vehículos destacados</h2>
        <div className="h-1 w-8 md:w-12 bg-[#3498DB] rounded-full mb-4 md:mb-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 bg-gray-50 rounded-xl py-4 md:py-8 px-2 md:px-4 shadow-sm">
          {mockVehicles.filter(v => v.esDestacado).map(vehiculo => (
            <CardVehiculo key={vehiculo.id} vehiculo={vehiculo} />
          ))}
        </div>
        <ProcesoCompra />
        <FAQ />
        <CTAContacto />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;



