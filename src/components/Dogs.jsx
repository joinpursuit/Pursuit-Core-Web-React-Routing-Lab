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
      imgUrls: null
    };
  }

  componentDidMount() {
    this.apiComm();
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
    this.setState({
        imgUrls: response.data.message
    });
  }

  render() {
    const { imgUrls } = this.state;
    return (
      <>
      <Console />
      <Viewer 
        imgUrls={imgUrls}
      />
      </>
    );
  }
}
