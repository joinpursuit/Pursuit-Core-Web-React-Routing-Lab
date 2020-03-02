import React, { useState, useEffect } from "react";
import axios from "axios";
import Dog from "./Dogs";

const RandomCat = () => {
  const [catPic, setCatPic] = useState(null);

  const getRandomCat = async () => {
    try {
      let res = await axios.get("https://api.thecatapi.com/v1/images/search");
      setCatPic(res.data[0].url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomCat();
  }, []);

  return (
    <div>
      <Dog img={catPic}></Dog>
      <button onClick={getRandomCat}>Get Random Cat</button>
    </div>
  );
};

export default RandomCat;
