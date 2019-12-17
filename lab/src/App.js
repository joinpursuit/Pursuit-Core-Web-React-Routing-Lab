import React from 'react';
import './App.css';


import { Link, Route, Switch } from 'react-router-dom'


import RandomDog from "./Components/RandomDog"
import NumberOfDogs from "./Components/NumberOfDogs"
import DogBreed from "./Components/DogBreed"
import RandomCat from "./Components/RandomCat"
import NumberOfCats from "./Components/NumberOfCats"
import Home from "./Components/Home"


function App() {
  return (
    <div className="App">

      <h2>Get some cats and dogs!</h2>

    <nav>
      <Link to="/">Home</Link> {"  "}
    </nav>
    <nav>
      <Link to="dog/random">Random Dog</Link> {"  "}
      <Link to="dog/random/:num">Number Of Dogs</Link> {"  "}
      <Link to="dog/:breed">Dog By Breed</Link> {"  "}
    </nav>
    <nav>
      <Link to="/cat/random">Random Cat</Link> {"  "}
      <Link to="/cat/random/:num">Number Of Cats</Link> {"  "}
    </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dog/random" component={RandomDog} />
        <Route path="/dog/random/:num" component={NumberOfDogs} />
        <Route path="dog//:breed" component={DogBreed} />
        <Route exact path="/cat/random" component={RandomCat} />
        <Route path="/cat/random/:num" component={NumberOfCats} />
      </Switch>



    </div>
  );
}

export default App;
