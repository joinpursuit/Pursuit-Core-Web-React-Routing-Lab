import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import MultiCat from './MultiCat'

class MultiCatHome extends Component {
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
                <br />
                <h1>Multi Dog Pictures v1</h1>
                <p>How many cats should load</p>
                <input type="number" min='1' max='15' value={num} onChange={this.handleNum} />
                <MultiCat num={num} />
            </form>
        )
    }

    render() {
        return (
            <div className="MultiCatHome">
                <nav>
                    <Link to='/cat/random/:num'></Link>
                </nav>

                <Switch>
                    <Route exact path='/cat/random/multiple' render={this.renderForm}></Route>
                    <Route path="/cat/random/:num" render={MultiCatHome} />

                </Switch>

            </div>
        )
    }
}

export default MultiCatHome;
