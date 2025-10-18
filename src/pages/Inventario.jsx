import React, { useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardVehiculo from "../components/CardVehiculo";
import { mockVehicles } from "../data/mockVehicles";

const getUnique = (arr, key) => [...new Set(arr.map(item => item[key]).filter(Boolean))];

const Inventario = () => {
  const [filtros, setFiltros] = useState({
    modelo: "",
    marca: "",
    año: "",
    color: ""
  });

  const modelos = getUnique(mockVehicles, "modelo");
  const marcas = getUnique(mockVehicles, "marca");
  const años = getUnique(mockVehicles, "año");
  const colores = getUnique(mockVehicles, "color");

  const handleFiltro = e => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const vehiculosFiltrados = mockVehicles.filter(v => {
    return (
      (!filtros.modelo || v.modelo.toLowerCase().includes(filtros.modelo.toLowerCase())) &&
      (!filtros.marca || v.marca === filtros.marca) &&
      (!filtros.año || String(v.año) === filtros.año) &&
      (!filtros.color || v.color === filtros.color)
    );
  });

  return (
    <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
  <h1 className="text-4xl md:text-5xl font-extrabold text-[#3498DB] mb-2 tracking-tight text-center drop-shadow-lg">Inventario de vehículos</h1>
  <div className="h-1 w-16 bg-[#3498DB] rounded-full mx-auto mb-8"></div>
        <div className="w-full max-w-6xl mx-auto mb-10">
          <div className="bg-[#0B1C2A] text-white p-6 flex flex-wrap md:flex-nowrap gap-4 items-center shadow-lg border border-[#101010]">
            <div className="flex flex-col gap-2 flex-1 min-w-[180px]">
              <label className="font-semibold text-sm mb-1">Buscar</label>
              <input
                type="text"
                name="modelo"
                value={filtros.modelo}
                onChange={handleFiltro}
                placeholder="Marca, modelo o palabras clave"
                className="px-4 py-2 bg-gray-100 text-[#101010] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-[140px]">
              <label className="font-semibold text-sm mb-1">Marca</label>
              <select
                name="marca"
                value={filtros.marca}
                onChange={handleFiltro}
                className="px-4 py-2 bg-gray-100 text-[#101010] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
              >
                <option value="">Todas</option>
                {marcas.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-[140px]">
              <label className="font-semibold text-sm mb-1">Modelo</label>
              <select
                name="modelo"
                value={filtros.modelo}
                onChange={handleFiltro}
                className="px-4 py-2 bg-gray-100 text-[#101010] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
              >
                <option value="">Todos</option>
                {modelos.map(mo => (
                  <option key={mo} value={mo}>{mo}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-[100px]">
              <label className="font-semibold text-sm mb-1">Precio min</label>
              <input
                type="number"
                name="precioMin"
                min={0}
                value={filtros.precioMin || ""}
                onChange={e => setFiltros({ ...filtros, precioMin: e.target.value })}
                className="px-4 py-2 bg-gray-100 text-[#101010] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-[100px]">
              <label className="font-semibold text-sm mb-1">Precio max</label>
              <input
                type="number"
                name="precioMax"
                min={0}
                value={filtros.precioMax || ""}
                onChange={e => setFiltros({ ...filtros, precioMax: e.target.value })}
                className="px-4 py-2 bg-gray-100 text-[#101010] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center min-w-[80px]">
              <button
                type="button"
                onClick={() => setFiltros({ modelo: "", marca: "", año: "", color: "", precioMin: "", precioMax: "" })}
                className="px-4 py-2 bg-gray-100 text-[#101010] border border-gray-300 font-semibold hover:bg-[#3498DB] hover:text-white transition"
              >
                Reset
              </button>
              <span className="text-gray-300 text-sm mt-2">{vehiculosFiltrados.length} resultados</span>
            </div>
          </div>
        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-white py-8 px-4 shadow-sm">
          {vehiculosFiltrados.length > 0 ? (
            vehiculosFiltrados.map(vehiculo => (
              <CardVehiculo key={vehiculo.id} vehiculo={vehiculo} />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500 text-xl py-12">No se encontraron vehículos con esos filtros.</div>
          )}
        </div>
      </main>
  <Footer />
  <ScrollToTopButton />
    </div>
  );
};

export default Inventario;
