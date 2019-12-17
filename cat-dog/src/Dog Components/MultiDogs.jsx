import React, { Component } from 'react';
import axios from 'axios';
import Pet from '../Utilities/Display';


class MultiDogs extends Component {
    constructor() {
        super();
        this.state = {
            url: '',
            num: 0
        }
    }

    handleNum = e => {
        this.setState({
            num: e.target.value
        })
    }

    getMultiDogPicture = async (num) => {
        let dogURL = `https://dog.ceo/api/breeds/image/random/${Number(num)}`

        // axios request using try, catch and async, await
        try {
            const { data } = await axios.get(dogURL)
            console.log(data)
            this.setState({
                url: data.message,
            })

        } catch (error) {
            console.log('err: ', error)
        }

    }

    handleNewDogButton = e => {
        const { num } = this.state;
        this.getMultiDogPicture(num)
    }

    render() {
        console.log(this.state);

        const { url, num } = this.state
        return (
            <div className="MultiDogs">
                <h1>Multi Dog Pictures v1</h1>
                <input type="number" min='1' max='15' value={num} onChange={this.handleNum} />
                <button onClick={this.handleNewDogButton}>New Dog</button>
                <br />
                <Pet url={url} />

            </div>
        )
    }
}

export default MultiDogs;
