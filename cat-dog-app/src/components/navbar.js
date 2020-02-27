import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to={'/'}>HOME</NavLink>
      <NavLink to={'/dog/random'}>Random Dogs</NavLink>
      <NavLink to={'/cat/random'}>Random Cats</NavLink>
      <NavLink to={'/dog/random/:num'}>Random Cats</NavLink>


    </nav>
  )
}

export default NavBar
