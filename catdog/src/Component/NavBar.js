import React from 'react'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
    return(
        <nav>
            <NavLink exact to={'/random'}>Random Dog</NavLink>
            <NavLink to={'/random/:num'}> Five Random Dogs</NavLink>
            {/* <NavLink path={'dog/breed'}>Get Dog By Breed</NavLink>
            <NavLink path={'cat/random'}>Random Cat</NavLink>
            <NavLink path={'cat/random/:num'}>Five Random Cats</NavLink> */}

        </nav>
    )
}

export default NavBar;