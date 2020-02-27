import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'

const NavBar = () => {
    return(
        <nav>
            <NavLink to={"/dog"}>Dogs</NavLink>
            <NavLink to={"/cat"}>Cats</NavLink>
        </nav>
    )
}

export default NavBar