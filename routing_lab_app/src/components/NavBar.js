import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to={"/dog/random"}></NavLink>
    </nav>
  );
};

export default NavBar;
