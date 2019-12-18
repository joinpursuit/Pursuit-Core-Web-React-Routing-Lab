import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ImageForm from './ImageForm';
import Button from './Button';

export class Dog extends Component {
	constructor() {
		super();
		this.state = {
			breed: '',
			num_img: 1
		}
	}
	handleClick = () => {
		console.log(this.history)
	}
	handleChange = (e) => {
		console.log(e.target.name, e.target.value)
		this.setState({...this.state, [e.target.name]: e.target.value})
	}
	render() {
		console.log(this.props.match)
		return (
			<div>
				<header><Link to="/">Home</Link></header>
				<main>
					<ImageForm animal={this.props.match} changeState={this.handleChange} />
					<Button url={this.props.match.url} />
				</main>
			</div>
		)
	}
}

export default Dog; 
