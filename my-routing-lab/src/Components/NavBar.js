import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav> 
            <NavLink to={"/cat/random/:num"}> Multiple Random Cats</NavLink> 
            <NavLink to={"/dog/random/:num"}> Multiple Random Dogs</NavLink> 
            <NavLink to={"/cat/random"}> Random Cat</NavLink> 
            <NavLink to={"/dog/random"}> Random Dog</NavLink> 
            <NavLink to={"/dog/:breed"}> Random Dogs By Breed</NavLink> 
        </nav>
    )
}


export default NavBar; 