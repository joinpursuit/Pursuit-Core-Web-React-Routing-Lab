import React from 'react'
import axios  from 'axios'
import Image from './Image'
class RandCat extends React.Component{
state ={img: ''}
componentDidMount(){
    this.fetchCatImage()
}


fetchCatImage = async ()=>{
    try{
        let response = await axios.get("https://api.thecatapi.com/v1/images/search")
        debugger
        this.setState({img: response.data[0].url})

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