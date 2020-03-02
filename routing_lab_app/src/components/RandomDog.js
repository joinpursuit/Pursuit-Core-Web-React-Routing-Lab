import React, { useState, useEffect } from "react";
import Picture from "./Picture";
import axios from "axios";

const RandomDog = () => {
  const [dogPic, setDogPic] = useState("");

  const getRandomDog = async () => {
    try {
      let res = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogPic(res.data.message);
    } catch (err) {
      setDogPic(null);
      console.log(err);
    }
  };

  useEffect(() => {
    getRandomDog();
  }, []);

  return (
    <div>
      <button onClick={getRandomDog}>Get Random Dog</button>
      <Picture img={dogPic} />
    </div>
  );
};

export default RandomDog;
