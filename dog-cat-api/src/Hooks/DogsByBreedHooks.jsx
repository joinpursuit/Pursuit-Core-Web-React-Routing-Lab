import React, {useState, useEffect} from 'react';
// import { useParams} from 'react-router'
import { useRouteMatch} from 'react-router';
import axios from 'axios';

const DogsByBreedHooks = () => {
    const [url, setUrl] = useState('')
    // let { breed } = useParams()
      let match = useRouteMatch({
          path: "/dog/:breed",
          strict: true,
          sensitive: true
      });
      let {breed} = match.path
    console.log('breed', breed)

    const getDogBreed = async() => {
        // const breed = useState.match.params
        const dogUrl = `https://dog.ceo/api/breed/${breed}/images/random`
        let response = await axios.get(dogUrl) 
        console.log('response', response)
        setUrl(response.data.message)
        
    }

    useEffect(() => {
        getDogBreed()
    })

    
    
    return(
        <div>
           <input type='number'/>
           <br></br>
           <img src={url} alt='breeds'></img>
           <br></br>
           <button onClick={getDogBreed}>get breeds</button>
        </div>
    )
}

export default DogsByBreedHooks;