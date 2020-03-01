import React from 'react';
import {Route,Switch} from "react-router-dom"
import DogImageRandom from "./Components/DogImageRandom"
import DogsRandom from "./Components/DogsRandom"
import NavBar from './Components/NavBar';


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


        <Route path="*" render={()=>(<div> No Patch was enter</div>)}/>{/* handle function or error page aka 404 page*/}

    </Switch>
    </div>
  );
}

export default App;
