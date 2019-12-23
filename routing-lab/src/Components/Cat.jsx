import React from 'react';
import axios from 'axios';

class Cat extends React.Component {
    constructor(){
        super();
        this.state = {
            url: ''
        }
    }

    render(){
        return (
            <h1>Cats</h1>
        )
    }
}

export default Cat;