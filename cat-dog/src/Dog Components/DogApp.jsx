import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import RandomDog from './RandomDog';
import DogHeader from './DogHeader';
import MultiDogHome from './MltiDogHome'

class DogApp extends Component {

    render() {
        return (
            <div className="DogApp">
                <nav>
                    <Link to="/dog/random">Randomizer</Link>{" "}
                    <Link to='/dog/random/multiple'>Multi</Link>
                </nav>

                <Switch>
                    <Route exact path='/dog' render={DogHeader}></Route>
                    <Route exact path="/dog/random" component={RandomDog} />
                    <Route path="/dog/random/multiple" component={MultiDogHome} />

                </Switch>

            </div>
        )
    }
}

export default DogApp;
