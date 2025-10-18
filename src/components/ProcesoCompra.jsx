import React from "react";
import { FaCarSide, FaCalendarCheck, FaMoneyCheckAlt, FaCaravan } from "react-icons/fa";

const pasos = [
  {
    icon: <FaCarSide className="text-[#3498DB] text-3xl" />,
    titulo: "Elige tu auto",
    descripcion: "Explora nuestro inventario y encuentra el vehículo ideal para ti."
  },
  {
    icon: <FaCalendarCheck className="text-[#3498DB] text-3xl" />,
    titulo: "Agenda tu prueba",
    descripcion: "Reserva una cita para probar el auto sin compromiso."
  },
  {
    icon: <FaMoneyCheckAlt className="text-[#3498DB] text-3xl" />,
    titulo: "Financiamiento fácil",
    descripcion: "Te ayudamos a obtener el mejor plan de pago, rápido y seguro."
  },
  {
    icon: <FaCaravan className="text-[#3498DB] text-3xl" />,
    titulo: "Entrega inmediata",
    descripcion: "Recibe tu auto listo para rodar, con todos los papeles en regla."
  }
];

const ProcesoCompra = () => (
  <section className="bg-[#F5F6FA] rounded-xl shadow-sm py-10 px-6 my-12 max-w-6xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-extrabold text-[#3498DB] mb-2 tracking-tight text-center">¿Cómo comprar en MarosAutoSales?</h2>
    <div className="h-1 w-12 bg-[#3498DB] rounded-full mx-auto mb-8"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {pasos.map((paso, idx) => (
        <div key={idx} className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow hover:shadow-md transition cursor-pointer">
          <div className="mb-3">{paso.icon}</div>
          <div className="font-bold text-lg mb-1 text-[#323A43]">{paso.titulo}</div>
          <div className="text-gray-600 text-sm">{paso.descripcion}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ProcesoCompra;
