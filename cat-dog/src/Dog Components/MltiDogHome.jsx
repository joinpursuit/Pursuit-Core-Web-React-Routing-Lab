import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import DogHeader from './DogHeader';
import MultiDog from './MultiDogs'

class MultiDogHome extends Component {

    render() {
        return (
            <div className="MultiDogHome">
                <nav>
                    <Link to='/dog/random/:num'></Link>
                </nav>

                <Switch>
                    <Route exact path='/dog/random/multiple' render={DogHeader}></Route>
                    <Route path="/dog/random/:num" component={MultiDog} />

                </Switch>

            </div>
        )
    }
}

export default MultiDogHome;
