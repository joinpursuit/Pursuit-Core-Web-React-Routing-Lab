import React from 'react'
import axios from 'axios'
import Dog from './Dog'


class MultipleDogs extends React.Component{
    state ={
        dogArr: [],
        num: ''
    }

    
    getMultiDogs = async(num)=>{
        try{
            let dogAmount = `https://dog.ceo/api/breeds/image/random/${num}`
            let res = await axios.get(dogAmount);
            this.setState({
                dogArr: res.data.message
            })
            
        }catch(error){
            this.setState({
                dogArr: []
            })
            
        }
    }
    render(){
        let dogs = this.state.dogArr.map(dog =>{
            return <Dog key={dog}/>
        })
        return(
            <div>
                {dogs}
            </div>
        )

    }
}

export default MultipleDogs