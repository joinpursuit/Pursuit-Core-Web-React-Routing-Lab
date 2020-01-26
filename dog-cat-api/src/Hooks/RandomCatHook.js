import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomCatHook = () => {
    const [url, setUrl] = useState('')

    const getRandomCat = async () => {
        let randomCatUrl = `https://api.thecatapi.com/v1/images/search`
        let response = await axios.get(randomCatUrl)
         setUrl(response.data[0].url)
    }


   useEffect(() => {
       getRandomCat();
   }, [])
    
    return(
        <div>
            <img src={url} alt='cat' width='400px' height='300px'></img>
            <br></br>
            <button onClick={getRandomCat}>Get New Cat</button>
        </div>
    )
}

export default RandomCatHook;