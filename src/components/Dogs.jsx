/*
Joseph P. Pasaoa
Dogs Component | Cats & Dogs Fake Server
*/


/* IMPORTS */
import React, { Component } from 'react';
import axios from 'axios';

// import './Dogs.css';
import Console from './Console';
import Viewer from './Viewer';


/* MAIN */
export default class Dogs extends Component {
  constructor() {
    super();
    this.state = {
      imgData: null
    };
  }

  componentDidMount() {
    this.apiComm();
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps)
    console.log('props', this.props);
    if (prevProps.match.params !== this.props.match.params) {
      this.apiComm();
      console.log('---- UPDATED -----')
    }
  }

  apiComm = async () => {
    let response = null;
    let url = "https://dog.ceo/api/breeds/image/random";
    if (this.props.match.params.num) {
      url = url + "/" + this.props.match.params.num;
    };
    try {
      response = await axios.get(url);
    } catch(err) {
      console.log("error: ", err);
    }
    console.log(response);
    this.setState({
        imgData: response.data.message
    });
  }

  makeImg = (url) => {
    return (
      <img src={url} alt="dog" key={url} />
    )
  }

  render() {
    const { imgData } = this.state;
    let imgArray = [];
    if (imgData) {
      if (Array.isArray(imgData)) {
        imgArray = imgData.map(url => this.makeImg(url));
      } else {
        console.log("single");
        imgArray = this.makeImg(imgData);
      }
    }

    return (
      <>
      <console>
        <Console />
      </console>
      <viewer>
        <Viewer 
          imgArray={imgArray}
        />
      </viewer>
      </>
    );
  }
}
