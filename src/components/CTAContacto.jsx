import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

const CTAContacto = () => (
  <section className="bg-gradient-to-br from-[#F5F6FA] via-[#EAF3FB] to-white rounded-xl shadow-lg py-12 px-8 my-16 max-w-4xl mx-auto flex flex-col items-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#3498DB] mb-2 tracking-tight text-center flex items-center gap-3 drop-shadow-lg">
      <FaCalendarCheck className="text-[#3498DB] text-4xl md:text-5xl" />
      ¡Tu próximo auto te espera!
    </h2>
    <div className="h-1 w-16 bg-[#3498DB] rounded-full mx-auto mb-8"></div>
    <p className="text-xl text-[#323A43] mb-8 text-center max-w-2xl font-medium">¿Listo para dar el siguiente paso? Agenda tu prueba de manejo o escríbenos para recibir atención personalizada. ¡Te asesoramos en todo el proceso y respondemos rápido!</p>
    <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
      <a href="https://wa.me/1XXXXXXXXXX?text=¡Hola!%20Estoy%20interesado%20en%20agendar%20una%20prueba%20de%20manejo%20en%20MaroAutoSales%20LLC." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 px-10 rounded-2xl text-2xl shadow-xl transition-all duration-200 scale-100 hover:scale-105">
        <FaWhatsapp className="text-3xl" /> Escribir por WhatsApp
      </a>
      <a href="tel:+1XXXXXXXXXX" className="flex items-center justify-center gap-3 bg-[#3498DB] hover:bg-[#323A43] text-white font-bold py-5 px-10 rounded-2xl text-2xl shadow-xl transition-all duration-200 scale-100 hover:scale-105">
        <FaPhoneAlt className="text-3xl" /> Llamar ahora
      </a>
    </div>
    <div className="mt-8 text-center text-gray-500 text-base">¿Prefieres agendar por correo? <a href="mailto:ventas@maroautosales.com" className="text-[#3498DB] font-semibold underline hover:text-[#323A43]">Escríbenos aquí</a></div>
  </section>
);

export default CTAContacto;
