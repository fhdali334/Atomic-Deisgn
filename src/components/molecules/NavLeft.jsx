import React from 'react'
import Logo from '../atoms/Logo'
import ImageLogo from "../../images/Logo.png"

const NavLeft = () => {
  return (
    <div>
        <Logo image={ImageLogo} text="Pages" />
    </div>
  )
}

export default NavLeft