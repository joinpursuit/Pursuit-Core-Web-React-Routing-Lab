import React, { useState, useEffect } from "react";
import axios from "axios";
import Picture from "./Picture";
import { useParams } from "react-router-dom";

const MultipleRandomCats = () => {
  const [catPics, setCatPics] = useState([]);
  const { num } = useParams();

  useEffect(() => {
    const getManyRandomCats = async num => {
      try {
        const catURL = `https://api.thecatapi.com/v1/images/search?limit=${num}&page=10&order=Desc`;
        let res = await axios.get(catURL);
        debugger;
        const cats = res.data.map(cat => {
          return <Picture img={cat.url} key={cat.id} />;
        });
        setCatPics(cats);
      } catch (error) {
        setCatPics([]);
        console.log(error);
      }
    };
    getManyRandomCats(num);
  }, [num]);

  return (
    <div>
      <h1>Random Cats!</h1>
      {catPics}
    </div>
  );
};

export default MultipleRandomCats;
