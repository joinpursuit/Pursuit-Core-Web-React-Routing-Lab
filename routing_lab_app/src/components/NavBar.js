import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to={"/dog/random"}>
        Get Random Dog
      </NavLink>
      <NavLink to={"/dog/random/:num"}>Get Multiple Random Dogs</NavLink>
      <NavLink to={"/dog/:breed"}>Get Random Dog By Breed</NavLink>
      <NavLink to={"/cat/:random"}>Get Random Cat</NavLink>
      <NavLink to={"/cat/random/:num"}>Get Multiple Random Cats</NavLink>
    </nav>
  );
};

export default NavBar;
