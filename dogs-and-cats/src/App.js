import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch } from "react-router-dom";
import RandomDog from './RandomDog';
import BunchOfDogs from './BunchOfDogs';
import Home from './Home';
import DogBreed from './DogBreed';
import RandomCat from './RandomCat';
import BunchOfCats from './BunchOfCats';

class App extends React.Component {
  constructor() {
    super();
  }

  test = () => {
    console.log('Im running');
  }


  render() {
    return(
    <div>
      <nav>
        <Link to='/dog/random'>Random pupper</Link>
        <Link to='/'>Home </Link>
        <Link to='/dog/random/3'>Bunch o' Doggos</Link>
        <Link to='/dog/hound'>Get Dog by Breed </Link>
        <Link to='/cat/random'>Random kitty</Link>
        <Link to='/cat/random/3'>Bunch o' Kitties</Link>
      </nav>
      <div>
      <Switch>
        <Route path='/dog/random/:num' component={BunchOfDogs} />
        <Route path='/cat/random/:num' component={BunchOfCats} />
        <Route path='/cat/random' component={RandomCat} />
        <Route path='/dog/random' component={RandomDog} />
        <Route path='/dog/:breed' component={DogBreed} />
        <Route path='/' component={Home} />
      </Switch>
      </div>
    </div>
    )
  }



  
}

export default App;
