/*
Joseph P. Pasaoa
Console Component | Cats & Dogs Fake Server
*/


/* IMPORTS */
    // external
    import React from 'react';
    import { Switch, Route } from 'react-router-dom';

    // local
    import './Console.css';


/* COMPONENT */
const Console = (props) => {
  const imageLabel = 
    <>
      <Route path="/dogs">dog</Route>
      <Route path="/cats">cat</Route>
      <Route path="/all">dog & cat</Route>
    </>
  ;


  return (
    <form onSubmit={props.handleSubmit}>
      <Switch>
        {/* <Route path="/all/random" component={CatsAndDogs} /> */}
        {/* NUMBER */}
        <Route exact path="/*/random">
          <label htmlFor="quantityNum">How many {imageLabel} images would you like (1-10)?</label>
          <input 
            type="number" 
            min="1" 
            max="10" 
            name="quantityNum" 
            id="quantityNum" 
            value={props.quantityNum} 
            onChange={props.handleChange} 
          />
        </Route>
        {/* <Route path="/dogs/:breed" component={Dogs} /> */}
      </Switch>
      <button type="submit" className="btn-get">Get Animals</button>
    </form>
  );
}


/* EXPORT */
export default Console;
