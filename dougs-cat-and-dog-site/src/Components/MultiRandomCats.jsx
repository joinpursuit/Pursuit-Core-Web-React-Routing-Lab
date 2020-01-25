import React, { Component } from 'react'
import axios from 'axios'

class MultiRandomCats extends Component {
    constructor() {
        super();
        this.state = {
            url: '',
            catNum: 1,
            catArr: []
        }
    }

    handleNumChange = (e) => {
        this.setState({
            catNum: Number(e.target.value)
        })
    }

    componentDidMount() {
        this.getCatPictures()
    }

    handleNewCatBtn = () => {
        const catURL = this.state.url;
        let catNum = this.state.catNum;
        let catArr = this.state.catArr
        for(let i = 0; i < catNum; i++) {
            this.getCatPictures()
            catArr.push(catURL)
            this.setState({
                catArr: catArr
            })
        }
        console.log("CatArr", catArr)
    }

    getCatPictures = async () => {
        let catAPIURL = `https://api.thecatapi.com/v1/images/search`

        try {
            const { data } = await axios.get(catAPIURL)
            console.log(data)
            this.setState({
                url: data[0].url,
            })

        } catch (error) {
            console.log('err: ', error)
        }

    }

    render() {
        const { catArr } = this.state
        let catList = []
        for(let catImg of catArr) {
            catList.push(<img src={catImg} alt="Pawesome cat"></img>)
        }
        return (
            <div>
                <h1>Multiple Random Cats!</h1>
                <input type="number" value={this.state.catNum} onChange={this.handleNumChange} min="1" max="10"/>
                <button onClick={this.handleNewCatBtn}>GET MORE CATS!</button>
                {catList}
            </div>
        )
    }
}

export default MultiRandomCats