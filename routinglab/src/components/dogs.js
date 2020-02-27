import React from "react";
import axios from "axios";

class Dogs extends React.Component {
  state = {
    src: ""
  };
  getRandomDog = async () => {
    try {
      let res = await axios.get("https://dog.ceo/api/breeds/image/random");
      this.setState({
        src: res.data.message
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { src } = this.state;
    return (
      <div>
        <button onClick={this.getRandomDog}>GET RANDOM DOG</button>
        <img src={src}></img>
      </div>
    );
  }
}

export default Dogs;
