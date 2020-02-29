import React from "react";
import axios from "axios";
// import { useParams } from 'react-router-dom';

class MultipleDogImages extends React.Component{
    state = {
        imageUrls:[]
    }

    grabImages = async () => {
        let numPhoto = this.props.match.params.num
            try{
                let res =  await axios.get(`https://dog.ceo/api/breeds/image/random/${numPhoto}`)
                this.setState( {imageUrls: res.data.message});
            } catch(err){
              console.log(err)
            }
    }

    printImage = (imageArr) => {
       return imageArr.map((imageLink, index)=>{
            return <img key={index} src={imageLink} alt=""></img>
        })
    }

    componentDidMount() {
        this.grabImages();
        
    }

    render(){
        return(
            <div>
            {this.printImage(this.state.imageUrls)}
            </div>
        )
    }
}

export default MultipleDogImages;