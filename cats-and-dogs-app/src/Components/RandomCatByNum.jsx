import React from 'react'
import axios from 'axios'

class RandomCatByNum extends React.Component {
    constructor(){
        super()
        this.state = {
            imgURLS : [],
            numberOfCats: 1,
            catImgURLS: []
        }
    }
    componentDidMount = () => {
        this.fetchMultipleCatImages()
    }

    
    handleNumberOfCats = async (event) => {
        console.log(event.target.value)
        this.setState({
            numberOfCats: event.target.value
        })
    }
    
    fetchMultipleCatImages = async () => {

        const {numberOfCats} = this.state
        let dogAPI = `https://api.thecatapi.com/v1/images/search?limit=${numberOfCats}`
    
        try{
            const result = await axios.get(dogAPI)
            const catImgData = result.data
            console.log(catImgData)
        } catch(error){
            console.log('err', error)
        }
    }
    displayCatImages = async () => {
        const {imgURLS} = this.state
        const catImgArr = []

        imgURLS.map((url) => {
             catImgArr.push(url.url)
        })
        console.log(catImgArr)
        this.setState({
            catImgURLS: catImgArr
        })
    }
    render() {
        const {catImgURLS, numberOfCats} = this.state
        return (
            <div>
                <div>
                    <h1>RandomCatByNum</h1>
                    <input type='number' onChange={this.handleNumberOfCats} value={numberOfCats}></input>
                    <button onClick={this.displayCatImages}>Get Cats</button>
                </div>
                <div>
                    <ul>
                        {catImgURLS.map(url => <img src= {url} alt='cat'></img>)}
                    </ul>
                </div>
            </div>
        )
    }
}



export default RandomCatByNum