import React from 'react';
import Dogs from './Component/RandomDogs'
import MultipleDogs from './Component/MultipleRandomDogs'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <Switch>
      <Route path={'/dog/random/:num'}>
      <MultipleDogs />
      </Route>

      <Route path={'/dog/random'}>
      <Dogs />
      </Route>


      </Switch>
    </div>
  );
}

export default App;
