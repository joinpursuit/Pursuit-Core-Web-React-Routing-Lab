import React, { useState, useEffect } from "react";
import axios from "axios";
import Dog from "./Dogs";
import DogSelector from "./DogSelector";

const RandomDogByBreed = () => {
  const [dogPics, setDogPics] = useState([]);
  const [breed, setBreed] = useState("");
  const [numberOfDogs] = useState(3);
  const [didMount, setDidMount] = useState(false);

  const handleBreed = breed => {
    setBreed(breed);
  };

  const getDogPics = async (breed, numberOfDogs) => {
    const breedURL = `https://dog.ceo/api/breed/${breed}/images/random/${numberOfDogs}`;
    try {
      let res = await axios.get(breedURL);
      setDogPics(res.data.message);
    } catch (error) {
      setDogPics([]);
    }
  };

  useEffect(() => {
    if (didMount.current) {
      getDogPics(breed, numberOfDogs);
    } else {
      setDidMount(true);
    }
  }, [breed]);

  let dogs = dogPics.map(dog => {
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
