import React from 'react';
import './App.css';



const Animal = (props) => {
	return (
		<img className='img' alt={props.type} src={props.url}/>)
}

export default Animal;