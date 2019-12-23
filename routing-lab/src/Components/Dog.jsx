import React from 'react';
import axios from 'axios';

class Dog extends React.Component {
    constructor(){
        super();
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        console.log('component mounted')
    }

    handleRandomDog = async () => {
        
    }

    render(){
        return (
            <div>
            <h1>Dogs</h1>
            </div>
        )
    }
}

export default Dog;