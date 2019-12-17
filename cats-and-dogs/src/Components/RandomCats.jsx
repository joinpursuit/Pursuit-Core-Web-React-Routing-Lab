import React, { Component } from 'react'
import axios from 'axios'

class RandomCats extends Component {
  constructor() {
    super()
    this.state = {urls:[]}
  }

  getCats = async () => {
    let num = this.props.match.params.num
    let response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
    let array = response.data
    let urls = this.state.urls
    for (let el of array) {
      urls.push(el.url)
    }
    this.setState({
      urls: urls
    })
  }

  componentDidMount() {
    this.getCats()
  }

  render(){
    const { urls } = this.state
    return (
      <>
      <h1>Multiple random cats</h1>
      {urls.map(url =>{
        return (
          <img src={url}></img>
        )
      })}
      </>
    )
  }
}

export default RandomCats
