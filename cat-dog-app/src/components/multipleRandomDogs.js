import React, { Component } from 'react';
import axios from 'axios';

class MultipleRandomDogs extends Component {
  state = {
    dogUrls:[]
  }
  fetchImages = async () => {
    let numDogs = this.props.match.params.num
    try{
      let res =  await axios.get(`https://dog.ceo/api/breeds/image/random/${numDogs}`);
      this.setState({
        dogUrls: res.data.message
      });
    }catch(err){
      console.log(err)
    }
  }
  displayImage = (arrayOfImage) => {
    return arrayOfImage.map((imageDogs, i)=>{
      return <img src={imageDogs} alt="" key={i}></img>
    })
  }
 componentDidMount() {
   this.fetchImages()
 }
 render(){
  return(
      <div>
      {this.displayImage(this.state.dogUrls)}
      </div>
  )
}
}

export default MultipleRandomDogs