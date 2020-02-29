import React, { Component } from "react";
import axios from "axios";
import Dog from "./Dogs";
import { useParams } from "react-router-dom";

class MultipleRandomDogs extends Component {
  state = {
    manyDogs: [],
    numberOfDogs: 1
  };

  componentDidMount() {
    const { numberOfDogs } = this.state;
    if (numberOfDogs) {
      this.getManyRandomDogs(numberOfDogs);
    }
  }

  getManyRandomDogs = async numberOfDogs => {
    try {
      const dogURL = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;
      let res = await axios.get(dogURL);
      this.setState({ manyDogs: res.data.message });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let manyDogPics = this.state.manyDogs.map(dog => {
      return <Dog img={dog} key={dog} />;
    });
    return <div>{manyDogPics}</div>;
  }
}

export default MultipleRandomDogs;
