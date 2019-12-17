import React, { Component } from 'react';
import axios from 'axios';
// import Selector from './Selector';
import './BreedSelector.css';
import DogForm from './dogForm'
import Pet from '../Utilities/Display';


class BreedSelector extends Component {
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



    getDogPicture = async (selectedBreed) => {
        let dogURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random`

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
            <div className="BreedSelector">
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

export default BreedSelector;
