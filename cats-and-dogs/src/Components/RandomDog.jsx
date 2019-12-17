import React, { Component } from 'react'
import axios from 'axios'


class RandomDog extends Component {
  constructor() {
    super()
    this.state = {
      url:''
    }
  }

  getDog = async () => {
    let response = await axios.get('https://dog.ceo/api/breeds/image/random')
    this.setState({
      url:response.data.message
    })
  }

  render(){
    const { url } = this.state
    return (
      <>
      <div>
        <h1>Random dog image</h1>
        <button onClick={this.getDog}>Get Dog</button>
      </div>
      <img src={url}></img>
      </>
    )
  }
}

export default RandomDog
