import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";

const Contacto = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Contáctanos</h1>
      <LeadForm title="¿Tienes dudas? ¡Escríbenos!" />
      <div className="mt-8 text-gray-700 text-center">
        <p><b>Dirección:</b> Denver, Colorado</p>
        <p><b>Teléfono:</b> (555) 123-4567</p>
        <p><b>Email:</b> info@maroautosales.com</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contacto;
