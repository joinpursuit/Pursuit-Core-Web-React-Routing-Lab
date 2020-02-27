import React from 'react'

const styles ={
    img:{
        height: '200px',
        width: '200px'
    }
}


const DogImg = ({img}) =>{
    return(
        <img src={img} alt={""} styl={styles.img}></img>
    )
}

export default DogImg