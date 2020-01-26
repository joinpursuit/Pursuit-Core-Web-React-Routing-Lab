import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RandomDogHooks = () => {
    const [url, setUrl] = useState('');

    const getDogImage = async() => {
        const randomDogUrl = `https://dog.ceo/api/breeds/image/random`;
         let response = await axios.get(randomDogUrl)
            setUrl(response.data.message)
            console.log('data', response)
        }
     useEffect(() => {
        getDogImage()

    }, [])

    return(
        <div className='randomDog'>
            <img src={url} alt='dog' width='400px' height='300px' ></img>
            <br></br>
            <button onClick={getDogImage}>Random Dog</button>
        </div>
    )

}
export default RandomDogHooks;