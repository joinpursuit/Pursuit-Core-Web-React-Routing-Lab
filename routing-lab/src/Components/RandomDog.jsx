import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class RadndomDog extends Component {
    constructor() {
        super();
        this.initialState = {
            url: []
        }
        this.state = this.initialState
    }

    componentDidMount() {
        this.getDogPicture();
    }

    handleNewDogButton = () => {
        this.getDogPicture();
    }

    getDogPicture = () => {

        let dogAPIURL = `https://dog.ceo/api/breeds/image/random`;

        axios
            .get(dogAPIURL)
            .then(({ data }) => {
                console.log(data.message)

                this.setState({
                    url: data.message,
                })
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    render() {
        const { url } = this.state

        return (
            <div className="App">
                <h1>Random Dog Pictures</h1>

                <br />

                <button onClick={this.handleNewDogButton}>New Dog</button>

                <br />
                <br />

                <img src={url} alt="RandomDog"></img>

            </div>
        )
    }
}
export default RadndomDog;