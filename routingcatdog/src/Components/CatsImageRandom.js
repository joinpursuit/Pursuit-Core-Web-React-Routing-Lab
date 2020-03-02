import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Dog from "./Dog"



const CatsRandom =()=> {
    const [catsImgs,setcatsImgs] = useState([]);
    const { number } = useParams();

     const randomNumberCats = async(number)=> {
         try {
            let res =await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${number}&page=10&order=Desc`)
            // debugger
            setcatsImgs(res.data)
         } catch (error) {
            setcatsImgs([])
            console.log(error)
         }
    }

    let showCat = catsImgs.map((img,i)=>{
        // debugger
        return <Dog key={i} imglink={img.url}/> 
    })

    useEffect(()=>{
        randomNumberCats(number)
    },[])
    // debugger
    console.log(catsImgs, number)
        return (
            <div>
            <h1>Random cats of {number}</h1>
            {showCat}
            </div>
        )
    
}

export default CatsRandom;
