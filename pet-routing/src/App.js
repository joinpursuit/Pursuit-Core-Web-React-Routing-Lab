import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import OneDogImage from "./component/RandomDogImage"
import NavBar from './component/NavBar'; 
import MultipleDogImages from "./component/MultipleDogImages";
import RandomBreed from "./component/RandomBreed";
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path={"/dog/random"} component={OneDogImage}/>
      <Route path={"/dog/random/:num"} component={MultipleDogImages}/>
      <Route path={"/dog/:breed"} component={RandomBreed}/>
      <Route component={Error} />
    </Switch>
    </div>
  );
}

export default App;
