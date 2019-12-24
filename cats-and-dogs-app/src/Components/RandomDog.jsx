import React from 'react'
import axios from 'axios'

class RandomDog extends React.Component {
    constructor(){
        super()
        this.state = {
            imgURLS: '',
        }
    }

    componentDidMount = async () => {
        this.fetchRandomDogImage()
    }

    componentDidUpdate = async (prevProps) => {
        if(prevProps.location.key !== this.props.location.key)
        this.fetchRandomDogImage()
    }

     fetchRandomDogImage = async () => {
        let dogAPI = 'https://dog.ceo/api/breeds/image/random'

        try{
            const result = await axios.get(dogAPI)
            const dogImgData = result.data.message
            console.log('images', dogImgData)

            this.setState ({
                imgURLS: dogImgData
            })
        } catch (error){
            console.log('err: ', error)
        }
        
   }

    

   render(){
       return (
           <div>
               <h1> Dog Generator</h1>
               <img src={this.state.imgURLS} alt='doggo'></img>
               <br></br>
               <button onClick={this.fetchRandomDogImage}>Random Doggo</button>
           </div>
       )
   }
}



export default RandomDog