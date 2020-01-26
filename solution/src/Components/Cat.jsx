import React, {Component} from 'react';
// import axios from 'axios';

class Cat extends Component {
    constructor() {
        super();
        this.state = {
            cat: true
        }
    }
    render() {
        return (
            <h1> Gatos </h1>
        )
    }
}
export default Cat;