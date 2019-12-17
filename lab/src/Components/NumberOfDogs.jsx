import React from 'react';
import DogDisplay from "./DogDisplay"
import axios from 'axios';


class NumberOfDogs extends React.Component {

    constructor() {
        super();
        this.state = {
          url: []
        }
      }
    
        componentDidMount() {
            this.getDogPic();
            this.mappedPics();
        }

        
        mappedPics = () => {
            let picsArr = [];
            for (let i of this.state.url) {
                picsArr.push(<DogDisplay url={i} />)
            }
            return picsArr;
        }
        
        getDogPic = async () => {
            const { match: { params } } = this.props;
            let dogAPI = `https://dog.ceo/api/breeds/image/random/${params.num}`;
        
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
            {this.mappedPics()}
            </div>       
        )
    }
}


export default NumberOfDogs;