import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Dog from "./Dog"



const DogByBreed =()=> {
    const [dogImgs,setDogImgs] = useState([]);
    const { breed } = useParams();


    const handeDogBtn =async(breed)=>{
        try {
            let res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
            setDogImgs(res.data.message)
        } catch (error) {
            setDogImgs([])
            console.log(error)
        }
    }

    useEffect(()=>{
        handeDogBtn(breed)
    },[])

        return (
            <div>
                <h1>Dog by Breed</h1>
                <h2>Breed: {breed}</h2>
                <br></br>
                <button onClick={handeDogBtn}>new random dog</button>
                <br></br>
                <Dog imglink={dogImgs}/>
            </div>
        )
    }


export default DogByBreed
