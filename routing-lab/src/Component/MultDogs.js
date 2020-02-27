import React from 'react'
import axios from 'axios'
import Image from './Image'


class MultDogs extends React.Component{
    state ={ dogPics: [], numberOfDogs:10 }
    
  componentDidUpdate(){
      const numberOfDogs = this.state.numberOfDogs
      if(numberOfDogs){
          this.getMultPics(numberOfDogs)
      }
  }
    getMultPics = async (numberOfDogs)=>{
        try{
            const picsURL = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
            let response = await axios.get(picsURL)
           
            this.setState({dogPics:response.data.message})
        }catch(error){
            this.setState({dogPics: []})
        }
    }
    render(){
        let dogs = this.state.dogPics.map(dog=>{
            return <Image img={dog} key={dog}/>      
          })
        
        return (
            <div>
                {dogs}
            </div>
        )
    }
}

export default MultDogs;