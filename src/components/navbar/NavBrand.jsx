import React from 'react'

export const NavBrand = () => {
  return (
    <a href="/" className="flex items-center gap-2">
              <img src={logo?.src || logo} alt="Logo" className="w-40 h-auto" />
    </a>
  )
}
