import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Welcome To Doug's Cat & Dog Page!</h1>
                <img id="bunsen" src="/Bunsen-Window.jpg" alt="my cat"></img>
            </div>
        )
    }
}

export default Home