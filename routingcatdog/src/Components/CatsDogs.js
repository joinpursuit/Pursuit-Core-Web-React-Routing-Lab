
import React, { useState, useEffect } from 'react'
import axios from "axios"
// import { useParams } from 'react-router-dom';
import Dog from "./Dog"



const CatsDogs =()=> {
    const [allImgs,setAllImgs] = useState([]);

    let randomNumber = Math.floor(Math.random()*10)+1//random number 1 to 10


    const randomAll = async()=> {
        try {
           let res1 =await axios.get(`https://dog.ceo/api/breeds/image/random/${randomNumber}`)
           let res2 =await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${randomNumber}&page=10&order=Desc`)
           setAllImgs(res1.data.message)
        //    debugger
           setAllImgs((allImgs)=>{
               return [...allImgs,...res2.data.map(el=>el.url)]
            })

        //    debugger
        } catch (error) {
           setAllImgs([])
           console.log(error)
        }
   }

//    let showAll = allImgs.map((img,i)=>{
//     //    debugger
//        return <Dog key={i} imglink={img.url}/> 
//    })

   useEffect(()=>{
       randomAll()
   },[])
        console.log(allImgs)
        // debugger
        return (
            <div>
                <h1>Cats vs Dog</h1>
                {/* {showAll} */}
            </div>
        )

}

export default CatsDogs
