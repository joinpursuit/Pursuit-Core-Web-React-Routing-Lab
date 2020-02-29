import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

let url = ""

// const getDogPics = async () => {
// debugger
//   let  {breed} = useParams();
//   const breedURL = `https://dog.ceo/api/breed/${breed}/images/random/1`;
//   try {
//     let res = await axios.get(breedURL);
//     url = res.data.message;
//   } catch (error) {
//     console.log(error);
//   }
// }
debugger

const RandomDogByBreed =  () => {
let  {breed} = useParams();
    
  const breedURL = `https://dog.ceo/api/breed/${breed}/images/random/1`;
  try {
    let res =  axios.get(breedURL);
    url = res.data.message;
  } catch (error) {
    console.log(error);
  }
//   componentDidMount() {
//     this.getDogPics(this.state.numberOfDogs)
//   }

//   render() {
    // let dogs = this.state.dogPics.map(dog => {
    //   return <DogDisplay src={dog} key={dog} />;
    // });
    
    return <img src= {url} alt={""}></img>;
//   }
}
export default RandomDogByBreed;