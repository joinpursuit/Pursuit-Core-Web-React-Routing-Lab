import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import NavBar from './NavBar';
import RandDogImg from './Component/RandDogImg'

function App() {
  return (
    <div className="App">
      Cat/Dog API
      <NavBar/>
      <Route path={'/dog'} component = {RandDogImg}/>
     

    </div>
  );
}

export default App;
