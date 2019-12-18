import React, { Component } from 'react';
import axios from 'axios';
import Pet from '../Utilities/Display';


class MultiCat extends Component {
    constructor() {
        super();
        this.state = {
            url: [],
        }
    }



    getMultiCatPicture = async (num) => {
        let dogURL = `https://api.thecatapi.com/v1/images/search?limit=${Number(num)}`
        // axios request using try, catch and async, await
        try {
            const { data } = await axios.get(dogURL)
            console.log(data)
            this.setState({
                url: data,
            })

        } catch (error) {
            console.log('err: ', error)
        }

    }
    componentDidUpdate(prevProps) {
        if (this.props.num !== prevProps.num) {
            this.getMultiCatPicture(this.props.num)

        }
    }
    render() {

        const { url } = this.state
        console.log(url);

        return (
            <div className="MultiCat">
                {url.map(el => {
                    return <Pet key={el.id} url={el.url} />
                })}

            </div>
        )
    }
}

export default MultiCat;
