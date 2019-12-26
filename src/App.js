import React from 'react';
import { NavLink, Link, Route, Switch } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Cats & Dogs Server</h1>
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
          <Route exact path="/" component={StageHome} />
          <Route path="/dog/random" component={DogsOpen} />
          <Route path="/dog/random/:num" component={DogsOpen} />
          <Route path="/dog/:breed" component={DogsBreed} />
          <Route path="/cat/random" component={CatsOpen} />
          <Route path="/cat/random/:num" component={CatsOpen} />
          <Route path="/all/random" component={MixOpen} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
