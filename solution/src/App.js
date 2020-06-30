import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import Dog from './Components/Dog';
import DogBreed from './Components/DogBreed';
import DogNumber from './Components/DogNumber';
import Cat from './Components/Cat';
import CatNumber from './Components/CatNumber'



const App = () => {
  return (
    <div className="App">
      <nav className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: '#e3f2fd' }}>
        <Link to="/" className='nav-item nav-link'>Home</Link> {" "}
        <Link to="/dog/random" className='nav-item nav-link'>Dog</Link>{" "}
        <Link to="/cat/random" className='nav-item nav-link'>Cat</Link> {" "}
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dog/random" component={Dog} />
        <Route path="/dog/random/:num" component={DogNumber} />
        <Route path="/dog/:breed" component={DogBreed} />
        <Route exact path="/cat/random" component={Cat} />
        <Route path="/cat/random/:num" component={CatNumber} />
      </Switch>
    </div>
  )
}

export default App;
