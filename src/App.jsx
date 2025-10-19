import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Inventario from "./pages/Inventario";
import Contacto from "./pages/Contacto";
import Financiamiento from "./pages/Financiamiento";
import DetalleVehiculo from "./pages/DetalleVehiculo";


// Loader global al cambiar de ruta
function LoaderOnRouteChange({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80">
          <span className="loader"></span>
        </div>
      )}
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LoaderOnRouteChange>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/financiamiento" element={<Financiamiento />} />
          <Route path="/vehiculo/:id" element={<DetalleVehiculo />} />
        </Routes>
      </LoaderOnRouteChange>
    </BrowserRouter>
  );
}

export default App;
