import React from 'react';
import NavBar from './components/NavBar';
import Dog from './components/Dog';
import Cat from './components/Cat';
import RandomDogByBreed from './components/MultipleRandomDogs';
import MultipleRandomDogs from './components/MultipleRandomDogs';
import MultipleRandomCat from './components/MultipleRandomCats';

import { Route } from 'react-router-dom'


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path={'/dog/random'} component={Dog}/>
      <Route path={'/cat/random'} component={Cat}/>
      <Route path={'/dog/random/:num'} component={MultipleRandomDogs}/>
      <Route path={'/cat/random/:num'} component={MultipleRandomCat}/>
      <Route path={'/dog/:breed'} component={RandomDogByBreed}/>

      
    </div>
  );
}

export default App;
