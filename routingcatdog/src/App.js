import React from 'react';
import {Route,Switch} from "react-router-dom"
import NavBar from './Components/NavBar';
import DogImageRandom from "./Components/DogImageRandom"
import DogsRandom from "./Components/DogsRandom"
import DogByBreed from "./Components/DogByBreed"
import CatRandom from "./Components/CatRandom"
import CatsRandom from "./Components/CatsImageRandom"


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>
        <Route exact path={"/dog/random"}>
          <DogImageRandom/>
        </Route>
        
        <Route path={"/dog/random/:number"}>
          <DogsRandom/>
        </Route>
        <Route path={"/dog/:breed"}>
          <DogByBreed/>
        </Route>
        <Route exact path={"/cat/random"}>
          <CatRandom/>
        </Route>
        <Route exact path={"/cat/random/:number"}>
          <CatsRandom />
        </Route>


        <Route path="*" render={()=>(<div> No Patch was enter</div>)}/>{/* handle function or error page aka 404 page*/}

    </Switch>
    </div>
  );
}

export default App;
