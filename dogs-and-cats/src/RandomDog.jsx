import React from 'react';
import axios from 'axios';
import './App.css';
import Animal from './Animal'



class RandomDog extends React.Component {

	constructor(){
		super();
		this.state = {
			dog:''
		}

	}

	componentWillMount(){
		console.log('I always run');
		this.getDoggie();

	}

	getDoggie = async () => {
		let response = await axios.get('https://dog.ceo/api/breeds/image/random');
		console.log(response);
		this.setState({
			dog: response.data.message
		});
	}


	render() {
		return(
			<div>
				<Animal url={this.state.dog} type='pupper'/>
				<div><button onClick={this.getDoggie}>Get a Pupper</button></div>

			</div>);
	}
}

export default RandomDog;