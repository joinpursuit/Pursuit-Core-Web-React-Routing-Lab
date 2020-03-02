import React, { useState, useEffect } from 'react';
import axios from "axios";
import Dog from "./Dog"


const CatRandom =()=> {
  
    const [imgLink,setImgLink] = useState(null)

    const handleRandomCatBtn =async()=>{
        try {
            let res = await axios.get("https://api.thecatapi.com/v1/images/search")
            setImgLink(res.data[0].url)
        } catch (error) {
            setImgLink([])
            console.log(error)
        }
    }

    useEffect(()=>{
        handleRandomCatBtn()
    },[])
        return (
            <div>
                <h1>Random Cat</h1>
                <br></br>
                <button onClick={handleRandomCatBtn}>new random cat</button>
                <br></br>
                <Dog imglink={imgLink}/>
            </div>
        )
}

export default CatRandom
