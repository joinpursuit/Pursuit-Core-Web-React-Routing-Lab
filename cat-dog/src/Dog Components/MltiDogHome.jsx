import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import MultiDogs from './MultiDogs'

class MultiDogHome extends Component {
    constructor() {
        super();
        this.state = {
            num: 0
        }
    }

    handleNum = e => {
        e.preventDefault()
        this.setState({
            num: e.target.value
        })
    }


    onSubmit = e => e.preventDefault()

    renderForm = () => {
        let { num } = this.state
        console.log(this.state);

        return (
            <form onSubmit={this.onSubmit}>
                <input type="number" min='1' max='15' value={num} onChange={this.handleNum} />
                <MultiDogs num={num} />
            </form>
        )
    }

    render() {
        return (
            <div className="MultiDogHome">
                <nav>
                    <Link to='/dog/random/:num'></Link>
                </nav>

                <Switch>
                    <Route exact path='/dog/random/multiple' render={this.renderForm}></Route>
                    <Route path="/dog/random/:num" render={MultiDogs} />

                </Switch>

            </div>
        )
    }
}

export default MultiDogHome;
