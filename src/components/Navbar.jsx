import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbarlinks = [
  { id: 1, title: "Inicio", link: "/" },
  { id: 2, title: "Sobre mí", link: "/About" },
  { id: 3, title: "Proyectos", link: "/Work" },
  { id: 4, title: "Contacto", link: "/Contact" },
];

const SocialLinks = [
  {
    id: 1,
    title: "Github",
    link: "https://github.com/sergiomadrigal29",
    icon: "bi bi-github",
  },
  {
    id: 2,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/sergio-daniel-madrigal-valle-a3160a310/",
    icon: "bi bi-linkedin",
  },
  {
    id: 3,
    title: "Instagram",
    link: "https://www.instagram.com/_sergio_madrigal/",
    icon: "bi bi-instagram",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Cierra el menú si se hace clic fuera del sidebar
  const handleOverlayClick = (e) => {
    if (e.target.id === "mobile-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <nav className="w-full bg-[var(--azul-marino)]/95 text-[var(--blanco-nieve)] shadow-xl fixed top-0 left-0 z-50 backdrop-blur-md border-b border-[var(--plateado)]">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 md:px-8 md:py-4 w-full">
        <a href="/" className="flex items-center gap-2">
          <img src={logo?.src || logo} alt="Logo" className="w-40 h-auto" />
        </a>
        {/* Botón hamburguesa clásico */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[var(--blanco-nieve)] focus:outline-none transition-transform duration-300 hover:scale-110 z-[200]"
          aria-label="Abrir menú"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <>
                <rect
                  x="4"
                  y="6"
                  width="16"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="4"
                  y="11"
                  width="16"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="4"
                  y="16"
                  width="16"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </>
            )}
          </svg>
        </button>
        {/* Enlaces desktop */}
        <ul className="hidden md:flex space-x-8">
          {Navbarlinks.map((link) => (
            <li key={link.id}>
              <a
                className="text-[var(--blanco-nieve)] text-base px-3 py-1 rounded-lg transition-all duration-300 hover:text-[var(--azul-marino)] hover:bg-[var(--gris-perla)] focus:outline-none focus:ring-2 focus:ring-[var(--plateado)]"
                href={link.link}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* SocialLinks desktop */}
        <div className="hidden md:flex space-x-4 ml-6">
          {SocialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--plateado)] text-xl rounded-full p-2 transition-all duration-300 hover:text-[var(--azul-marino)] hover:bg-[var(--gris-perla)] focus:outline-none focus:ring-2 focus:ring-[var(--plateado)]"
              aria-label={social.title}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
      {/* Menú mobile animado */}
      <div
        id="mobile-overlay"
        onClick={handleOverlayClick}
        className={`md:hidden fixed inset-0 z-[150] transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto backdrop-blur"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          minHeight: "100vh",
          background: isOpen ? "rgba(0,31,63,0.92)" : "rgba(0,31,63,0.0)",
        }}
      >
        {/* Sidebar que se desliza desde la derecha */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[80vw] bg-[var(--azul-marino)] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col items-center justify-center z-[200] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white transition-transform duration-300 hover:scale-110 z-[210]"
            aria-label="Cerrar menú"
          ></button>
          <ul className="flex flex-col items-center justify-center flex-1 space-y-8 mt-12 mb-8 w-full text-center">
            {Navbarlinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-white text-2xl font-bold px-6 py-2 rounded-lg transition-all duration-300 hover:text-[var(--azul-marino)] hover:bg-[var(--gris-perla)] focus:outline-none focus:ring-2 focus:ring-[var(--plateado)]"
                  href={link.link}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-8 mb-10">
            {SocialLinks.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl rounded-full p-3 transition-all duration-300 hover:text-[var(--azul-marino)] hover:bg-[var(--gris-perla)] focus:outline-none focus:ring-2 focus:ring-[var(--plateado)]"
                aria-label={social.title}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
