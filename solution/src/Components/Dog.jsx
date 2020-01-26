import React, { Component } from 'react';
import axios from 'axios';

class Dog extends Component {
    constructor(props) {
        super();
        this.state = {
            urls: [],
            number: 1,
            param: props.param
        }
    }
    componentDidMount() {
        console.log("Component mounted");
        this.handleRandomDog()
    }   
    handleRandomDog = async () => {
        const { number, param } = this.state;
        if(param > 1){
            let url = `https://dog.ceo/api/breeds/image/random/${param}`;
            let obj = await axios.get(url).then((res) => {return res.data.message});
            this.setState({
                urls: obj
            })
        }
        else {
            let url = `https://dog.ceo/api/breeds/image/random/${number}`;
            let obj = await axios.get(url).then((res) => {return res.data.message});
            this.setState({
                urls: obj
            })
        }
    }
    handleNumDogs = (e) => {
        this.setState({
            number: parseInt(e.target.value)
        });
    }
    render() {
        const { urls } = this.state;
        let images = urls.map((el) => {
            return (
                <img src={el} alt={el} key={el} />
            )
        })
        return (
            <div>
                <h1> Dawgz </h1>
                <div className="images">
                    {images}
                </div>
            </div>
        )
    }
}
export default Dog;