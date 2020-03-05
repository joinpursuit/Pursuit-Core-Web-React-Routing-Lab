import React from 'react';
import Image from './Image'
import axios from 'axios';

class RandomDog extends React.Component {
    state = {
        image: ""
    }
    // componentDidMount() { //Render Image on Mount
    //     this.getImage()
    // }
    getImage = async () => {
        try {
            let res = await axios.get("https://dog.ceo/api/breeds/image/random")
            this.setState({image: res.data.message})
        } catch (error) {
                this.setState({image: ""})
                console.log(`Recognize the error of your ways: ${error}`)
        }
    }
    render () {
        const {image} = this.state
        return (
            <div>
                <button onClick={this.getImage}>Get Random Dog</button>
                <Image image={image}/>
            </div>
        )
    }
}

export default RandomDog; 
