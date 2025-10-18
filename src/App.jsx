

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inventario from "./pages/Inventario";
import Contacto from "./pages/Contacto";
import Financiamiento from "./pages/Financiamiento";
import DetalleVehiculo from "./pages/DetalleVehiculo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/inventario" element={<Inventario />} />
  <Route path="/contacto" element={<Contacto />} />
  <Route path="/financiamiento" element={<Financiamiento />} />
  <Route path="/vehiculo/:id" element={<DetalleVehiculo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
