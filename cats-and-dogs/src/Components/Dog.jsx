import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ImageForm from './ImageForm';
import Button from './Button';
import axios from 'axios';

const Dog = (props) => {
	const [, animal, breed, num_img] = props.match.url.split('/');
	const [state, setState] = useState({urls: [], allBreeds: [], num_img: num_img, animal: animal, breed: 'random'})

	const get = async () => {
		await setState({ ...state, breed: breed || '', num_img: num_img || 1, animal: animal });
		console.log(state);
		state.allBreeds.length > 0 && fetchDog();
	}

	useEffect(() => {
		fetchBreeds();
		get()
	}, [])



	const handleClick = (e) => {
		e.preventDefault();
		fetchDog();
	}

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const fetchDog = () => {
		const { breed, num_img } = state;

		let url = `https://dog.ceo/api/
		${breed === '' || breed === 'random' ? 'breeds/image/random/' : `breed/${breed}/images/random/`}
		${num_img}`;

		axios(url)
			.then(res => setState({ ...state, urls: res.data.message }))
			.catch(err => console.log(err));
	}

	const fetchBreeds = () => {
		axios('https://dog.ceo/api/breeds/list/all')
			.then(res => setState({ ...state, allBreeds: Object.keys(res.data.message) }))
			.catch(err => console.log(err));
	}

	return (
		<div>
			<header><Link to="/">Home</Link></header>
			<main>
				<ImageForm animal={props.match} changeState={handleChange} handleSubmit={handleClick} allBreeds={state.allBreeds} />
				<Button state={state} handleClick={handleClick} />
			</main>
			<div className="images">
				{state.urls.map((src, i) => <img src={src} alt='dog' key={i} />)}
			</div>
		</div>
	)

}

export default Dog; 
