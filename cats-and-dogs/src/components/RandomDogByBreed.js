import React, { Component } from "react";
import axios from "axios";
import GetDog from './GetDog'

class RandomDogByBreed extends Component {
  state = {
    breed: "",
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

  // componentWillUpdate(){

  // }

  handleBreedSelect = e =>{
    e.preventDefault();
    this.setState({breed: e.target.value})
    // this.props.history.push(`dog/${this.state.breed}`)
  }
  
  render(){
    const {breeds, breed} = this.state
    const options = breeds.map(breed=>{
      return <option value={breed} key={breed}>{breed}</option>
    })
    console.log(breed)
    return (
      <>
      {/* <select value={breed} onChange={this.handleBreedSelect}> */}
        {/* <option value="" disabled>Pick a Breed</option> */}
        {/* {options} */}
      {/* </select> */}
      <GetDog/>
      </>
      )
    }
  }
  
  export default RandomDogByBreed
  {/* <img src={getRandomBreed()} alt={""}></img> */}