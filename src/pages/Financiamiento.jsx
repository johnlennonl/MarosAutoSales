import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";

const Financiamiento = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Financiamiento</h1>
      <p className="mb-6 text-gray-700">Ofrecemos opciones de financiamiento flexibles para que puedas llevarte el auto que deseas. Completa el formulario y te contactaremos para asesorarte.</p>
      <LeadForm title="Solicita tu pre-aprobación" />
    </main>
    <Footer />
  </div>
);

export default Financiamiento;
