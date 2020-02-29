import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import './css/app.css'

import MultipleRandomCats from './components/MultipleRandomCats';
import MultipleRandomDogs from './components/MultipleRandomDogs';
// import RandomDogByBreed from './components/RandomDogByBreed';
import RandomCatImage from './components/RandomCatImage';
import RandomDog from './components/RandomDog';
import NavBar from './components/NavBar';
import GetDog from './components/GetDog';

class App extends Component {
  render(){
    return (
      <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path={"/dog/random"} component={RandomDog}/>
      <Route path={"/dog/random/:num"} component={MultipleRandomDogs}/>
      <Route exact path={"/cat/random/"} component={RandomCatImage}/>
      <Route path={"/cat/random/:num"} component={MultipleRandomCats}/>
      <Route path={"/dog/:breed"}><GetDog/></Route>
      </Switch>
      </div>
    );
  }
}

export default App;
