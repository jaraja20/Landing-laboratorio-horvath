import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pacientes from "./pages/Pacientes";
import Empresas from "./pages/Empresas";
import AdvancedScienceHub from "./pages/AdvancedScienceHub";
import Convenios from "./pages/Convenios";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/personas" element={<Navigate to="/pacientes" replace />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/advanced-science-hub" element={<AdvancedScienceHub />} />
        <Route path="/convenios" element={<Convenios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
