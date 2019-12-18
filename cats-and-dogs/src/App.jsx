import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Dog from "./Components/Dog";
import Cat from "./Components/Cat";
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/dog" component={Dog} />
        <Route exact path="/dog/random" component={Dog} />
        <Route path="/dog/random/:num" component={Dog} />
        <Route path="/dog/:breed/:num" component={Dog} />
        <Route path="/dog/:breed" component={Dog} />

        <Route path="/cat" component={Cat} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
