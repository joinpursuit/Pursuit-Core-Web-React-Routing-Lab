import React from 'react';
import axios from 'axios';
import ImgListItem from './imgListItem'

class randomCatandDog extends React.Component {
    constructor(){
        super();
        this.state = {
            urls: [],
            dogNum: 0,
            catNum: 0
        }
    }

    componentDidMount = () => {
        let dogs = Math.floor((Math.random() * 10) + 1)
        let cats = Math.floor((Math.random() * 10) + 1)
        this.setState({
            dogNum: dogs,
            catNum: cats
        })
        this.fetchDogUrls(dogs, cats)
    }

    fetchDogUrls = async (num1, num2) => {
        // const {dogNum} = this.state
        // console.log(dogNum)
        let url = `https://dog.ceo/api/breeds/image/random/${num1}`
        try {
        let {data: {message}} = await axios.get(url)
        this.setState({
            urls: message
        })
     } catch (err){
         console.log(err)
     } 
     this.fetchCatUrls(num2)
    }

    fetchCatUrls = async (num) => {
        const {urls} = this.state 
        let arrCopy = [...urls]
        let url = `https://api.thecatapi.com/v1/images/search?limit=${num}&page=0&order=Desc`
        try {
        let {data} = await axios.get(url)
        let arr = data.map(el => {return el.url})
        arr.forEach(el => {arrCopy.push(el)})
        this.setState({
            urls: arrCopy
        })
     } catch (err){
         console.log(err)
     } 

    }

    render(){
        // console.log(this.state)
        const {urls} = this.state
        let mappedArr = urls.map(el => {
            return (
                <ImgListItem
                img={el}
                key={el}
                ></ImgListItem>
            )
        })
        return (
            <div>
             <h1>Both Cat and Dogs</h1>
            <ul>
            {mappedArr}
            </ul>
            </div>
        )
    }
}

export default randomCatandDog;