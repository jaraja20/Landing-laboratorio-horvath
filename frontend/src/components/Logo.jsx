import React from "react";

// Marca única: Header, Footer y MobileMenu la envuelven cada uno en su
// propio elemento (Link, span, etc.) pero el contenido sale siempre de acá.
export default function Logo() {
  return (
    <>
      <span className="logo-top">Laboratorios</span>
      <span className="logo-main">HORVATH</span>
      <span className="logo-sub">Advanced Science Hub</span>
    </>
  );
}
