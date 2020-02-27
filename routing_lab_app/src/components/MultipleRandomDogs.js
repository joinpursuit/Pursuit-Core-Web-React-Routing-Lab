import React, {Component} from "react"
import axios from "axios"
import Dog from "./Dogs"


class MultipleRandomDogs extends Component{
    state={
        manyDogs: [],
        numberOfDogs: 5
    }
    
    getManyRandomDogs = async({numberOfDogs})=>{
        const dogURL = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
    
        try{
            let res = await axios.get(dogURL)
            debugger
            this.setState = ({manyDogs:(res.data.message)})
        }catch(err){
            console.log(err)
        }
    }
    render(){
        let manyDogs = this.state.manyDogs.map(dog=>{
            return <Dog img={dog} key={dog}/>

        })

        return(
            <div>
                <button onClick={this.getManyRandomDogs}>Click To Get Multiple Random Dogs</button>
                {manyDogs}
            </div>
        )
    }
}

export default MultipleRandomDogs
