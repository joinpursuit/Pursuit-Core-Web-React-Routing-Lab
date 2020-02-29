import React, {Component } from 'react';
import axios from 'axios';
class Cat extends Component {
  state= {
    catImg: ""
  }
  componentDidMount () {
    this.getCat();
  }

  getCat = async () => {
    try{
      let res = await axios.get(`https://api.thecatapi.com/v1/images/search`)
      debugger
      this.setState( {catImg: res.data[0].url})
    }catch(err) {
      console.log(err)
    }
  } 
   render() {

     return(
       
        <div>
           <h2>
             Random Cat
           </h2>
           <img src={this.state.catImg} alt={""}></img>
           <button onClick={this.getCat}> Get a random Cat</button>
        </div>

       
     )}
   }

export default Cat