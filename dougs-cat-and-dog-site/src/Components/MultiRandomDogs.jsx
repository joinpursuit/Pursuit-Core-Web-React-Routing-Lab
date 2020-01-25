import React, { Component } from 'react'
import axios from 'axios';

class MultiRandomDogs extends Component {
    constructor() {
        super();
        this.state = {
            urls: [],
            dogNum: 1,
        }
    }

    handleNumChange = (e) => {
        this.setState({
            dogNum: Number(e.target.value)
        })
    }

    componentDidMount() {
        this.getDogPictures();
    }

    handleNewDogBtn = () => {
        this.getDogPictures();
    }

    getDogPictures = async () => {
        let dogNum = this.state.dogNum

        let dogAPIURL = `https://dog.ceo/api/breeds/image/random/${dogNum}`

        try {
            const { data } = await axios.get(dogAPIURL)
            console.log(data)
            this.setState({
                urls: data.message,
            })

        } catch (error) {
            console.log('err: ', error)
        }

    }

    render() {
        const dogArr = this.state.urls;
        let dogList = []
        for(let dogURL of dogArr) {
            dogList.push(<img src={dogURL} alt="Good Dog"></img>)
        }
        return (
            <div>
                <h1>Multiple Random Dogs!</h1>
                <input type="number" value={this.state.dogNum} onChange={this.handleNumChange} min="1" max="10"/>
                <button onClick={this.handleNewDogBtn}>GET MORE DOGS!</button>
                {dogList}
            </div>
        )
    }
}

export default MultiRandomDogs