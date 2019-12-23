import React from 'react';
import {Link, Switch, Route } from 'react-router-dom';
//import axios from 'axios';

import Dog from './Components/Dog'
import Cat from './Components/Cat'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/dog">Dog</Link>{" "}
        <Link to="/cat">Cat</Link>{" "}
      </nav>
      <Switch>
        <Route path="/dog" component={Dog} />
        <Route path="/cat" component={Cat} />
      </Switch>
    </div>
  );
}

export default App;
