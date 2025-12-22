import React from 'react'

export const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='navbar-content'>
        <NavBrand />
        <NavLinks />
        <NavTogger />
      </div>
    </nav>
  )
}
