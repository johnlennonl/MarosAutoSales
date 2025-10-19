import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardVehiculo from "../components/CardVehiculo";
import { mockVehicles } from "../data/mockVehicles";

const getUnique = (arr, key) => [...new Set(arr.map(item => item[key]).filter(Boolean))];

const Inventario = () => {
  const location = useLocation();
  // Leer el parámetro 'search' de la URL
  const params = new URLSearchParams(location.search);
  const searchParam = params.get("search") || "";
  const [loading, setLoading] = useState(false);
  const [orden, setOrden] = useState("");
  const [filtros, setFiltros] = useState({
    modelo: searchParam,
    marca: "",
    año: "",
    color: "",
    precioMin: "",
    precioMax: ""
  });

  // Si cambia el parámetro search, actualizar el filtro
  useEffect(() => {
    setFiltros(f => ({ ...f, modelo: params.get("search") || "" }));
    // eslint-disable-next-line
  }, [location.search]);

  // Loader animado al filtrar
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [filtros, orden]);

  const modelos = getUnique(mockVehicles, "modelo");
  const marcas = getUnique(mockVehicles, "marca");
  const años = getUnique(mockVehicles, "año");
  const colores = getUnique(mockVehicles, "color");

  const handleFiltro = e => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  // Función para resaltar coincidencias
  function highlight(text, term) {
    if (!term) return text;
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? <mark key={i} className="bg-yellow-200 text-[#101010] px-1 rounded">{part}</mark> : part
    );
  }

  let vehiculosFiltrados = mockVehicles.filter(v => {
    const modeloMatch = !filtros.modelo ||
      v.modelo.toLowerCase().includes(filtros.modelo.toLowerCase()) ||
      v.marca.toLowerCase().includes(filtros.modelo.toLowerCase());
    const marcaMatch = !filtros.marca || v.marca === filtros.marca;
    const añoMatch = !filtros.año || String(v.año) === filtros.año;
    const colorMatch = !filtros.color || v.color === filtros.color;
    const precioMinMatch = !filtros.precioMin || v.precio >= Number(filtros.precioMin);
    const precioMaxMatch = !filtros.precioMax || v.precio <= Number(filtros.precioMax);
    return modeloMatch && marcaMatch && añoMatch && colorMatch && precioMinMatch && precioMaxMatch;
  });

  // Ordenar resultados
  if (orden === "precio-asc") {
    vehiculosFiltrados = [...vehiculosFiltrados].sort((a, b) => a.precio - b.precio);
  } else if (orden === "precio-desc") {
    vehiculosFiltrados = [...vehiculosFiltrados].sort((a, b) => b.precio - a.precio);
  } else if (orden === "año-asc") {
    vehiculosFiltrados = [...vehiculosFiltrados].sort((a, b) => a.año - b.año);
  } else if (orden === "año-desc") {
    vehiculosFiltrados = [...vehiculosFiltrados].sort((a, b) => b.año - a.año);
  }

  return (
    <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#3498DB] mb-2 tracking-tight text-center drop-shadow-lg">Inventario de vehículos</h1>
        <div className="h-1 w-16 bg-[#3498DB] rounded-full mx-auto mb-8"></div>
        {/* Mensaje de resultados y selector de orden */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          {filtros.modelo ? (
            <div className="text-center text-lg text-gray-700">
              Resultados para: <span className="font-bold text-[#3498DB]">"{filtros.modelo}"</span>
            </div>
          ) : <div />}
          <div className="flex items-center gap-2 justify-center">
            <label htmlFor="orden" className="text-gray-700 font-semibold">Ordenar por:</label>
            <select
              id="orden"
              value={orden}
              onChange={e => setOrden(e.target.value)}
              className="px-2 py-1 rounded border border-gray-300 focus:ring-2 focus:ring-[#3498DB]"
            >
              <option value="">Relevancia</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="año-asc">Año: menor a mayor</option>
              <option value="año-desc">Año: mayor a menor</option>
            </select>
          </div>
        </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-white py-8 px-4 shadow-sm min-h-[200px]">
          {loading ? (
            <div className="col-span-3 flex items-center justify-center py-16">
              <span className="loader"></span>
            </div>
          ) : vehiculosFiltrados.length > 0 ? (
            vehiculosFiltrados.map(vehiculo => (
              <div key={vehiculo.id}>
                {/* CardVehiculo con highlight en modelo y marca */}
                <CardVehiculo
                  vehiculo={{
                    ...vehiculo,
                    modelo: highlight(vehiculo.modelo, filtros.modelo),
                    marca: highlight(vehiculo.marca, filtros.modelo)
                  }}
                />
              </div>
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
