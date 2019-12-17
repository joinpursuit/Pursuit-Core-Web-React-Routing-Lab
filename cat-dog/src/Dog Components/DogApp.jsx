import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

// import Selector from './Selector';
// import DogFrom from './dogForm'
// import Pet from '../Display';
import RandomDog from './RandomDog';
import DogHeader from './DogHeader'

class DogApp extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         url: '',
    //         num: 0
    //     }
    //     this.breeds = [];
    // }

    // Loads an image when the component mounts
    // componentDidMount() {
    //     this.getDogPicture()
    // }



    // getDogPicture = async (selectedBreed, numOfDogs) => {
    //     // const { selectedBreed } = this.state
    //     let dogAPIURL

    //     if (numOfDogs) {
    //         dogAPIURL = `https://dog.ceo/api/breeds/image/random/${numOfDogs}`

    //         if (selectedBreed) {
    //             dogAPIURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random/${numOfDogs}`
    //         }
    //     } else {
    //         dogAPIURL = "https://dog.ceo/api/breeds/image/random"

    //         if (selectedBreed) {
    //             dogAPIURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random`
    //         }
    //     }

    //     // axios request using try, catch and async, await
    //     try {
    //         const { data } = await axios.get(dogAPIURL)
    //         console.log(data)
    //         this.setState({
    //             url: data.message,
    //         })

    //     } catch (error) {
    //         console.log('err: ', error)
    //     }

    // }

    render() {
        // const { url } = this.state
        return (
            <div className="DogApp">
                <nav>
                    <Link to="/dog/random">Randomizer</Link>{" "}
                </nav>

                <Switch>
                    <Route exact path='/dog' render={DogHeader}></Route>
                    <Route path="/dog/random" component={RandomDog} />
                </Switch>

            </div>
        )
    }
}

export default DogApp;
