import React from 'react';
import axios from 'axios';
import Image from './Image'


class MultipleRandomCats extends React.Component {
    constructor (props){
        super (props)
        this.state = {
            apiKey: "bb783245-0e2d-4ed6-939a-af6d4a491ed0",
            images: [],
            imageNum: this.props.match.params.num
        }
    }
    componentDidMount () {
        this.getCatImages(this.state.imageNum)
    }
    getCatImages = async (num) => {
        try {
            let res = await axios.get(`https://api.thecatapi.com/v1/images/search?api_key=${this.state.apiKey}&limit=${this.state.imageNum}`)
            this.setState({images: res.data})
        } catch (error) {
                this.setState({images: []})
                console.log(`Recognize the error of your ways: ${error}`)
        }
    }
    render () {
        const {images} = this.state
        let catImages = images.map(src => {
            return <Image image={src.url} key={src}/>
        })
        return (
            <>
                {catImages}
            </>
        )
    }
}




export default MultipleRandomCats; 