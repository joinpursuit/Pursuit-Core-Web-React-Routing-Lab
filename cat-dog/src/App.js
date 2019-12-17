import React, { Component } from 'react';
// import Selector from './Selector';
import './App.css';
import DogApp from './Dog Components/DogApp'
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home'


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Are you a cat person or a dog person?</h1>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/dog">Dog</Link>{" "}
          <Link to="/cat">Cat</Link>{" "}
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dog" component={DogApp} />
        </Switch>
      </div>
    )
  }
}

export default App;
