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

  return (
    <form onSubmit={props.handleSubmit}>
      <button type="submit" className="btn-get">Get Animals</button>
      <Switch>
        {/* <Route path="/all/random" component={CatsAndDogs} /> */}
        {/* NUMBER */}
        <Route exact path="/*/random/*">
          <label htmlFor="quantityNum">How many images would you like (1-10)?</label>
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
    </form>
  );
}


/* EXPORT */
export default Console;
