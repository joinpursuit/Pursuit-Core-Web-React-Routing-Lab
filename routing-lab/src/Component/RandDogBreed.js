import React from 'react'
import axios from 'axios'
import Image from './Image'

class RandDogBreed extends React.Component{
    state={
        img:""
    }
   componentDidMount(){
       this.getBreedPics(this.props.match.params.breed)
   }
    getBreedPics =async(breed)=>{
        const breedPic =`https://dog.ceo/api/breed/${breed}/images/random/`
        debugger
        try {
            let res = await axios.get(breedPic);
            this.setState({img: res.data.message})
        } catch (error) {
            this.setState({img: ''});
        }
    }
    render(){
     
        return(
            <div>

                {this.state.img}
            </div>
        )
    }

}
//this.props.match.params.breed

export default RandDogBreed