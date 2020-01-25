import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './Components/Home'
import FeelingLucky from './Components/FeelingLucky'
import RandomDog from './Components/RandomDog'
import RandomCat from './Components/RandomCat'
import MultiRandomDogs from './Components/MultiRandomDogs'
import MultiRandomCats from './Components/MultiRandomCats'
import RandomDogBreed from './Components/RandomDogBreed'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">HOME</Link>{" "}
        <Link to="/dog/random">ONE RANDOM DOG</Link>{" "}
        <Link to="/dog/random/:num">MULTIPLE RANDOM DOGS</Link>{" "}
        <Link to="/dog/breed">RANDOM DOG BY BREED</Link>{" "}
        <Link to="/cat/random">RANDOM CAT</Link>{" "}
        <Link to="/cat/random/:num">MULTIPLE RANDOM CATS</Link>{" "}
        <Link to="/all/random">FEELING LUCKY?</Link>{" "}
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dog/random/:num" component={MultiRandomDogs} />
        <Route path="/dog/random" component={RandomDog} />
        <Route path="/dog/breed" component={RandomDogBreed} />
        <Route path="/cat/random/:num" component={MultiRandomCats} />
        <Route path="/cat/random" component={RandomCat} />
        <Route path="/all/random" component={FeelingLucky} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
