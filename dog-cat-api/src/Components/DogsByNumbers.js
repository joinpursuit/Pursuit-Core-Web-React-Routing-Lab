import React, { Component } from 'react';
import axios from 'axios';

class DogsByNumbers extends Component {
    constructor() {
        super()
        this.state = {
            dogImages: [],
        }
    }

    getDogsByNums = async() => {
        try {
            let dogsUrl = ``
            
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

export default DogsByNumbers;