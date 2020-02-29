import React from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

let url = ""
const getRandomBreed = async () => {
  const { breed } = useParams();
  let breedURL = await `https://dog.ceo/api/breed/${breed}/images/random/1`;
  try {
    let res = axios.get(breedURL);
    debugger
    url = res.data.message[0];
  } catch (error) {
    console.log(error);
  }
  return url;
}

export default getRandomBreed