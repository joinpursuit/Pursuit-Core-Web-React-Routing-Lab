import React, { Component } from 'react'
import axios from 'axios'

class RandomDog extends Component {
    constructor() {
        super();
        this.state = {
            url: ""
        }
    }


    getDogPictures = async () => {
        let dogAPIURL = `https://dog.ceo/api/breeds/image/random`

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
        this.getDogPictures();
    }

    componentDidMount() {
        this.getDogPictures();
    }

    render() {
        const { url } = this.state;

        return (
            <div>
                <h1>One Random Dog!</h1>
                <img src={url} alt="Good Dog"></img>
            </div>
        )
    }
}

export default RandomDog