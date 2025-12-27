import React from 'react'
import logo from "../../assets/logo.svg";

const NavBrand = () => {
  return (
    <a href="/" className="navbrand flex items-center gap-3" aria-label="Inicio">
      <img src={logo?.src || logo} alt="Logo de Sergio Madrigal" className="h-12 w-auto md:h-14" />
      <span className="hidden md:inline-block font-semibold text-lg text-[var(--blanco-nieve)]">Sergio Madrigal</span>
    </a>
  )
}

export default NavBrand;
