import React from "react";
import axios from "axios";
import "../css/RandomDogImage.css"

class OneDogImage extends React.Component{
    state = {
        imageUrl:""
    }

    grabImage = async () => {
            try{
                let res =  await axios.get(`https://dog.ceo/api/breeds/image/random`)
                this.setState( {imageUrl: res.data.message});
            } catch(err){
              console.log(err)
            }
    }

    printImage = (image) => {
         return <img src={image} alt=""></img>
    }

    render(){
        return(
            <div>
                <button onClick={this.grabImage}>Random Dog Picture</button>
                {this.printImage(this.state.imageUrl)}
            </div>
        )
    }
}

export default OneDogImage;