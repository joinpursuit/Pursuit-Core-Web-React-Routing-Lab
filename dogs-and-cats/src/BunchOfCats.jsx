import React from 'react';
import axios from 'axios';
import './App.css';
import Animal from './Animal';


class BunchOfCats extends React.Component {
	constructor(props){
		super();
		this.state = {
			kittyBunch: []
		};
	}

	getKitty = async () => {
		let response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${this.props.match.params.num}`);
		console.log(response);
		console.log(this.props.match.params)
		this.setState({
			kittyBunch: response.data
		});
	}

	componentDidMount(){
		this.getKitty();
	}



	render(){
		let cats = this.state.kittyBunch.map((elem) => {
			return (<Animal url={elem.url} type='kitty'/>);

		});
		return(
			<div>
				{cats}
			</div>
		)
	}
}

export default BunchOfCats;