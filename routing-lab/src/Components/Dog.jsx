import React from 'react';
import axios from 'axios';

class Dog extends React.Component {
    constructor(){
        super();
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        console.log('component mounted')
        this.handleRandomDog()
    }

    handleRandomDog = async () => {
        let url = "https://dog.ceo/api/breeds/image/random"
        let {data} = await axios.get(url)
        this.setState({
            url: data.message
        })
    }


    render(){
        const {url} = this.state
        const {handleRandomDog} = this
        return (
            <div>
            <h1>Dogs</h1>
            <img src={url}  alt="dog pic"></img><br></br>
            <button onClick={handleRandomDog}>New Dog</button>
            </div>
        )
    }
}

export default Dog;