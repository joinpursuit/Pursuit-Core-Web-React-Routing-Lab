import React from 'react';
import {Route,Switch} from "react-router-dom"
import DogImageRandom from "./Components/DogImageRandom"



function App() {
  return (
    <div className="App">
    <Switch>
        <Route path={"/dog/random"}>
          <DogImageRandom/>
        </Route>


        <Route path="*" render={()=>(<div> No Patch was enter</div>)}/>{/* handle function or error page aka 404 page*/}

    </Switch>
    </div>
  );
}

export default App;
