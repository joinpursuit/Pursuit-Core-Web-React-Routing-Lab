/*
Joseph P. Pasaoa
APP MAIN | Cats and Dogs Fake Server Lab
*/


/* IMPORTS */
    // external
    import React from 'react';
    import { Switch, Route } from 'react-router-dom';

    // local
    import './reset.css';
    import './App.css';

    import Header from './components/Header';
    import NavBar from './components/NavBar';
    import OneRandomDog from './pages/OneRandomDog';
    import OneRandomCat from './pages/OneRandomCat';
    import NotFound404 from './pages/NotFound404';


/* COMPONENT */
const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="stage">
        <Switch>
          {/* LANDING */}
          <Route exact path="/" render={() => {
                return (
                  <div> 
                    Welcome to Joseph's Dogs and Cats Image Finder. Instructions here to come.
                  </div>
                );
          }} />

          {/* THE REST */}
          {/* <Route path="/dogs/random/:num" component={RandomDogs} /> */}
          <Route path="/dogs/random" component={OneRandomDog} />
          {/* <Route path="/dogs/:breed" component={BreedDogs} /> */}
          {/* <Route path="/cats/random/:num" component={RandomCats} /> */}
          <Route path="/cats/random" component={OneRandomCat} />
          {/* <Route path="/all/random" component={RandomDogsAndCats} /> */}
          <Route render={NotFound404} />
        </Switch>
      </div>
    </div>
  );
}


/* EXPORT */
export default App;
