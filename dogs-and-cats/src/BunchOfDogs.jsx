import React from 'react';
import axios from 'axios';
import './App.css';
import Animal from './Animal';


class BunchOfDogs extends React.Component {
	constructor(props){
		super();
		this.state = {
			doggieBunch: []
		};
	}

	getDoggie = async () => {
		let response = await axios.get(`https://dog.ceo/api/breeds/image/random/${this.props.match.params.num	}`);
		console.log(response);
		console.log(this.props.match.params)
		this.setState({
			doggieBunch: response.data.message
		});
	}

	componentDidMount(){
		this.getDoggie();
	}



	render(){
		let dogs = this.state.doggieBunch.map((elem) => {
			return (<Animal url={elem} type='pupper'/>);

		});
		return(
			<div>
				{dogs}
			</div>
		)
	}
}

export default BunchOfDogs;