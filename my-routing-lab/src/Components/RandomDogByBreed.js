import React, {Component} from 'react';
import axios from 'axios';
import Dog from './Dog'

class RandomDogByBreed extends Component {
    state = {
        dogPics: [],
        numberOfDogs: 0
    }

    componentDidUpdate(prevProps) { //prevProps is a given object by previous state
        const oldBreed = prevProps.breed
        const newBreed = this.props.breed
        const numberOfDogs = this.state.numberOfDogs
        if(oldBreed !== newBreed) {
            this.getDogPics(newBreed, numberOfDogs) //fires when breed prop is changedc
        }
    }
    //if props or state is changed - use compDidUp (here breed is being changed to change pics), componentDidMount only happens once.

    getDogPics = async (breed, numberOfDogs) => {
        try {
            const breedURL = (`https://dog.ceo/api/breed/${breed}/images/random/${numberOfDogs}`)
            let res = await axios.get(breedURL)
            this.setState({dogPics: res.data.message})
        } catch (error) {
            this.setState({dogPics: []})
            }
    }
    render() {

        let dogs = this.state.dogPics.map(dog => {
            return <Dog image={dog} />
        })

        return (
            <div>
                {dogs}
            </div>
        )
    }


}

export default RandomDogByBreed
