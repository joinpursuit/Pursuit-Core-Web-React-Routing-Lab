import React from 'react';
import './App.css';

import NavBar from "./Components/NavBar"
import MultipleRandomCats from "./Components/MultipleRandomCats";
import MultipleRandomDogs from "./Components/MultipleRandomDogs";
import RandomDog from "./Components/RandomDog";
import RandomCat from "./Components/RandomCat";
import RandomDogByBreed from "./Components/RandomDogByBreed"

import {Route, Switch} from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
    <NavBar></NavBar>
    <Switch>
      <Route path={"/dog/random/:num"} component={MultipleRandomDogs}/>
      <Route path={"/cat/random/:num"} component={MultipleRandomCats}/>
      <Route path={"/cat/random"} component={RandomCat}/>
      <Route path={"/dog/random"} component={RandomDog}/>
      <Route path={"/dog/:breed"} component={RandomDogByBreed}/>
    </Switch>
    </div>
  );
}

export default App;
