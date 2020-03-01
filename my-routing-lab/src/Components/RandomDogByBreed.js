import React, {Component} from 'react';
import axios from 'axios';
import Image from './Image'

class RandomDogByBreed extends Component {
    constructor (props){
        super (props)
        this.state = {
            image: "",
            breed: this.props.match.params.breed
        }
    }

    componentDidMount () {
        this.getBreedImage(this.state.breed)
    }

    getBreedImage = async (breed) => {
        try {
            const breedURL = (`https://dog.ceo/api/breed/${breed}/images/random`)
            let res = await axios.get(breedURL)
            debugger
            this.setState({image: res.data.message})
        } catch (error) {
            this.setState({image: ""})
            }
    }
    render() {
        const {image} = this.state

        return (
            <div>
                <Image image={image} />
            </div>
        )
    }


}

export default RandomDogByBreed
