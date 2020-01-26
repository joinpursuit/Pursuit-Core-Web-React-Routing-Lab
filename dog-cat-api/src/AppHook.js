import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import RandomDogHooks from './Hooks/RandomDogHooks';
import RandomCatHook from './Hooks/RandomCatHook';
import DogsByBreedHooks from './Hooks/DogsByBreedHooks'
import './App.css';

function AppHook () {
 
  return (
      <div className="App">
        <nav>
          <Link to='/'>Welcome</Link> {'  '}
          <Link to='/dog/random'> Random-Dog</Link> {'  '}
          {/* <Link to='/dog/random/:num'> Multiple Dogs</Link> {'  '} */}
          <Link to='/dog/:breed'>Dog-Breed</Link> {'  '}
          
          <Link to='/cat/random'>Random-Cat</Link> {' '}
          {/* <Link to='/cat/random/:num'>Random Cats</Link>{'  '} */}
        </nav>
        
        <Switch>
          {/* <Route exact path="/" component={Welcome}/> */}
          <Route path="/dog/random" component={RandomDogHooks}/>
          {/* <Route path="/dog/random/:num" component={DogsByNumbers}/> */}
          <Route path="/dog/:breed" component={DogsByBreedHooks}/>
          <Route path="/cat/random" component={RandomCatHook}/>
          {/* <Route path="/cat/random/:num" component={CatsByNumber}/>             */} */}
          {/* <Route component={ErrorNotFound}/> */}
        </Switch>

      </div>
    );
} 



export default AppHook;