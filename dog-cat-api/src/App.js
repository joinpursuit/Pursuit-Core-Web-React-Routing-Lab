import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import Welcome from './Components/Welcome';
import RandomDog from './Components/RandomDog';
// import DogsByNumbers from './Components/DogsByNumbers';
import DogsByBreed from './Components/DogsByBreed';
import RandomCat from './Components/RandomCat';
import CatsByNumber from './Components/CatsByNumber';
// import ErrorNotFound from './Components/ErrorNotFound';

// import Randomdog from './Components/RandomDogs';
// import './App.css';

function App () {
 
  return (
      <div className="App">
        <nav>
          <Link to='/'>Welcome</Link> {'  '}
          <Link to='/dog/random'> Random Dog</Link> {'  '}
          {/* <Link to='/dog/random/:num'> Multiple Dogs</Link> {'  '} */}
          <Link to='/dog/random/:breed'>Dog Breed</Link> {'  '}
          
          <Link to='/cat/random'>Random Cat</Link> {' '}
          <Link to='/cat/random/:num'>Random Cats</Link>{'  '}
        </nav>
        
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/dog/random" component={RandomDog}/>
          {/* <Route path="/dog/random/:num" component={DogsByNumbers}/> */}
          <Route path="/dog/random/:breed" component={DogsByBreed}/>
          <Route path="/cat/random" component={RandomCat}/>
          <Route path="/cat/random/:num" component={CatsByNumber}/>            
          {/* <Route component={ErrorNotFound}/> */}
        </Switch>

      </div>
    );
} 



export default App;
