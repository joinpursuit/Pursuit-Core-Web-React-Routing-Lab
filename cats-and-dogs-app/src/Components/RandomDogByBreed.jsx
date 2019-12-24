import React from 'react'
import axios from 'axios'

class RandomDogByBreed extends React.Component {
    constructor(){
        super()
        this.state = {
            breeds: [],
            selectedBreed: '',
            imgSrc: ''
        }
    }
    componentDidMount = () => {
        this.getAllDogBreeds()

    }

    getAllDogBreeds = async () => {
        try{
            const result = await axios.get('https://dog.ceo/api/breeds/list/all')
            const breedData = result.data.message
            const breeds = Object.keys(breedData)
            console.log(breeds)
            this.setState({
                breeds: breeds
            }) 
        } catch(error){
            console.log('err', error)
        }
    } 

    handleSelectedBreed = (event) => {
        console.log(event.target.value)
        this.setState({
            selectedBreed: event.target.value
        })
    }
    
    fetchDogImageByBreed = async () => {
        const {selectedBreed} = this.state
        let dogAPI = `https://dog.ceo/api/breed/${selectedBreed}/images/random`
    
        try{
            const result = await axios.get(dogAPI)
            const dogImg = result.data.message
            console.log(dogImg)
            this.setState ({
                imgSrc: dogImg
            })       
        } catch(error){
            console.log('err', error)
        }
    }

    render(){
        const {breeds, selectedBreed, imgSrc} = this.state
        return (
            <div>
                <h1>RandomDogByBreed</h1>
                <select onChange={this.handleSelectedBreed} value={selectedBreed}>
                   <option value=''> </option>
                   {
                       breeds.map(breed => {
                        return <option value={breed}>{breed}</option>
                       })
                   }
                </select>
                <button onClick={this.fetchDogImageByBreed}>Get Dog</button>
                <br></br>
                <img src={imgSrc} alt='dog breed'></img>
            </div>
            

        )
    }
}


export default RandomDogByBreed