import React from 'react'

import { Navbar, NavbarBrand } from 'reactstrap'

import './Header.scss'

const Header = () => {
  return (
    <Navbar color="light" light expand="md" className="px-5">
      <NavbarBrand href="/">Trello</NavbarBrand>
    </Navbar>
  )
}

export default Header
