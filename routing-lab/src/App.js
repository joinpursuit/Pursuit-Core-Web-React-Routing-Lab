import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import NavBar from './NavBar';
import RandDogImg from './Component/RandDogImg'
import MultDogs from './Component/MultDogs';
import RandCat from './Component/RandCat'
import MultCats from './Component/MultCats'
import RandDogBreed from './Component/RandDogBreed'
function App() {
  return (
    <div className="App">
      Cat/Dog API
      <NavBar/>
     

      <Route path={'/dog'} component = {RandDogImg}/>
      <Route path={'/dog/random/:num'} component = {MultDogs}/>
      <Route path={'/cat'} component = {RandCat}/>
      <Route path={'/cat/random/:num'} component ={MultCats}/>
      <Route path ={'/dog/:breed'} component={RandDogBreed}/>

    </div>
  );
}

export default App;
