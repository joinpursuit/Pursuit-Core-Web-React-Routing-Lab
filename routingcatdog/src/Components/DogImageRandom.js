

import React, { Component } from 'react'
import axios from "axios"


export class DogImageRandom extends Component {
    state={
        imgLink:null
    }

    async handleRandomDogBtn(){
        // debugger
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")
        try {
            this.setState(
                {imgLink:res.data.message}
                )
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount(){
        this.handleRandomDogBtn()
    }

    render() {
        return (
            <div>
                <h1>Random Dog is here</h1>
                <br></br>
                <button onClick={this.handleRandomDogBtn.bind(this)}>new random dog</button>
                <br></br>
                <img src={this.state.imgLink} alt="dog"></img>
            </div>
        )
    }
}

export default DogImageRandom
