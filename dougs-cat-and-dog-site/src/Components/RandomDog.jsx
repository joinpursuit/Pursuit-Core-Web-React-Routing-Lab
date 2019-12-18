import React, { Component } from 'react'
import axios from 'axios'

class RandomDog extends Component {
    constructor() {
        super();
        this.state = {
            url: ""
        }
    }


    getDogPicture = async () => {

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
        this.getDogPicture();
    }

    componentDidMount() {
        this.getDogPicture();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.prams.num !== this.props.match.params.num) {
            this.getDogPicture();
        }
    }

    render() {
        return (
            <div>
                <h1>One Random Dog!</h1>
                <div>
                    <button onClick={this.handleNewDogBtn}>NEW DOG!</button>
                </div>
                <img src={this.state.url} alt="Good Dog"></img>
            </div>
        )
    }
}

export default RandomDog