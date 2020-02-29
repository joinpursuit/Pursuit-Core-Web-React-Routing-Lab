import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return(
        <nav>
            <NavLink exact to={'dog/random'}>Random Dog</NavLink>
            <NavLink exact to={'dog/random/:num'}> Five Random Dogs</NavLink>
            <NavLink exact to={'dog/breed'}>Get Dog By Breed</NavLink>
            <NavLink exact to={'cat/random'}>Random Cat</NavLink>
            <NavLink exact to={'cat/random/:num'}>Five Random Cats</NavLink>

        </nav>
    )
}

export default NavBar;