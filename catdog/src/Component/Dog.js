import React from 'react';
import { useParams } from 'react-router-dom'

const Dog = () =>{
    const {num} = useParams
    return(
    <div>{num}</div>
    )
}

export default Dog;