import React from 'react';
import DogDisplay from "./DogDisplay"
import axios from 'axios';


class NumberOfCats extends React.Component {

    constructor() {
        super();
        this.state = {
          url: []
        }
      }
    
        componentDidMount() {
            this.getCatPic();
            this.mappedPics();
        }

        
        mappedPics = () => {
            let picsArr = [];
            for (let i of this.state.url) {
                picsArr.push(<DogDisplay url={i} />)
            }
            return picsArr;
        }
        
        getCatPic = async () => {
            const { match: { params } } = this.props;
            let catAPI = `https://api.thecatapi.com/v1/images/search?limit=${params.num}`;
        
            try {
            const response = await axios.get(catAPI)
                .then((data) => {
                console.log(data)
                let arr =[];
                for(let i of data.data) {
                    console.log(i)
                    arr.push(i.url)
                }
                this.setState({
                    url: arr
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


export default NumberOfCats;