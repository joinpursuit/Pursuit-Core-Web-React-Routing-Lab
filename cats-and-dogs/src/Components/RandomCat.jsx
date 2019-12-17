import React, { Component } from 'react'
import axios from 'axios'


class RandomCat extends Component {
  constructor() {
    super()
    this.state = {
      url:''
    }
  }

  getCat = async () => {
    let response = await axios.get('https://api.thecatapi.com/v1/images/search')
    this.setState({
      url:response.data[0].url
    })
  }

  render(){
    const { url } = this.state
    return (
      <>
      <div>
        <h1>Random cat image</h1>
        <button onClick={this.getCat}>Get Cat</button>
      </div>
      <img src={url}></img>
      </>
    )
  }
}

export default RandomCat
