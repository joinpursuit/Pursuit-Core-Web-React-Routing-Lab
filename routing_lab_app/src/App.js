import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import RandomDog from "./components/RandomDog";
import MultipleRandomDogs from "./components/MultipleRandomDogs";
import RandomDogByBreed from "./components/RandomDogByBreed";
import RandomCat from "./components/RandomCat";
import MultipleRandomCats from "./components/MultipleRandomCats";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={"/dog/random"}>
          <RandomDog />
        </Route>

        <Route path={"/dog/random/:num"}>
          <MultipleRandomDogs />
        </Route>

        <Route path={"/dog/:breed"}>
          <RandomDogByBreed />
        </Route>

        <Route exact path={"/cat/random"}>
          <RandomCat />
        </Route>

        <Route path={"/cat/random/:num"}>
          <MultipleRandomCats />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
