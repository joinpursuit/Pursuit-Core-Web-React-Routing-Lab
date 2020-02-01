import React from 'react';
import axios from 'axios';
import OptionTags from './OptionTags'
import ImgListItem from './imgListItem'


class DogBreed extends React.Component {
    constructor(){
        super();
        this.state = {
            url: [], 
            breeds: [],
            selectedBreed: ''
        }
    }


    componentDidMount = async () => {
        try {
            let url = "https://dog.ceo/api/breeds/list/all"
            let {data:{message}} = await axios.get(url)
            this.updateState(message)
            
        } catch (err) {
            console.log(err)
        }

    } 

    updateState = (message) => {
        let arr = []
        for (let i in message){
            arr.push(i)
        }
        this.setState({
            breeds: arr
        })   
    }

    updateSelectedBreed = (value) => {
        console.log(value)
        this.setState({
            selectedBreed: value
        })
        this.fetchDogPic(value)
    }

    fetchDogPic = async (value) => {
        // const {selectedBreed} = this.state
        try {
            let url = `https://dog.ceo/api/breed/${value}/images/random`
            let {data : {message}} = await axios.get(url)
            this.setState({
                url: [message]
            })
        } catch (err) {
            console.log(err)
        }

    }

    render(){
        const {url, breeds} = this.state 
        let newArr = breeds.map(el => {
            return (
                <OptionTags
                breed={el}
                key={el}
                ></OptionTags>
            )})
        let arr = url.map(el => {
                return (
                    <ImgListItem
                    img={el}
                    key={el}
                    ></ImgListItem>
                )
            })
        return (
            <div>
                <select onChange={(event) => this.updateSelectedBreed(event.target.value)}>
                    <option>Select a dog breed</option>
                    {newArr}
                </select>
                <ul>
                    {arr}
                </ul>
            </div>
        )
    }
}

export default DogBreed;