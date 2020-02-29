import React, {Component} from "react"
import axios from "axios"
import Dog from "./Dogs"


class MultipleRandomDogs extends Component{
    state={
        manyDogs: [],
        numberOfDogs: 5
    }



    componentDidMount(){
        const numberOfDogs = this.state.numberOfDogs
         if(numberOfDogs){
             this.getManyRandomDogs(numberOfDogs)
         }
    }
    
    getManyRandomDogs = async(numberOfDogs)=>{   
        try{
            const dogURL = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
            let res = await axios.get(dogURL)
            debugger
            this.setState = ({manyDogs:(res.data.message)})
        }catch(err){
            console.log(err)
        }
    }
    render(){
        let manyDogPics = this.state.manyDogs.map(dog=>{
            return <Dog img={dog} key={dog}/>

        })

        return(
            <div>
                {manyDogPics}
            </div>
        )
    }
}

export default MultipleRandomDogs
