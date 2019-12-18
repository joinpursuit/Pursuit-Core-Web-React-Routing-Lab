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
			num_img: 1,
			urls: [],
			breeds: []
		}
	}
	async componentDidMount() {
		const [, animal , breed, num_img] = this.props.match.url.split('/');
		await this.setState({ ...this.state, breed: breed || 'random', num_img: num_img || 1, animal});
		console.log(this.state);
		this.fetchDog();
		this.fetchBreeds();
	}
	handleClick = (e) => {
		e.preventDefault();
		this.fetchDog();
	}
	handleChange = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value })
	}
	fetchDog = () => {
		const { breed, num_img } = this.state;

		let url = `https://dog.ceo/api/
		${breed === '' || breed === 'random' ? 'breeds/image/random/' : `breed/${breed}/images/random/`}
		${num_img}`;

		axios(url)
			.then(res => this.setState({ ...this.state, urls: res.data.message }))
			.catch(err => console.log(err));
	}
	fetchBreeds = () => {
		axios('https://dog.ceo/api/breeds/list/all')
			.then(res => this.setState({...this.state, breeds: Object.keys(res.data.message)}))
			.catch(err => console.log(err));
	}
	displayImgs = () => {
		return this.state.urls.map((src, i) => <img src={src} alt='dog' key={i}/>);
	}
	render() {
		return (
			<div>
				<header><Link to="/">Home</Link></header>
				<main>
					<ImageForm animal={this.props.match} changeState={this.handleChange} handleSubmit={this.handleClick} allBreeds={this.state.breeds}/>
					<Button state={this.state} handleClick={this.handleClick} />
				</main>
				<div>
					{this.displayImgs()}
				</div>
			</div>
		)
	}
}

export default Dog; 
