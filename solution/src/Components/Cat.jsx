import React, { Component } from 'react';
import axios from 'axios';

class Cat extends Component {
    constructor(props) {
        super();
        this.state = {
            url: "",
        }
    }
    componentDidMount = () => {
        this.getRandomCat();
    }
    getRandomCat = async () => {
        const { number } = this.state;
        if(!number){
        let url = `https://api.thecatapi.com/v1/images/search`;
        try {
            let catObj = await axios.get(url).then((res) => { return res.data })
            let catUrl = catObj.map((el) => { return el.url })
            this.setState({
                url: catUrl
            })
        }
        catch (err) {
            console.log("no gatos")
        }
        }
    }
    render() {
        const { url } = this.state
        return (
            <div>
                <h1> Gatos </h1>
                <div className="images">
                    <img src={url} alt={url}/>
                </div>
            </div>

        )
    }
}
export default Cat;