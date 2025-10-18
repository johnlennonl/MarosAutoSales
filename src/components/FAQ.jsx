import React from "react";
import { FaQuestionCircle, FaMoneyBillWave, FaCarSide, FaShieldAlt } from "react-icons/fa";

const faqs = [
  {
    pregunta: "¿Puedo financiar mi auto usado?",
    respuesta: "Sí, ofrecemos opciones de financiamiento flexibles para todos nuestros vehículos."
  },
  {
    pregunta: "¿Los autos están inspeccionados y garantizados?",
    respuesta: "Todos los autos pasan por una inspección rigurosa y cuentan con garantía limitada."
  },
  {
    pregunta: "¿Qué documentos necesito para comprar?",
    respuesta: "Solo necesitas tu identificación, comprobante de ingresos y domicilio. Nosotros te guiamos en todo el proceso."
  },
  {
    pregunta: "¿Puedo agendar una prueba de manejo?",
    respuesta: "¡Por supuesto! Agenda tu cita fácilmente y prueba el auto que te interesa sin compromiso."
  }
];

const FAQ = () => (
  <section className="bg-white rounded-xl shadow-sm py-10 px-6 my-12 max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#3498DB] mb-2 tracking-tight text-center flex items-center justify-center gap-2">
      <FaQuestionCircle className="text-[#3498DB] text-3xl md:text-4xl" />
      Preguntas frecuentes
    </h2>
    <div className="h-1 w-12 bg-[#3498DB] rounded-full mx-auto mb-8"></div>
    <div className="space-y-6">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-[#F5F6FA] rounded-lg p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#3498DB]/10">
            {idx === 0 && <FaMoneyBillWave className="text-[#3498DB] text-2xl" />}
            {idx === 1 && <FaShieldAlt className="text-[#3498DB] text-2xl" />}
            {idx === 2 && <FaCarSide className="text-[#3498DB] text-2xl" />}
            {idx === 3 && <FaCarSide className="text-[#3498DB] text-2xl" />}
          </div>
          <div>
            <div className="font-bold text-lg md:text-xl text-[#323A43] mb-1">{faq.pregunta}</div>
            <div className="text-gray-600 text-base">{faq.respuesta}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
