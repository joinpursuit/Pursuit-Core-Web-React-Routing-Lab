import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css"

const NavBar = () => {
    return(
        <nav>
            <NavLink exact to={"/dog/random"}>Get Random Dog Image</NavLink>
            <NavLink to={"/dog/random/:num"}>Get Multiple Dog Images</NavLink>
        </nav>
    )
}

export default NavBar;