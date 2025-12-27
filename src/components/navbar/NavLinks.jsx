import React from 'react'

const Navbarlinks = [
  { id: 1, title: "Inicio", link: "/" },
  { id: 2, title: "Sobre mí", link: "/About" },
  { id: 3, title: "Proyectos", link: "/Work" },
  { id: 4, title: "Contacto", link: "/Contact" },
];

const NavLinks = ({ isMobile = false, onLinkClick = () => {} }) => {
  const containerClass = isMobile ? 'flex flex-col space-y-4 items-center' : 'hidden md:flex space-x-8';
  const linkClass = isMobile
    ? 'block mobile-link text-[var(--blanco-nieve)] text-xl rounded-lg transition-all duration-200 hover:text-[var(--azul-marino)] hover:bg-[var(--gris-perla)] focus:outline-none focus:ring-2 focus:ring-[var(--plateado)] text-center'
    : 'text-[var(--blanco-nieve)] text-base px-3 py-1 rounded-lg transition-all duration-300 hover:text-[var(--azul-marino)] hover:bg-[var(--gris-perla)] focus:outline-none focus:ring-2 focus:ring-[var(--plateado)]';

  return (
    <ul className={containerClass} role="menu">
      {Navbarlinks.map((link) => (
        <li key={link.id} role="none">
          <a
            role="menuitem"
            onClick={() => onLinkClick()}
            className={linkClass}
            href={link.link}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks;