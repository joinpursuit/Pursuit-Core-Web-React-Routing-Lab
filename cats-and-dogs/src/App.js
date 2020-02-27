import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import MultipleRandomCats from './components/MultipleRandomCats';
import MultipleRandomDogs from './components/MultipleRandomDogs';
import RandomDogByBreed from './components/RandomDogByBreed';
import RandomCatImage from './components/RandomCatImage';
import RandomDog from './components/RandomDog';
import NavBar from './components/NavBar';

class App extends Component {
  render(){
    return (
      <div className="App">
      <NavBar/>
      <Switch>
      <Route path={"/dog/random"} component={RandomDog}/>
      <Route path={"/dog/random/:num"} component={MultipleRandomDogs}/>
      <Route path={"/cat/random/"} component={RandomCatImage}/>
      <Route path={"/cat/random/:num"} component={MultipleRandomCats}/>
      <Route path={"/dog/:breed"} component={RandomDogByBreed}/>
      </Switch>
      </div>
    );
  }
}

export default App;
