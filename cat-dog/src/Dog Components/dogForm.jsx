import React from 'react'
import axios from 'axios'

class DogForm extends React.Component {
    constructor(props) {
        super(props)
        console.log('hjg');

        this.state = {
            breeds: [],
            selectedBreed: '',
            numOfDogs: ''
        }

    }

    componentDidMount() {
        this.getDogBreeds()
    }

    handleBreedChange = (event) => {
        const newBreed = event.target.value
        this.setState({
            selectedBreed: newBreed
        })

        this.props.getDogPicture(newBreed);
    }

    populateSelect = () => {
        const { breeds } = this.state;
        let breedOptions = [];
        breeds.forEach((breed) => {
            breedOptions.push(
                <option key={breed}>{breed}</option>
            )
        })
        return breedOptions;
    }

    resetSelect = (event) => {
        this.setState({
            selectedBreed: '',
            numOfDogs: ''
        })
    }

    getDogBreeds = async () => {
        let dogBreedAPIURL = 'https://dog.ceo/api/breeds/list/all'
        try {
            const response = await axios.get(dogBreedAPIURL)
            const data = response.data
            const allBreeds = Object.keys(data.message)
            console.log("types of dog", allBreeds)

            this.setState({
                breeds: allBreeds
            })

        } catch (error) {
            console.log("Oops All Errors!", error)
        }
    }

    handleNewDogButton = (event) => {
        const { getDogPicture } = this.props;
        const { selectedBreed, numOfDogs } = this.state;
        getDogPicture(selectedBreed, numOfDogs)
    }

    render() {

        console.log('state', this.state);

        return (<>
            <button onClick={this.handleNewDogButton}>New Dog</button>
        </>)
    }
}

export default DogForm