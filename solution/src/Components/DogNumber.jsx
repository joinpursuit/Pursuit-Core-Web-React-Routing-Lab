import React, { Component } from 'react';
import Dog from './Dog';

class DogNumber extends Component {
    constructor(props) {
        super();
        this.state = {
            number: props.match.params.num
        }
    }
    render() {
        const {number} = this.state
        return(
            <div className="num-dogs">
                < Dog param = {number}/>
            </div>
        )
    }
}

export default DogNumber;