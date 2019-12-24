import React from 'react'
import axios from 'axios'

class RandomCat extends React.Component {
    constructor(){
        super()
        this.state = {
            imgURL: ''
        }
    }
    componentDidMount = () => {
        this.fetchRandomCatImage()
    }
    fetchRandomCatImage = async () => {
       try{
        const catAPI = 'https://api.thecatapi.com/v1/images/search'
        const result = await axios.get(catAPI) 
        const catURL = result.data[0].url
        console.log(catURL)
        this.setState({
            imgURL: catURL
        })
       } catch(error){
        console.log('err', error) 
       }
       
    }

    render(){
        const {imgURL} = this.state
        return (
            <div>
                <h1>Cat Generator</h1>
                <button onClick= {this.fetchRandomCatImage}>Get New Cat</button>
                <br></br>
                <img src={imgURL} alt='cat'></img>
            </div>
        )
    }
}

export default RandomCat