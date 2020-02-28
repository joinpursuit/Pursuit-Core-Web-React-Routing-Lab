import React from 'react'
import axios  from 'axios'
import Image from './Image'
import { render } from 'react-dom'
class RandCat extends React.Component{
state ={img: ''}
componentDidMount(){
    this.fetchCatImage()
}


fetchCatImage = async ()=>{
    try{
        let response = await axios.get("")
      //signed up but the pursuit email kept giving me errors
        this.setState({img: response.data.message})

    }catch(error){
        this.setState({img:""})
        console.log(error)

    }
}
render(){
    return(
        <div>
            <Image img={this.state.img}/>
            <button onClick ={this.fetchCatImage}> Get image</button>
            {this.state.img}
        </div>
    )
}
}

export default RandCat;