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

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dogs/random">Single Random Dog</NavLink>
      <NavLink to="/dogs/random/4">Multiple Random Dogs</NavLink>
      <NavLink to="/dogs/breed">Single Random Dog by Breed</NavLink>
      <NavLink to="/cats/random">Single Random Cat</NavLink>
      <NavLink to="/cats/random/4">Multiple Random Cats</NavLink>
      <NavLink to="/all/random">Random Mix</NavLink>
        {/* Random dog image  - We've done this one before. Load a random dog image. Include a button that loads a new random image when clicked.
            Multiple random dogs  - This will render the number of random dog images requested for in the num URL parameter. No button required.
            Random dog by breed  - This will render a dog image of the specified breed.
            Random cat image . Load a random cat image. Include a button that loads a new random image when clicked.
            Multiple random cats  - This will render the number of random cat images requested for in the num URL parameter. No button required.
            BONUS Random amounts of both cats and dogs . Load a random number(between 1 and 10) of cats AND dogs. (e.g 4 cats and 5 dogs). 
        */}
    </nav>
  );
}


/* EXPORT */
export default NavBar;
