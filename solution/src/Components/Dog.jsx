import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Dog = () => {
    const { number } = useParams();
    const [dogArray, setDogArray] = useState([]);
    const [numberOfDogs, setNumberOfDogs] = useState(1)
    // this.state = {
    //     urls: [],
    //     number: 1,
    //     param: props.param
    // }
    useEffect(() => {
        handleRandomDog();
        generateDogCards();
    }, [])
    const handleRandomDog = async () => {
        let url = `https://dog.ceo/api/breeds/image/random`;
        try {
            let imageUrl = await axios.get(url)
                .then((res) => { return res.data.message });
            setDogArray([imageUrl, ...dogArray])
        }
        catch (err) {
            console.log(err)
        }
    }
    const generateDogCards = () => {
        return dogArray.map((el) => {
            return (
                <div key={el}>
                    <img src={el} className='w-50 h-25 mt-3'/>
                </div>
            )
        })
    }
    return (
        <div>
            <h1 className='text-muted mt-3'> Dawgz </h1>
            <div className="images">
                {generateDogCards()}
            </div>
        </div>
    )
}
export default Dog;

    // const handleNumDogs = (e) => {
    //     this.setState({
    //         number: parseInt(e.target.value)
    //     });
    // }
    //     const { urls } = this.state;
    //     let images = urls.map((el) => {
    //         return (
    //             <img src={el} alt={el} key={el} />
    //         )
    //     })