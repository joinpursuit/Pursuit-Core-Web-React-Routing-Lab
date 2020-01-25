/*
Joseph P. Pasaoa
Stage Component | Cats and Dogs Fake Server Lab
*/


/* IMPORTS */
    // external
    import React, { Component } from 'react';

    // local
    import './Stage.css';
    import Console from './Console';
    import Viewer from './Viewer';
    import ImageCard from './ImageCard';
    // import HomePage from '../pages/HomePage';
    // import Dogs from './components/Dogs';
    // import Cats from './components/Cats';
    // import CatsAndDogs from './components/CatsAndDogs';
    // import Catch404 from './components/Catch404';


/* COMPONENT */
export default class Stage extends Component {
  state = {
    images: [],
    quantityNum: 1
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }


  render () {
    const { images, quantityNum } = this.state;

    const onDisplay = images.map(image => {
        return (
          <ImageCard
            url={image.url} 
            title={image.title} 
          />
        );
    });


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
