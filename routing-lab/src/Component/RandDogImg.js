import React from 'react'
import axios  from 'axios'
import Image from './Image'
class RanDogImg extends React.Component{
    state = {img:""}
    componentDidMount(){
        this.fetchImage()
    }

    fetchImage = async ()=>{
        try{
            let response = await axios.get("https://dog.ceo/api/breeds/image/random")
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
                <button onClick ={this.fetchImage}> Get image</button>
                {this.state.img}
            </div>
        )
    }
}


export default  RanDogImg