import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { render } from '@testing-library/react';

class RadndomDog extends Component {
    constructor() {
        super();
        this.initialState = {
            urls: [],
            picturesLoading: true
        }
        this.state = this.initialState
    }

    componentDidMount() {
        this.getDogPicture();
    }

    getDogPicture = () => {

        this.setState({
            picturesLoading: true
        })
        let dogAPIURL = `https://dog.ceo/api/breeds/image/random`;

        axios
            .get(dogAPIURL)
            .then(({ data }) => {
                console.log(data.message)

                this.setState({
                    urls: data.message,
                    picturesLoading: false
                })
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    render() {
        const { urls, picturesLoading } = this.state

        return (
            <div className="App">
                <h1>Random Dog Pictures</h1>
                <img src={urls}></img>
                <br />
            </div>
        )
    }
}
export default RadndomDog;