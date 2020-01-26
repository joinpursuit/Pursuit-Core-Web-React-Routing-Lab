import React, { Component } from 'react';
import axios from 'axios';

class DogsByBreed extends Component {
    constructor() {
        super()
        this.state = {
            dogImages: [],
        }
    }

    componentDidMount() {

        console.log('dog number mounted')
        this.getDogsByBreed()
    }

    getDogsByBreed = async() => {
        try {
            let dogsUrl = `https://dog.ceo/api/breeds/list/all`
            let response = await axios.get(dogsUrl)
            this.setState({
              
            })
            console.log('all dogs', response)
            
        } catch (error) {
            console.log('error', error)
        }
    }

   render() {
        return(
            <div>
                <input type='number'></input>
                <img src='' alt='dogs'></img>
                <button>Get Dogs</button>
            </div>
        )
   }
  
}



export default DogsByBreed;