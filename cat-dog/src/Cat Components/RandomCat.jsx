import React, { Component } from 'react';
import axios from 'axios';
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
        this.getCatPicture()
    }

    getCatPicture = async () => {
        let catURL = `https://api.thecatapi.com/v1/images/search`
        // axios request using try, catch and async, await
        try {
            const { data } = await axios.get(catURL)
            console.log(data[0].url)
            this.setState({
                url: data[0].url,
            })

        } catch (error) {
            console.log('err: ', error)
        }

    }
    handleNewCatButton = () => {
        this.getCatPicture()
    }

    render() {
        const { url } = this.state
        return (
            <div className="RandomDog">
                <h1>Random Dog Pictures v1</h1>
                <button onClick={this.handleNewCatButton}>New Dog</button>
                <br />
                <Pet url={url} />

            </div >
        )
    }
}

export default RandomDog;
