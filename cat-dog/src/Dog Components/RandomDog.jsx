import React, { Component } from 'react';
import axios from 'axios';
// import Selector from './Selector';
import Pet from '../Utilities/Display';


class RandomDog extends Component {
    constructor() {
        super();
        this.state = {
            url: '',
            num: 0
        }
        this.breeds = [];
    }

    // Loads an image when the component mounts
    componentDidMount() {
        this.getDogPicture()
    }

    getDogPicture = async () => {
        let dogURL = "https://dog.ceo/api/breeds/image/random"
        // axios request using try, catch and async, await
        try {
            const { data } = await axios.get(dogURL)
            console.log(data)
            this.setState({
                url: data.message,
            })

        } catch (error) {
            console.log('err: ', error)
        }

    }
    handleNewDogButton = (event) => {
        this.getDogPicture()
    }

    render() {
        const { url } = this.state
        return (
            <div className="RandomDog">
                <h1>Random Dog Pictures v1</h1>
                <button onClick={this.handleNewDogButton}>New Dog</button>
                <br />
                <Pet url={url} />

            </div >
        )
    }
}

export default RandomDog;
