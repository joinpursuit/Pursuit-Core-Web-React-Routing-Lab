import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const GetDog = () => {
  const [url, setUrl] = useState("");
  const { breed } = useParams();

  useEffect(() => {
    const fetchDog = async () => {
      let breedURL = `https://dog.ceo/api/breed/${breed}/images/random/1`;
      try {
        let res = await axios.get(breedURL);
        setUrl(res.data.message[0])
      } catch (error) {
        console.log(error);
      }
    }
    fetchDog();
  }, [breed]);
  return <img src={url} alt={""}/>
}
// const GetDog = async () => {
//   const { breed } = useParams();
//   let breedURL = await `https://dog.ceo/api/breed/${breed}/images/random/1`;
//   try {
//     let res = axios.get(breedURL);
//     debugger
//     url = res.data.message[0];
//   } catch (error) {
//     console.log(error);
//   }
//   return(<img src={url} alt={""}></img>)
// }

export default GetDog