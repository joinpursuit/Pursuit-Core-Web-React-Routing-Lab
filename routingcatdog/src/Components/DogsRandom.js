import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Dog from "./Dog"



const DogsRandom =()=> {
    const [dogImgs,setDogImgs] = useState([]);
    const { number } = useParams();

     const randomNumberDogs = async(number)=> {
         try {
            let res =await axios.get(`https://dog.ceo/api/breeds/image/random/${number}`)
            setDogImgs(res.data.message)
         } catch (error) {
            setDogImgs([])
            console.log(error)
         }
    }

    let showDog = dogImgs.map((img,i)=>{
        return <Dog key={i} imglink={img}/> 
    })

    useEffect(()=>{
        randomNumberDogs(number)
    },[])
    // debugger
    console.log(dogImgs, number)
        return (
            <div>
            {showDog}
            </div>
        )
    
}

export default DogsRandom;
// import React from 'react';
// import axios from "axios";
// // import { useParams } from 'react-router-dom'
// // import { render } from '@testing-library/react';

//  export class DogsRandom extends React.Component {
//      state={
//         dogImgsByNumber:[],
//         number:[this.props.match.parmas.number]
//      }

//      RandomNumberDogs =async(number)=> {
//         // let {number} = this.props.match.parmas;
//         debugger


//         try {
//             let res =axios.get(`https://dog.ceo/api/breeds/image/random/${number}`)
            
//             return this.setState({dogImgsByNumber:res.data.message.message((imgLink,i)=>(
//                 <img key={i} src={imgLink} alt="dog"></img>
//             ))
//         })
            
//         } catch (error) {
//             console.log(error)
//         }
//     }

//      componentDidMount() {
//         this.RandomNumberDogs(this.state.number)
//      }

//     render() {
//         return (
//             <div>
//             {this.RandomNumberDogs}
//             </div>
//         )
//     }
    
// }

// export default DogsRandom;