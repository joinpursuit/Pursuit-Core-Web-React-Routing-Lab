import React from 'react';
import DogDisplay from "./DogDisplay"
import axios from 'axios';


class RandomCat extends React.Component {

    constructor() {
        super();
        this.state = {
          url: ""
        }
      }
    
        componentDidMount() {
            this.getCatPic();
            this.printPic();
        }

        printPic = () => {
            return <DogDisplay url = {this.state.url}></DogDisplay>
        }
        
        getCatPic = async () => {
            let catAPI = `https://api.thecatapi.com/v1/images/search`;
        
            try {
            const response = await axios.get(catAPI)
                .then(({ data: { 0: { url }}}) => {
                console.log(url)
                this.setState({
                    url: url
                })
                })
            } catch (error) {
                console.log("ERROR", error)
                }
            }

      
      render () {
        return (
            <div>
            <button onClick={this.getCatPic}>Get Random Cat Picture</button>
            {this.printPic()}
            </div>       
        )
    }
}


export default RandomCat;