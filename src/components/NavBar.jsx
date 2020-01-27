/*
Joseph P. Pasaoa
NavBar Component | Cats and Dogs Fake Server Lab
*/


/* IMPORTS */
    // external
    import React from 'react';
    import { NavLink } from 'react-router-dom';

    // local
    import './NavBar.css';


/* COMPONENT */
const NavBar = () => {
  const makeRandomNum = () => {
    return Math.floor(Math.random() * 9 + 2);
  }

  return (
    <nav>
      <NavLink to="/">Home + About</NavLink>
      <NavLink to="/dogs/random">A Random Dog</NavLink>
      <NavLink to={() => `/dogs/random/${makeRandomNum()}`}>Multiple Random Dogs</NavLink>
      <NavLink to="/dogs/default">A Dog by Breed</NavLink>
      <NavLink to="/cats/random">A Random Cat</NavLink>
      <NavLink to={() => `/cats/random/${makeRandomNum()}`}>Multiple Random Cats</NavLink>
      <NavLink to="/all/random">Random Dogs & Cats</NavLink>
    </nav>
  );
}


/* EXPORT */
export default NavBar;
