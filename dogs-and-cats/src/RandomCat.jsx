import React from 'react';
import axios from 'axios';
import './App.css';
import Animal from './Animal'



class RandomCat extends React.Component {

	constructor(){
		super();
		this.state = {
			cat:''
		}

	}

	componentDidMount(){
		console.log('I always run');
		this.getKitty();

	}

	getKitty = async () => {
		let response = await axios.get('https://api.thecatapi.com/v1/images/search');
		console.log(response);
		this.setState({
			cat: response.data[0].url
		});
	}


	render() {
		return(
			<div>
				<Animal url={this.state.cat} type='kitty'/>
				<div><button onClick={this.getKitty}>Get a Cat</button></div>

			</div>);
	}
}

export default RandomCat;