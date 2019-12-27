/*
Joseph P. Pasaoa
App MAIN | Cats and Dogs Fake Server Lab
*/


/* IMPORTS */
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './App.css';
import LandingStage from './components/LandingStage';
import Dogs from './components/Dogs';
import Cats from './components/Cats';
import CatsAndDogs from './components/CatsAndDogs';
import Catch404 from './components/Catch404';


/* MAIN */
export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Cats & Dogs Fake Server</h1>
        <p>Copyright ©2019 by Joseph P. Pasaoa. All rights reserved.</p>
      </header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dog/random">Single Random Dog</NavLink>
        <NavLink to="/dog/random/4">Multiple Random Dogs</NavLink>
        <NavLink to="/dog/shiba">Single Random Dog by Breed</NavLink>
        <NavLink to="/cat/random">Single Random Cat</NavLink>
        <NavLink to="/cat/random/4">Multiple Random Cats</NavLink>
        <NavLink to="/all/random">Random Mix</NavLink>
          {/* Random dog image  - We've done this one before. Load a random dog image. Include a button that loads a new random image when clicked.
              Multiple random dogs  - This will render the number of random dog images requested for in the num URL parameter. No button required.
              Random dog by breed  - This will render a dog image of the specified breed.
              Random cat image . Load a random cat image. Include a button that loads a new random image when clicked.
              Multiple random cats  - This will render the number of random cat images requested for in the num URL parameter. No button required.
              BONUS Random amounts of both cats and dogs . Load a random number(between 1 and 10) of cats AND dogs. (e.g 4 cats and 5 dogs). 
          */}
      </nav>
      <div id="stage">
        <Switch>
          <Route exact path="/" component={LandingStage} />
          <Route path="/dog/random/:num" component={Dogs} />
          <Route path="/dog/random" component={Dogs} />
          <Route path="/dog/:breed" component={Dogs} />
          <Route path="/cat/random/:num" component={Cats} />
          <Route path="/cat/random" component={Cats} />
          <Route path="/all/random" component={CatsAndDogs} />
          <Route component={Catch404} />
        </Switch>
      </div>
    </div>
  );
}
