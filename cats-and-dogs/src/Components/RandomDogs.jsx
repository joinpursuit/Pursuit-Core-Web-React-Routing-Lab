import React, { Component } from 'react'
import axios from 'axios'

class RandomDogs extends Component {
  constructor() {
    super()
    this.state = {urls:[]}
  }

  getDogs = async () => {
    let num = this.props.match.params.num
    let response = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
    let array = response.data.message
    let urls = this.state.urls
    for (let el of array) {
      urls.push(el)
    }
    this.setState({
      urls: urls
    })
  }

  componentDidMount() {
    this.getDogs()
  }

  render(){
    const { urls } = this.state
    return (
      <>
      <h1>Multiple random dogs</h1>
      {urls.map(url =>{
        return (
          <img src={url}></img>
        )
      })}
      </>
    )
  }
}

export default RandomDogs
