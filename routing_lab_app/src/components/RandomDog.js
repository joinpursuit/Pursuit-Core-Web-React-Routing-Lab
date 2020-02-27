import React, {Component} from "react";
import Dog from "./Dogs"
import axios from "axios"

class RandomDog extends Component{
    state={
        dogPic: ""
    }

    getRandomDog = async()=>{
        try{
            let res = await axios.get("https://dog.ceo/api/breeds/image/random")
            debugger
            this.setState({dogPic:res.data.message})
        }catch(err){
            console.log(err)
        }
    }




    render(){
       
        return(
            <div>
                <button onClick={this.getRandomDog}>Get Random Dog</button>
                <Dog img={this.state.dogPic}/>
            </div>
        )
    }
}


export default RandomDog;
