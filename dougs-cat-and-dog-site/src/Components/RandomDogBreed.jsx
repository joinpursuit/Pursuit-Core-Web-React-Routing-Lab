import React, { Component } from 'react'
import axios from 'axios'

class RandomDogBreed extends Component {
    constructor() {
        super();
        this.state = {
            url: "",
            breeds: [],
            selectedBreed: ""
        }
    }

    getDogBreeds = async () => {
        let dogBreedAPIURL = 'https://dog.ceo/api/breeds/list/all'
        try {
            const response = await axios.get(dogBreedAPIURL)
            const data = response.data
            const allBreeds = Object.keys(data.message)

            this.setState({
                breeds: allBreeds
            })

        } catch (error) {
            console.log("Oops All Errors!", error)
        }
    }

    populateSelect = () => {
        const { breeds } = this.state;
        let breedOptions = [];
        breeds.forEach((breed) => {
            breedOptions.push(
                <option value={breed}>{breed}</option>
            )
        })
        return breedOptions;
    }

    handleBreedChange = (event) => {
        const newBreed = event.target.value
        this.setState({
          selectedBreed: newBreed
        })
    
        this.getDogPicture(newBreed);
    }

    getDogPicture = async (newBreed) => {

        let dogAPIURL = "https://dog.ceo/api/breeds/image/random"

        try {
            const { data } = await axios.get(dogAPIURL)
            console.log(data)
            this.setState({
                url: data.message,
            })

        } catch (error) {
            console.log('err: ', error)
        }

    }

    handleNewDogBtn = () => {
        this.getDogPicture()
    }

    componentDidMount() {
        this.getDogPicture();
    }

    render() {
        const { breeds, selectedBreed } = this.state;
        
        return (
            <div>
                <h1>Random Dog By Breed!</h1>
                <select onChange={this.handleBreedChange} value={selectedBreed}>
                    <option value="">SELECT A BREED</option>
                    {
                        this.populateSelect()
                    }
                </select>
            </div>
        )
    }
}

export default RandomDogBreed