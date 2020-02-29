import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'

const NavBar = () => {
    return(
        <nav>
            <NavLink to={"/dog/random"}> Random Dog</NavLink>
            <NavLink to={"/dog/random/:num"}>Random Dogs</NavLink>
            <NavLink to={"/cat/random"}>Random Cat</NavLink>
            <NavLink to={"/cat/random/:num"}>Random Cats</NavLink>
        </nav>
    )
}

export default NavBar