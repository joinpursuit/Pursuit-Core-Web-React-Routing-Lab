/*
Joseph P. Pasaoa
APP MAIN | Cats and Dogs Fake Server Lab
*/


/* IMPORTS */
    // external
    import React from 'react';

    // local
    import './reset.css';
    import './App.css';
    import Header from './components/Header';
    import NavBar from './components/NavBar';
    import Stage from './components/Stage';


/* COMPONENT */
const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Stage />
    </div>
  );
}


/* EXPORT */
export default App;
