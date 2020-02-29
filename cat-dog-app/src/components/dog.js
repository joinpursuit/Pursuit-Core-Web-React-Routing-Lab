import React, { Component } from 'react';
import axios from 'axios';


class Dog extends Component {
  state = { 
    dogImg: "" 
  }
  componentDidMount () {
    this.getDog();
  }

  getDog = async () => {
    try{
      
      let res = await axios.get(`https://dog.ceo/api/breeds/image/random`)
       this.setState( {dogImg : res.data.message} )
    }catch(err) {
          console.log(err)
    }
  }

  render(){
return(
  <div>
    <h2>Random Dog</h2>
    <img src={this.state.dogImg} alt={""}></img>
    <button onClick={this.getDog}> Get a random dog</button>
  </div>
)}
}

export default Dog