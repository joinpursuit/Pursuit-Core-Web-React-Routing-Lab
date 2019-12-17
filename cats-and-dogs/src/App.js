import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch} from 'react-router-dom'
import RandomDog from './Components/RandomDog'
import RandomDogs from './Components/RandomDogs'
import RandomDogByBreed from './Components/RandomDogByBreed'
import RandomCat from './Components/RandomCat'
import RandomCats from './Components/RandomCats'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/dog/random'>Random dog image</Link>{' '}
        <Link to='/dog/random/3'>Multiple random dogs</Link>{' '}
        <Link to='/dog/husky'>Random dog by breed</Link>{' '}
        <Link to='/cat/random/'>Random cat image</Link>{' '}
        <Link to='/cat/random/3'>Multiple random cats</Link>
      </nav>
        <Switch>
          <Route exact path='/dog/random' component={RandomDog}/>
          <Route path='/dog/random/:num' component={RandomDogs}/>
          <Route path='/dog/:breed' component={RandomDogByBreed}/>
          <Route exact path='/cat/random' component={RandomCat}/>
          <Route path='/cat/random/:num' component={RandomCats}/>
        </Switch>
    </div>
  );
}

export default App;
