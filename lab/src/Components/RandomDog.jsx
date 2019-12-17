import React from 'react';
import DogDisplay from "./DogDisplay"
import axios from 'axios';


class RandomDog extends React.Component {

    constructor() {
        super();
        this.state = {
          url: ""
        }
      }
    
        componentDidMount() {
            this.getDogPic();
            this.printPic();
        }

        printPic = () => {
            return <DogDisplay url = {this.state.url}></DogDisplay>
        }
        
        getDogPic = async () => {
            let dogAPI = `https://dog.ceo/api/breeds/image/random`;
        
            try {
            const response = await axios.get(dogAPI)
                .then(({ data: { message }}) => {
                console.log(message)
                this.setState({
                    url: message
                })
                })
            } catch (error) {
                console.log("ERROR", error)
                }
            }

      
      render () {
        return (
            <div>
            <button onClick={this.getDogPic}>Get Dog Random Picture</button>
            {this.printPic()}
            </div>       
        )
    }
}


export default RandomDog;