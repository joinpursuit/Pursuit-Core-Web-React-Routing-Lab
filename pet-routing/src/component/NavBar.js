import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css"

const NavBar = () => {
    return(
        <nav>
            <NavLink exact to={"/dog/random"}>Get Random Dog Image</NavLink>
            <NavLink to={"/dog/random/:num"}>Get Multiple Dog Images</NavLink>
            <NavLink to={"/dog/:breed"}>Get Random Breed Image</NavLink>
        </nav>
    )
}

export default NavBar;