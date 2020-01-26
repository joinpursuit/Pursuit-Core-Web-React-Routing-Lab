import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import Dog from './Components/Dog';
import DogBreed from './Components/DogBreed';
import DogNumber from './Components/DogNumber';
import Cat from './Components/Cat';



const App = () => {
  return (
  <div className = "App">
    <nav>
      <Link to = "/">Home</Link> {" "}
      <Link to = "/dog/random">Dog</Link>{" "}
      <Link to = "/cat/random">Cat</Link> {" "}
    </nav>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/dog/random" component={Dog}/>
        <Route path="/dog/random/:num" component={DogNumber} />
        <Route path="/dog/:breed" component={DogBreed} />
      <Route  path="/cat/random" component={Cat}/>
        {/* <Route path="/cat/:num" component={CatNumber} /> */}
    </Switch>
  </div>
  )
}

export default App;
