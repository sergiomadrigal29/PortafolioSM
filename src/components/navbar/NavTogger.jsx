import React from 'react'

const NavTogger = ({ isOpen = false, onToggle = () => {} }) => {
  return (
    <button
      className="navbar-toggler"
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
      onClick={onToggle}
    >
      {/* Hamburger / Close icons */}
      {isOpen ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M6 6L18 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 18L18 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 6h18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 12h18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 18h18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </button>
  )
}

export default NavTogger;
