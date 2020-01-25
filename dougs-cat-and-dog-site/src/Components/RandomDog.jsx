import React, { Component } from 'react'
import axios from 'axios'

class RandomDog extends Component {
    constructor() {
        super();
        this.state = {
            urls: []
        }
    }


    getDogPictures = async () => {
        let dogNum = this.props.match.params.num

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

    handleNewDogBtn = () => {
        this.getDogPictures();
    }

    componentDidMount() {
        this.getDogPictures();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.num !== this.props.match.params.num) {
            this.getDogPictures();
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
                <h1>One Random Dog!</h1>
                {dogList}
            </div>
        )
    }
}

export default RandomDog