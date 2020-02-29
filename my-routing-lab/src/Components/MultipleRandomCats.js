import React from 'react';


class MultipleRandomCats extends React.Component {
    constructor (props){
        super (props)
        this.state = {
            images: [],
            imageNum: this.props.match.params.num
        }
    }
    componentDidMount () {
        this.getCatImages(this.state.imageNum)
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
        let catImages = images.map(src => {
            return <Image image={src}/>
        })
        return (
            <>
                {catImages}
            </>
        )
    }
}




export default MultipleRandomCats; 