import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav> 
            <NavLink to={"/"}> Multiple Random Cats</NavLink> 
            <NavLink to={"/dog/random"}> Multiple Random Dogs</NavLink> 
            <NavLink to={"/"}> Random Cats</NavLink> 
            <NavLink to={"/dog"}> Random Dogs</NavLink> 
            <NavLink to={"/dog/:breed"}> Random Dogs By Breed</NavLink> 
        
        </nav>
    )
}


export default NavBar; 