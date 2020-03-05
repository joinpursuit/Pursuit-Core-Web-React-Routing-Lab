import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav> 
            <NavLink to={"/cat/random"}> Random Cat</NavLink> 
            <NavLink to={"/dog/random"}> Random Dog</NavLink> 
        </nav>
    )
}


export default NavBar; 