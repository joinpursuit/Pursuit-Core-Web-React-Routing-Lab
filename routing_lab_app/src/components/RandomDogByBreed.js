import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Dog from "./Dogs";
import DogSelector from "./DogSelector";

const RandomDogByBreed = () => {
  const [dogImgs, setDogImgs] = useState([]);
  const [breed, setBreed] = useState("");
  const [numberOfDogs] = useState(1);
  const didMount = useRef(false);

  const handleBreed = breed => {
    setBreed(breed);
  };

  const getDogPics = async (breed, numberOfDogs) => {
    const breedURL = `https://dog.ceo/api/breed/${breed}/images/random/${numberOfDogs}`;
    try {
      let res = await axios.get(breedURL);
      setDogImgs(res.data.message);
    } catch (error) {
      setDogImgs([]);
    }
  };

  useEffect(() => {
    if (didMount.current) {
      getDogPics(breed, numberOfDogs);
    } else {
      didMount.current = true;
    }
  }, [breed]);

  let dogs = dogImgs.map(dog => {
    return <Dog img={dog} key={dog} />;
  });

  return (
    <div>
      <DogSelector breed={breed} handleBreed={handleBreed}></DogSelector>
      {dogs}
    </div>
  );
};

export default RandomDogByBreed;
