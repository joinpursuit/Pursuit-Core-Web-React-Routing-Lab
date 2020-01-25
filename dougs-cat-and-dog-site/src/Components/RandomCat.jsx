import React, { Component } from 'react'
import axios from 'axios'

class RandomCat extends Component {
    constructor() {
        super();
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        this.getCatPictures()
    }

    getCatPictures = async () => {
        let catAPIURL = `https://api.thecatapi.com/v1/images/search`

        try {
            const { data } = await axios.get(catAPIURL)
            console.log(data)
            this.setState({
                url: data[0].url,
            })

        } catch (error) {
            console.log('err: ', error)
        }

    }

    render() {
        const { url } = this.state
        return (
            <div>
                <h1>Random Cat!</h1>
                <img src={url} alt="Pawesome cat"></img>
            </div>
        )
    }
}

export default RandomCat