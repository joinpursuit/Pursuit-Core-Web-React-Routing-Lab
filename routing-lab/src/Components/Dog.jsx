import React from 'react';
import axios from 'axios';
import {Link, Switch, Route } from 'react-router-dom';
import DogParams from './DogParams';
import DogBreed from './DogBreed';

class Dog extends React.Component {
    constructor(){
        super();
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        console.log('component mounted')
        this.handleRandomDog()
    }

    handleRandomDog = async () => {
        let url = "https://dog.ceo/api/breeds/image/random"
        try {
        let {data} = await axios.get(url)
        this.setState({
            url: data.message
        })
     } catch (err){
         console.log(err)
     } 
    }

    renderRandomDog = () => {
        const {url} = this.state
        const {handleRandomDog} = this
        return (
        <>
            <div>
            <h1> Dogs </h1>
            <img src={url} alt="dog pic"></img><br></br>
            <button onClick={handleRandomDog}>New Dog</button>
            </div>
        </>
    )
 }


    render(){
    return (
        <div>
        <nav>
        <Link to="/dog/random/:num">Multiple Dogs</Link>{" "}
        <Link to="/dog/:breed">Dogs by breed</Link>{" "}
        </nav>
            <Switch>
             <Route exact path="/dog/random" render={this.renderRandomDog} />
             <Route path="/dog/random/:num" component={DogParams} />
             <Route path="/dog/:breed" component={DogBreed} />
            </Switch>
        </div>
     );
   }
}

export default Dog;