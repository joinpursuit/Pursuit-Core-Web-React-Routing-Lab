import React from "react";
import axios from "axios";

class MultipleDogImages extends React.Component{
    state = {
        imageUrls:[]
    }

    grabImage = async (numPhoto = 2) => {
            try{
                let res =  await axios.get(`https://dog.ceo/api/breeds/image/random/:${numPhoto}`)
                this.setState( {imageUrls: res.data.message});
                debugger
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
            Hit this
                <button onClick={this.grabImage}>Multiple Dog Pictures</button>
                {this.printImage(this.state.imageUrls)}
            </div>
        )
    }
}

export default MultipleDogImages;