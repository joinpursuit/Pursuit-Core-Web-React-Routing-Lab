import React, { Component } from 'react';
import axios from 'axios';

class CatNumber extends Component {
    constructor(props) {
        super();
        this.state = {
            urls: [],
            number: props.match.params.num
        }
    }
    componentDidMount = () => {
        this.handleGetCats();
    }
    handleGetCats = async () => {
        let { number } = this.state;
        let url = `https://api.thecatapi.com/v1/images/search?limit=${parseInt(number)}`
        try {
            let catsObj = await axios.get(url).then((res) => { return res.data });
            let catsArr = catsObj.map((el) => { return el.url })
            this.setState({
                urls: catsArr
            })
        }
        catch (err) {
            console.log("no cats")
        }
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
                <h1>Testing cat number</h1>
                <div className="images">
                    {images}
                </div>
            </div>
        )
    }
}
export default CatNumber;