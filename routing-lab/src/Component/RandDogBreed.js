import React from 'react'
import axios from 'axios'
import Image from './Image'

class RandDogBreed extends React.Component{
    state={
img:""
    }
    componentDidUpdate(prevProps) {
        const oldBreed = prevProps.breed; 
        const newBreed = this.props.breed; 
        if(oldBreed !== newBreed) {
            this.getBreedPics(newBreed);
        }
    }
    getBreedPics =async(breed)=>{
        const breedPic =`https://dog.ceo/api/breed/${breed}/images/random`
        debugger
        try {
            let res = await axios.get(breedPic);
            this.setState({dogPics: res.data.message})
        } catch (error) {
            this.setState({dogPics: []});
        }
    }
    render(){
        let breeds = this.state.dogPics.map(dog => {
            return <Image img={dog} key={dog}/>
        })
        return(
            <div>
                {breeds}
            </div>
        )
    }

}


export default RandDogBreed