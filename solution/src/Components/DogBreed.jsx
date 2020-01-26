import React, { Component } from 'react';
import axios from 'axios';

class DogBreed extends Component {
    constructor(props) {
        super();
        this.state = {
            dogBreed: props.match.params.breed,
            url: ""
        }
    }
    componentDidMount() {
        console.log("component mounted");
        this.getDogBreeds();
    }
    getDogBreeds = async () => {
        const { dogBreed } = this.state;
        let dogBreedAPIURL = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
        try {
            let response = await axios.get(dogBreedAPIURL)
            this.setState({
                url: response.data.message,
            })
        }
        catch (error) {
            console.log("No doggos!")
        }
    }
    render() {
        const { dogBreed, url} = this.state;
        return (
            <div>
                <h1>Dawgz</h1>
                <div className="imageContainer">
                    <img src={url} alt={dogBreed}/><br/>
                    <button onClick={this.getDogBreeds}>New Dog!</button>
                </div>
            </div>
        )
    }
}

export default DogBreed;