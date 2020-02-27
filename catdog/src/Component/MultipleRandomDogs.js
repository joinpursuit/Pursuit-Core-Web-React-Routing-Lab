import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


class MultipleDogs extends React.Component{
    state ={
        dogArr: [],
        num: ''
    }
    GetDog = () =>{
        const {num} = useParams();
        try{
            let dogAmount = `https://dog.ceo/api/breeds/image/random/{num}`
            let res = await axios.get(dogAmount)
            this.setState({
                dogArr: res.data.message
            })

        }catch(error){
            this.setState({
                dogArr: res.data.message
            })

        }
        return(
            let dogs = this.state.dogArr.map(dog =>{
                return <>
            })
            <div>
                {num}
            </div>
        )
    }
}

export default MultipleDogs