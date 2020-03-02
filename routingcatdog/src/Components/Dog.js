import React from 'react'
import "../css/DogImg.css"

const Dog = ({imglink})=>{
    return <img src={imglink} alt="dog"></img>
}

export default Dog;