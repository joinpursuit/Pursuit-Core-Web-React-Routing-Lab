import React from 'react'
import axios from 'axios';
import Image from './Image'


class MultipleRandomDogs extends React.Component {
    constructor (props){
        super (props)
        this.state = {
            images: [],
            imageNum: this.props.match.params.num
        }
    }
    componentDidMount () {
        this.getDogImages(this.state.imageNum)
    }
    getDogImages = async (num) => {
        try {
            let res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
            this.setState({images: res.data.message})
        } catch (error) {
                this.setState({images: []})
                console.log(`Recognize the error of your ways: ${error}`)
        }
    }
    render () {
        const {images} = this.state
        let dogImages = images.map(src => {
            debugger
            return <Image image={src}/>
        })
        return (
            <>
                {dogImages}
            </>
        )
    }
}


export default MultipleRandomDogs; 