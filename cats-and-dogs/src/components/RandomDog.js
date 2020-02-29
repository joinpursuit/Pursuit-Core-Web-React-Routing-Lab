import React, {Component} from "react";
import axios from "axios";

class RandomDog extends Component {
  state = {
    dogImg: ""
  }

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog = async () => {
    try {
      let res = await axios.get(`https://dog.ceo/api/breeds/image/random`);
      this.setState({ dogImg: res.data.message });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h3>Random Dog API</h3>
        <button onClick={this.fetchDog}>Get Dog</button>
        <br />
        <img src={this.state.dogImg} alt={""}></img>
      </div>
    )
  }
}

export default RandomDog;