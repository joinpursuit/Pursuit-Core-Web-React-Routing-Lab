import React from "react";
import axios from "axios";
import DisplayDog from "./DisplayDog"

class Random extends React.Component{
   
    state = {img:[],
            num:0
    }

    handleNum = (e) => {
        this.setState({
            num: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.getMultiple()

    }

   getMultiple = async (e) => {
      let { num } = this.state

       try{
        let res = await axios.get(`https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/${num}`)
        this.setState({img:res.data.message})
       }catch(err){
           console.log(err)
       }
   }

    getRandomDog = async () => {
        try{
        let res = await axios.get(`https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/`)
        this.setState( {img : res.data.message} )      
        }catch(error){          
            console.log(error)
        }
    }
    
    render(){
        let dogs = this.state.img.map((dog)=>{  
            //debugger        
            return<DisplayDog img={dog} key={dog}/>
        })
        // debugger
        return(
            
            <div>
                {dogs}
                <form onSubmit={this.handleSubmit}>
                    <input type="number" onChange={this.handleNum} placeholder="How Many Dogs" required></input>
                    <button >Random Dog</button>
                </form>
            </div>
        )
    }
    
}

export default Random