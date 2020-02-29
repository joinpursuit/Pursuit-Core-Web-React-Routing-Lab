import React, { Component } from "react";
import axios from "axios";
// import getRandomBreed from './RanDogBreedFunc'

class RandomDogByBreed extends Component {
  state = {
    breedURL: "",
    breeds: []
  }

  componentDidMount(){
    this.fetchBreeds()
  }

  async fetchBreeds(){
    try{
      let res = await axios.get(`https://dog.ceo/api/breeds/list/all`)
      this.setState({breeds: Object.keys(res.data.message)})
    }catch (error){
      this.setState({breeds: []})
      console.log(error)
    }
  }

  render(){
    const {breeds, breedURL} = this.state
    const options = breeds.map(breed=>{
      return <option value={breed} key={breed}>{breed}</option>
    })
    return (
      <select>
        <option selected disabled>Pick a Breed</option>
        {options}
      </select>
      )
    }
  }
  
  export default RandomDogByBreed
  {/* <img src={getRandomBreed()} alt={""}></img> */}