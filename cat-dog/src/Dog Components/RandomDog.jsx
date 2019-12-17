import React, { Component } from 'react';
import axios from 'axios';
// import Selector from './Selector';
import Pet from '../Utilities/Display';
import DogForm from './dogForm';


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

    getDogPicture = async (selectedBreed, numOfDogs) => {
        // const { selectedBreed } = this.state
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

    render() {
        const { url } = this.state
        return (
            <div className="RandomDog">
                <h1>Random Dog Pictures v1</h1>
                <DogForm
                    getDogPicture={this.getDogPicture}
                />
                <br />
                <Pet url={url} />

            </div>
        )
    }
}

export default RandomDog;
