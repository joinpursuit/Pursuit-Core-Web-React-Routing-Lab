import React, { Component } from 'react'

class MultiRandomCats extends Component {
    constructor() {
        super();
        this.state = {
            urls: [],
            catNum: 1,
        }
    }

    render() {
        return (
            <div>
                <h1>Multiple Random Cats!</h1>
            </div>
        )
    }
}

export default MultiRandomCats