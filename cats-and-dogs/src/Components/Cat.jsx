import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageForm from './ImageForm';
import Button from './Button';
import axios from 'axios';

export class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breed: '',
            breedId: '',
            num_img: 1,
            urls: [],
            breeds: []
        }
    }
    async componentDidMount() {
        const [, animal, breed, num_img] = this.props.match.url.split('/');
        await this.setState({ ...this.state, breed: breed || '', num_img: num_img || 1, animal });
        console.log(this.state);
        this.state.breed && this.fetchCat();
        this.fetchBreeds();
    }
    handleClick = (e) => {
        e.preventDefault();
        this.fetchCat();
    }
    handleChange = (e) => {
        if (e.target.name === 'num_img') {
            return this.setState({
                num_img: e.target.value
            })
        }
        const { text, value } = e.target.options[e.target.options.selectedIndex];
        console.log(text, value)
        this.setState({
            ...this.state,
            breed: text,
            breedId: value
        })
    }
    fetchCat = () => {
        const { breedId, num_img } = this.state;
        let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=${num_img}`;

        axios(url, { headers: { 'x-api-key': '2d92df6e-633e-445e-a092-221c04f56c3c' }})
            .then(res => this.setState({ ...this.state, urls: res.data }))
            .catch(err => console.log(err));
    }
    fetchBreeds = () => {
        axios('https://api.thecatapi.com/v1/breeds',
            { headers: { 'x-api-key': '2d92df6e-633e-445e-a092-221c04f56c3c' } })
            .then(res => this.setState({
                ...this.state, breeds: res.data.map(breed => {
                    return { 'name': breed.name, 'breedId': breed.id }
                })
            }))
            .catch(err => console.log(err));
    }
    displayImgs = () => {
        return this.state.urls.map((src, i) => <img src={src} alt='cat' key={i} />);
    }
    render() {
        return (
            <div>
                <header><Link to="/">Home</Link></header>
                <main>
                    <ImageForm animal={this.props.match} changeState={this.handleChange} handleSubmit={this.handleClick} allBreeds={this.state.breeds} />
                    <Button state={this.state} handleClick={this.handleClick} />
                </main>
                <div className="images">
                    {this.state.urls.map((ele, i) => <img src={ele.url} alt='cat' key={i} />)}
                </div>
            </div>
        )
    }
}

export default Cat;