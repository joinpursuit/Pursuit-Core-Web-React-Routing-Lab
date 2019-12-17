import React, { Component } from 'react'
import axios from 'axios'

class RandomDogByBreed extends Component {
  constructor() {
    super()
    this.state = { url: ''}
  }

  getDogByBreed = async () => {
    let breed = this.props.match.params.breed
    let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
    this.setState({
      url: response.data.message
    })
  }

  componentDidMount() {
    this.getDogByBreed()
  }

  render(){
    const { url } = this.state
    return (
      <>
      <h1>Random dog by breed</h1>
      <img src={url}></img>
      </>
    )
  }
}

export default RandomDogByBreed
