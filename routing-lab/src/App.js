import React from 'react';
import {Link, Switch, Route } from 'react-router-dom';
import randomCatandDog from './Components/randomCatandDog';
import Dog from './Components/Dog';
import DogBreed from './Components/DogBreed';
import DogParams from './Components/DogParams';
import Cat from './Components/Cat';
import CatParams from './Components/CatParams';
import Home from './Components/Home';
import './App.css';
 
// Random dog by breed /dog/:breed 

// Bonus
// Random amounts of both cats and dogs /all/random. random number(between 1 and 10) of each animal 
const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/dog/random">Dog</Link>{" "}
        <Link to="/cat/random">Cat</Link>{" "}
        <Link to="/all/random">Both</Link>{" "}
      </nav>
      <Switch>
        <Route path="/dog/random" component={Dog} />
        <Route path="/dog/:breed" component={DogBreed} />
        <Route path="/dog/random/:num" component={DogParams} />
        <Route path="/cat/random" component={Cat} />
        <Route path="/cat/random/:num" component={CatParams} />
        <Route path="/all/random" component={randomCatandDog} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
