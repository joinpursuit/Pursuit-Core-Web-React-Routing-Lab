import React from 'react';
import axios from 'axios';
import Animal from './Animal';



class DogBreed extends React.Component{
	constructor(){
		super();
		this.state = {
			url: ''
		}
	}

	getDog = async () => {
		let response = await axios.get(`https://dog.ceo/api/breed/${this.props.match.params.breed}/images/random`);
		this.setState({
			url: response.data.message
		});
	}

	componentDidMount(){
		this.getDog();
	}

	render(){
		return(
			<Animal url={this.state.url} type='puppy' />
			);
	}

}

export default DogBreed;