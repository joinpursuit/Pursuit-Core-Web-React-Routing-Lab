import React, { Component } from 'react';
import axios from 'axios';
import Pet from '../Utilities/Display';


class BreedSelector extends Component {
    constructor() {
        super();
        this.state = {
            url: []
        }
    }


    getBreedPictures = async (selectedBreed) => {
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

    componentDidUpdate(prevProps) {
        if (this.props.breed !== prevProps.breed) {
            this.getBreedPictures(this.props.breed)

        }
    }

    render() {

        const { url } = this.state
        console.log(this.state);

        return (
            <div className="BreedSelector">

                <Pet key={url} url={url} />
            </div>
        )
    }
}

export default BreedSelector;
