import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import RandomCat from './RandomCat';
import DogHeader from '../Dog Components/DogHeader';
import MultiCatHome from './MultiCatHome'

class CatApp extends Component {

    render() {
        return (
            <div className="DogApp">
                <nav>
                    <Link to="/cat/random">Randomizer</Link>{" "}
                    <Link to='/cat/random/multiple'>Multi</Link>{' '}
                </nav>

                <Switch>
                    <Route exact path='/cat' render={DogHeader}></Route>
                    <Route exact path="/cat/random" component={RandomCat} />
                    <Route path="/cat/random/multiple" component={MultiCatHome} />

                </Switch>

            </div>
        )
    }
}

export default CatApp;
