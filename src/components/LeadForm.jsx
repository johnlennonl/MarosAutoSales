import React, { useState } from "react";

const LeadForm = ({ title = "Solicita información", onSubmit }) => {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };
  return (
    <form className="bg-white rounded-lg shadow p-6 space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold text-blue-900 mb-2">{title}</h2>
      <input name="nombre" required placeholder="Nombre" className="w-full border rounded px-3 py-2" value={form.nombre} onChange={handleChange} />
      <input name="email" type="email" required placeholder="Correo electrónico" className="w-full border rounded px-3 py-2" value={form.email} onChange={handleChange} />
      <input name="telefono" required placeholder="Teléfono" className="w-full border rounded px-3 py-2" value={form.telefono} onChange={handleChange} />
      <textarea name="mensaje" placeholder="Mensaje" className="w-full border rounded px-3 py-2" value={form.mensaje} onChange={handleChange} />
      <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition">Enviar</button>
    </form>
  );
};

export default LeadForm;
