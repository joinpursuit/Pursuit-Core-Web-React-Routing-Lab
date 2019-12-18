import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ImageForm from './ImageForm'

export class Cat extends Component {
    render() {
        return (
            <div>
                <header><Link to="/">Home</Link></header>
                <main>
                    <ImageForm animal={this.props.match} />
                </main>
            </div>
        )
    }
}

export default Cat;