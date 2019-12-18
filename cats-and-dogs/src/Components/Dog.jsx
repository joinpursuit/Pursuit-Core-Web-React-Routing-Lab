import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ImageForm from './ImageForm';
import Button from './Button';
import axios from 'axios';

export class Dog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			breed: 'random',
			num_img: 1
		}
	}
	componentDidMount() {
		const [, animal , breed, num_img] = this.props.match.url.split('/');
		this.setState({ ...this.state, breed: breed || 'random', num_img: num_img || 1, animal});
		this.fetchDog();
	}
	handleClick = () => {
		this.fetchDog();
	}
	handleChange = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value })
	}
	fetchDog = () => {
		const { breed, num_img } = this.state;

		let url = `https://dog.ceo/api/
		${breed === 'random' ? 'breeds/image/random/' : `breed/${breed}/images/random/`}
		${num_img}`;

		axios(url)
			.then(res => this.setState({ ...this.setState, urls: res.data.message }))
			.catch(err => console.log(err));
	}

	render() {
		console.log(this.props.match)
		return (
			<div>
				<header><Link to="/">Home</Link></header>
				<main>
					<ImageForm animal={this.props.match} changeState={this.handleChange} />
					<Button state={this.state} handleClick={this.handleClick} />
				</main>
			</div>
		)
	}
}

export default Dog; 
