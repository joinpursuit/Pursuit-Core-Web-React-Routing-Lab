import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import BreedSelector from './BreedSelector'

class Breed extends Component {
    constructor() {
        super();
        this.state = {
            breed: ''
        }
    }

    handleBreed = e => {
        this.setState({
            breed: e.target.value
        })
    }


    onSubmit = e => e.preventDefault()

    renderForm = () => {
        let { breed } = this.state
        console.log(this.state);

        return (
            <form onSubmit={this.onSubmit}>
                <br />
                <h1>By Breed</h1>
                <p>Enter the breed of the dog that you want to see</p>
                <input type="text" value={breed} onChange={this.handleBreed} />
                <br />
                <BreedSelector breed={breed} />
            </form>
        )
    }

    render() {
        return (
            <div className="Breed">
                <nav>
                    <Link to='/dog/:breed'></Link>
                </nav>

                <Switch>
                    <Route exact path='/dog/:breed' render={this.renderForm}></Route>
                    <Route path="/dog/breed" render={BreedSelector} />

                </Switch>

            </div>
        )
    }
}

export default Breed;
