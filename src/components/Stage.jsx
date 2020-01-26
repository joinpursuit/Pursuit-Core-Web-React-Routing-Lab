/*
Joseph P. Pasaoa
Stage Component | Cats and Dogs Fake Server Lab
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';
    import { withRouter } from 'react-router-dom';
    import axios from 'axios';

    // local
    import './Stage.css';
    import Console from './Console';
    import Viewer from './Viewer';
    import ImageSpot from './ImageSpot';
    import ImageCard from './ImageCard';
    // import HomePage from '../pages/HomePage';
    // import Dogs from './components/Dogs';
    // import Cats from './components/Cats';
    // import CatsAndDogs from './components/CatsAndDogs';
    // import Catch404 from './components/Catch404';


/* COMPONENT */
class Stage extends Component {
  state = {
    images: [],
    quantityNum: 5
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getImages();
  }


  axiosCall = async (url) => {
    try {
      return await axios.get(url);
    } catch (err) {
      throw new Error("axios miss");
    }
  }

  getImages = async () => {
    const path = this.props.location.pathname;
    const howMany = this.state.quantityNum;
    let response, newImagesArr = null;
    switch (path) {
      case "/dogs/random/one":
        response = await this.axiosCall(`https://dog.ceo/api/breeds/image/random`);
        newImagesArr = [ response.data.message ];
        break;
      case "/dogs/random":
        response = await this.axiosCall(`https://dog.ceo/api/breeds/image/random/${howMany}`);
        newImagesArr = response.data.message;
        break;
      default:
        console.log("newImagesArr: ", newImagesArr);
        throw new Error("You're not supposed to be here.");
    }
    this.setState({ images: newImagesArr });
  }


  render () {
    const { images, quantityNum } = this.state;

    let onDisplay = null;
    if (images.length === 1) {
      onDisplay = <ImageSpot url={images[0]} />;
    } else {
      onDisplay = images.map(image => {
          return (
            <ImageCard
              key={image} 
              url={image} 
            />
          );
      });
    }


    return (
      <div id="stage">
        <Console 
          quantityNum={quantityNum} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
        />
        <Viewer 
          onDisplay={onDisplay} 
        />
      </div>
    );
  }
}


/* EXPORT */
export default withRouter(Stage);
