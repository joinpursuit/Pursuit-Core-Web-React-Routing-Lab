import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ImageForm from './ImageForm'

export class Dog extends Component {
	constructor() {
		super();
		this.state = {
			breed: '',
			num_img: null
		}
	}
	handleClick = () => {
		console.log(this.history)
	}
	render() {
		console.log(this.props.match)
		return (
			<div>
				<header><Link to="/">Home</Link></header>
				<main>
					<ImageForm />
				</main>
			</div>
		)
	}
}

export default Dog; 
