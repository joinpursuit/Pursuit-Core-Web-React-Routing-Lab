import React from 'react'
import Image from './Image'
import axios from 'axios';

class RandomCat extends React.Component {
    state = {
        image: [],
        apiKey: "bb783245-0e2d-4ed6-939a-af6d4a491ed0"
    }
    getImage = async () => {
        try {
            let res = await axios.get(`https://api.thecatapi.com/v1/images/search?api_key=${this.state.apiKey}&limit=1`)
            this.setState({image: res.data})
        } catch (error) {
                this.setState({image: ""})
                console.log(`Recognize the error of your ways: ${error}`)
        }
    }
    render () {
        const {image} = this.state
        let images = image.map(img => {
            return <Image image={img.url}/>
        })
        return (
            <div>
                <button onClick={this.getImage}>Get Random Cat</button>
                {images}
            </div>
        )
    }
}


export default RandomCat; 
