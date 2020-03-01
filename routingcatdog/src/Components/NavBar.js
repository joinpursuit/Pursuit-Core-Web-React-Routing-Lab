import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
const NavBar = () => {
    return(
        <nav>
            <NavLink exact to={"/"}>HOME</NavLink>
            <NavLink to={"/dog/random"}>Random Dog</NavLink>
            <NavLink to={"/dog/random/6"}>Random Dog by Number</NavLink>
            <NavLink to={"/dog/breed"}>Dog by Breed</NavLink>
            <NavLink to={"/cat/random"}>Random Cat</NavLink>
            <NavLink to={"/cat/random/10"}>Random Cats by Number</NavLink>

        </nav>
    )
}

export default NavBar; 