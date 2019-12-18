import React, { Component } from 'react'

class MultiRandomDogs extends Component {
    constructor() {
        super();
        this.state = {
            urls: [],
            dogNum: 1,
        }
    }

    render() {
        return (
            <div>
                <h1>Multiple Random Dogs!</h1>
            </div>
        )
    }
}

export default MultiRandomDogs