import React from 'react';
import Dogs from './Component/RandomDogs'
// import Dog from './Component/Dog'
import NavBar from './Component/NavBar'
import MultipleDogs from './Component/MultipleRandomDogs'
import { Route, Switch } from 'react-router-dom';
// import MultipleDogs from './Component/MultipleRandomDogs';

function App(props) {
  
  return (

    <div className="App">
      <NavBar/>

      <Switch>
        <Route exact path={"/random"}>
          <Dogs/>
        </Route>

        <Route path={"/random/:num"} component={MultipleDogs}/>
    


      </Switch>


    </div>
  );
}

export default App;
