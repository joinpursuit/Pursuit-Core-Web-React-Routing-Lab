import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import RandomCat from './RandomCat';
import DogHeader from '../Dog Components/DogHeader';
// import MultiDogHome from './MltiDogHome'
// import Breed from './BreedHome';

class CatApp extends Component {

    render() {
        return (
            <div className="DogApp">
                <nav>
                    <Link to="/Cat/random">Randomizer</Link>{" "}
                </nav>

                <Switch>
                    <Route exact path='/cat' render={DogHeader}></Route>
                    <Route exact path="/cat/random" component={RandomCat} />
                </Switch>

            </div>
        )
    }
}

export default CatApp;
