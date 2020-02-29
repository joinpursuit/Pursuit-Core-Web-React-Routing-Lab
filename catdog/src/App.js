import React from 'react';
import Dogs from './Component/RandomDogs'
import NavBar from './Component/NavBar'
// import MultipleDogs from './Component/MultipleRandomDogs'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <NavBar />
      <Switch>
      <Route exact to={'dog/random'}>
        <Dogs/>
        </Route>
    

      </Switch>
    </div>
  );
}

export default App;
