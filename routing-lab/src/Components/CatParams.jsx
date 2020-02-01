import React from 'react';
import axios from 'axios';
import ImgListItem from './imgListItem'

class CatParams extends React.Component {
    constructor(){
        super();
        this.state = {
            urls: [],
            num: 0
        }
    }

    handleInput = (e) => {
       // console.log(e.target.value)
        this.setState({
            num: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {num} = this.state
        let url = `https://api.thecatapi.com/v1/images/search?limit=${num}&page=0&order=Desc`
        try {
        let {data} = await axios.get(url)
     //   console.log(data)
        let newArr = data.map(el => {return el.url})
    //    console.log(newArr)
        this.setState({
            urls: newArr
        })
     } catch (err){
         console.log(err)
     } 

    }


    render(){
        const {urls, num} = this.state
        const {handleSubmit, handleInput} = this
        if (urls.length === 0) {
        return (
            <div>
             <form onSubmit={handleSubmit}>
                 <input placeholder="enter number of cats" onChange={handleInput}></input>
                 <button>Submit</button>
             </form>
            </div>
        )
        } else {
            let arr = urls.map(el => {
                return (
                    <ImgListItem
                    img={el}
                    key={el}
                    ></ImgListItem>
                )
            })
            return(
                <div>
                    <h1> {num} Cats </h1>
                    <form onSubmit={handleSubmit}>
                    <input placeholder="enter number of cats" onChange={handleInput}></input>
                    <button>Submit</button>
                    </form>
                    <ul>
                      {arr}
                    </ul>
                </div>
            )
        }
    }
}

export default CatParams;