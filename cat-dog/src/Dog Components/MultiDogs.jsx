import React, { Component } from 'react';
import axios from 'axios';
import Pet from '../Utilities/Display';


class MultiDogs extends Component {
    constructor() {
        super();
        this.state = {
            url: [],
            num: 0
        }
    }

    handleNum = e => {
        // e.event.preventDefault()
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
    componentDidUpdate(prevProps) {
        if (this.props.num !== prevProps.num) {
            this.getMultiDogPicture(this.props.num)

        }
    }
    render() {

        const { url } = this.state
        return (
            <div className="MultiDogs">
                <h1>Multi Dog Pictures v1</h1>

                {url.map(el => {
                    return <Pet key={el} url={el} />
                })}

            </div>
        )
    }
}

export default MultiDogs;
