import React from "react";
import axios from "axios";
import DisplayDog from "./DisplayDog"

class Random extends React.Component{
   
    state = {img:""}

   

    getRandomDog = async () => {
        try{
        let res = await axios.get(`https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/`)
        this.setState( {img : res.data.message} )
        
        }catch(error){
            debugger
            console.log(error)
        }
    }
    
    render(){
        return(
            
            <div>
            <DisplayDog img={this.state.img} key={""}/>
            <button onClick={this.getRandomDog}>Random Dog</button>
        </div>
        )
    }
    
}

export default Random