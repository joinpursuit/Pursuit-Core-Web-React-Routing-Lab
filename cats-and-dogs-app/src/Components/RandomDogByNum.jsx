import React from 'react'
import axios from 'axios'

class RandomDogByNum extends React.Component {
    constructor(){
        super()
        this.state = {
            imgURLS: [],
            numberOfDogs: 1
        }
    }

    componentDidMount = () => {
        this.fetchMultipleDogImages()
    }

    
    handleNumberOfDogs = async (event) => {
        console.log(event.target.value)
        this.setState({
            numberOfDogs: event.target.value
        })
    }
    
    fetchMultipleDogImages = async () => {

        const {numberOfDogs} = this.state
        let dogAPI = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
    
        try{
            const result = await axios.get(dogAPI)
            const dogImgData = result.data.message
            this.setState({
                imgURLS: dogImgData
            })
        } catch(error){
            console.log('err', error)
        }
    }
    render(){
        const {imgURLS, numberOfDogs} = this.state
        return (
            <div>
                <div>
                    <h1>RandomDogByNum</h1>
                    <input type='number' onChange={this.handleNumberOfDogs} value={numberOfDogs}></input>
                    <button onClick={this.fetchMultipleDogImages}>Get Dogs</button>
                </div>
                <div>
                    <ul>
                        {imgURLS.map(url => <img src= {url} alt='doggy'></img>)}
                    </ul>
                </div>
            </div>
        )
    }
}


export default RandomDogByNum