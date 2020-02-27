import React from 'react'
import axios from 'axios'

class Dogs extends React.Component{
    state = {
        imgURL: ''
    }

    fetchDogPhoto = async() =>{
        try{
            let res = await axios.get("https://dog.ceo/api/breeds/image/random");
            this.setState({
                imgURL: res.data.message
            })
        }catch(error){
            this.setState({
                imgURL: ''
            })
        }
    }

    render(){
        const {imgURL} = this.state
        return(
            <div>
                <img alt="Dog" src={imgURL}></img>
                <p>
                    <button onClick={this.fetchDogPhoto}>New Dog</button>
                </p>
            </div>
        )
    }

}

export default Dogs;