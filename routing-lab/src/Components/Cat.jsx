import React from 'react';
import {Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import CatParams from './CatParams'

class Cat extends React.Component {
    constructor(){
        super();
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        console.log('component mounted')
        this.handleRandomCat()
    }

    handleRandomCat = async () => {
        let url = "https://api.thecatapi.com/v1/images/search"
        let {data} = await axios.get(url)
        console.log(data)
        this.setState({
            url: data[0].url
        })
    }

    renderRandomCat = () => {
        const {url} = this.state
        const {handleRandomCat} = this
        return (
        <>
            <div>
            <h1> Cats </h1>
            <img src={url} alt="cat pic"></img><br></br>
            <button onClick={handleRandomCat}>New Cat</button>
            </div>
        </>
    )
 }


    render(){
        return (
            <div>
            <nav>
            <Link to="/cat/random/:num">Multiple Cats</Link>{" "}
            </nav>
                <Switch>
                 <Route exact path="/cat/random" render={this.renderRandomCat} />
                 <Route path="/cat/random/:num" component={CatParams} />
                </Switch>
            </div>
        )
    }
}

export default Cat;