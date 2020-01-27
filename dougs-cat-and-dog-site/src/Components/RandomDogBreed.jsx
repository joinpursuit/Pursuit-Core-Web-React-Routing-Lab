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

        let dogAPIURL =`https://dog.ceo/api/breed/${newBreed}/images/random`

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
        this.getDogBreeds();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.num !== this.props.match.params.num) {
            this.getDogPictures();
        }
    }

    render() {
        const { url, selectedBreed } = this.state;
        let displayDog
        if (selectedBreed !== '') {
            displayDog = <img src={url} alt="Good Dog"></img>
        } 
        return (
            <div>
                <h1>Random Dog By Breed!</h1>
                <select onChange={this.handleBreedChange} value={selectedBreed}>
                    <option value="">SELECT A BREED</option>
                    {
                        this.populateSelect()
                    }
                </select>
                {displayDog}
            </div>
        )
    }
}

export default RandomDogBreed