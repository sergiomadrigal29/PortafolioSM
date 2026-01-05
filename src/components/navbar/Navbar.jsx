import React, { useState, useEffect } from 'react'
import '../../styles/navbar.css'
import NavBrand from './NavBrand'
import NavLinks from './NavLinks'
import NavTogger from './NavTogger'
import Button from '../ui/Button'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  // cerrar con Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // bloquear scroll del body cuando el drawer esté abierto
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = open ? 'hidden' : prev
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <nav className='navbar-container'>
      <div className='navbar-content'>
        <div className="nav-left">
          <NavBrand /> 
        </div>

        <div className="nav-right">
          <div className="hidden md:flex md:items-center md:gap-6">
            <NavLinks />
            <a href="/SergioCV.pdf" download="SergioMadrigal_CV.pdf" rel="noopener noreferrer">
              <Button variant="primary">Descargar CV</Button>
            </a>
          </div>

          {/* Toggle móvil */}
          <div className="md:hidden">
            <NavTogger isOpen={open} onToggle={() => setOpen((s) => !s)} />
          </div>
        </div>
      </div>

      {/* Overlay (clic fuera para cerrar) */}
      <div
        className={`mobile-overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Side drawer (right) */}
      <aside
        className={`mobile-drawer ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cierre (rojo) */}
        <button
          className="mobile-close-button"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-content">
            <div className="mobile-drawer-links">
              <NavLinks isMobile onLinkClick={() => setOpen(false)} />
            </div>

            <div className="mobile-drawer-cta">
              <Button
                as="a"
                href="/SergioCV.pdf"
                download="SergioMadrigal_CV.pdf"
                rel="noopener noreferrer"
                className="mobile-cta-btn"
                variant="primary"
                onClick={() => setOpen(false)}
              >
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </nav>
  )
}

export default Navbar;
