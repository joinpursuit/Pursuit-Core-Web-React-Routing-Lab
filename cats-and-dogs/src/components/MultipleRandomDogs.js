import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const MultipleRandomDogs = () => {
  const [dogImgs, setDogs] = useState([]);
  const { num } = useParams();

  useEffect(() => {
    const fetchDog = async () => {
      let breedURL = `https://dog.ceo/api/breeds/image/random/${num}`;
      try {
        let res = await axios.get(breedURL);
        const dogs = res.data.message.map(dog=> {
            return <img src={dog} alt={""}/>
        })
        setDogs(dogs)
      } catch (error) {
        console.log(error);
      }
    }
    fetchDog();
  }, [num]);

  
  return (<div>{dogImgs}</div>)
}

export default MultipleRandomDogs;