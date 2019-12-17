import React, {Component} from 'react';
import axios from 'axios';
import {
    Link,
    Route,
    Switch
} from 'react-router-dom';

class RandomDogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    componentDidMount () {
        console.log('component mounted')
        this.getRandomDog()
    }
 
    getRandomDog = async () => {

        try {
            let randomDogUrl = `https://dog.ceo/api/breeds/image/random`;
            let response = await axios.get(randomDogUrl)
            this.setState ({
              url: response.data.message
            })

            console.log('response', response.data.message)
        } catch (error) {
            console.log('error', error)
        }
    }

    handleNewDogButton = (e) => {
       
    }

    render() {
         const { url } = this.state
        return(
            <div>
              <img src={url} alt='dog' ></img>
                <br></br>
              <button>Get Dog</button>
            </div> 
           
        )
    }


}




export default RandomDogs;
