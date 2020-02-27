import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import NavBar from './NavBar';
import RandDogImg from './Component/RandDogImg'
import MultDogs from './Component/MultDogs';

function App() {
  return (
    <div className="App">
      Cat/Dog API
      <NavBar/>
      <Route path={'/dog'} component = {RandDogImg}/>
      <Route path={'/dog/random/:num'} component = {MultDogs}/>
     

    </div>
  );
}

export default App;
