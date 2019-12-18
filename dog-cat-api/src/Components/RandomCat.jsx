import React, {Component} from 'react';
import axios from 'axios';

class RandomCat extends Component {
    constructor() {
        super()
        this.state = {
            url: ''
        }
    }
    componentDidMount () {
        console.log('cat compund has been mounted')
        this.getRandomCat()
    }

    getRandomCat = async() => {
        try{
            let randomCatUrl = `https://api.thecatapi.com/v1/images/search`
            let response = await axios.get(randomCatUrl)
                this.setState({
                    url: response.data[0].url
                })
            console.log('cat response', response)

        } catch (error){
            console.log('error', error)
        }
    }

    handleNewCatButton = (e) => {
        const {url} = this.state
       this.getRandomCat(url)
    }

    render() {
        const { url } = this.state
        return(
            <div>
                <img src={url} alt='cat' width='300px'></img>
                    <br></br>
                <button onClick={this.handleNewCatButton}>Get New Cat</button>
            </div>
        )
    }
   
}

export default RandomCat;