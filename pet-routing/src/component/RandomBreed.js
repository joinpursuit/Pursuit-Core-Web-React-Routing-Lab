import React from "react";
import axios from "axios";

class RandomBreed extends React.Component{
    state = {
        breeds:[],
        imageUrls:[]
    }

    async componentDidMount() {
        try{
            let res = await axios.get("https://dog.ceo/api/breeds/list/all");
            let list = res.data.message
            this.setState({breeds:Object.keys(list)})
        } catch(error) {
            console.log(error)
        }
    }
    
    handleBreed = (breed) => {
        console.log(breed)
        debugger
    }

    render(){
        const options = this.state.breeds.map((breed, index) => {
            return <option key={index} value={breed}>{breed}</option>
        })
        return(
            <div>
                <select>
                    <option placeholder="Select A Breed" disabled onChange={(e => {this.handleBreed(e.target.value)})}>Select A Breed</option>
                    {options}
                </select>
            </div>
        )
    }

}

export default RandomBreed;