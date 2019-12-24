import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import RandomDog from './Components/RandomDog'
import RandomDogByNum from './Components/RandomDogByNum'
import RandomDogByBreed from './Components/RandomDogByBreed'
import RandomCat from './Components/RandomCat'
import RandomCatByNum from './Components/RandomCatByNum'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>{'  '}
        <Link to='/dog'>Rando Dog </Link>{'  '}
        <Link to='/dog/:num'>Rando Dog By Number</Link>{'  '}
        <Link to= '/dog/breed/:breed'>Rando Dog By Breed</Link>{'  '}
        <Link to='/cat/random'>Rando Cat</Link>{'  '}
        <Link to='/cat/random/:num'>Rando Cat By Number</Link>{'  '}
      </nav>

      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dog' component={RandomDog} />
          <Route exact path='/dog/:num' component={RandomDogByNum} />
          <Route exact path='/dog/breed/:breed' component={RandomDogByBreed} />
          <Route exact path='/cat/random' component={RandomCat} />
          <Route exact path='/cat/random/:num' component={RandomCatByNum} />
      </Switch>
    </div>
  );
}

export default App;
