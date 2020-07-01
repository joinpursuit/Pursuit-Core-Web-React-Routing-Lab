import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Dog = () => {
    const { num } = useParams();
    const [dogArray, setDogArray] = useState([]);
    const [numberOfDogs, setNumberOfDogs] = useState(1);
    const [allBreeds, setAllBreeds] = useState([]);
    useEffect(() => {
        handleRandomDog();
        generateDogCards();
        getBreeds();
    }, []);

    const handleRandomDog = async () => {
        let url = ``;
        num === '1' || num === 'undefined' ? url = `https://dog.ceo/api/breeds/image/random` : url = `https://dog.ceo/api/breeds/image/random/${num}`;
        try {
            let imageUrls = await axios.get(url)
                .then((res) => { return res.data.message });
            setDogArray(imageUrls)
        }
        catch (err) {
            let errorMessage = `Uh-oh! Something went wrong, try again later!`;
            console.log(errorMessage)
        }
    }
    const generateDogCards = () => {
        return dogArray.map((dog) => {
            return (
                <div key={dog} className=''>
                    <img src={dog} alt='dog' className='w-25 h-25 mt-3' />
                </div>
            )
        })
    };
    const getBreeds = async () => {
        let allBreedsArr = [];
        let url = `https://dog.ceo/api/breeds/list/all`;
        try {
            let allBreedsObj = await axios.get(url).then((res) => { return res.data.message });
            for (let breed in allBreedsObj) {
                allBreedsArr.push(breed)
            }
            setAllBreeds(allBreedsArr)
        }
        catch (err) {
            console.log(err)
        }
    };
    const breedList = () => {
        return allBreeds.map((breed) => {
            return (
                <li className="dropdown-item" key={breed} value={breed}>{breed}</li>
            )
        })
    };
    const getBreed = async (e) => {
        e.preventDefault();
        console.log(e.target.value)
        let newDogReq = ``;
        e.target.value === 'random' ? newDogReq = `https://dog.ceo/api/breeds/image/random` : newDogReq = `https://dog.ceo/api/breed/${e.target.value}/images`;
        try {
            let dogsByBreed = await axios.get(newDogReq);
            console.log(dogsByBreed)
        }
        catch (err) {
            console.log(`Couldn't get dogs by breed`);
        }
    }
    return (
        <div>
            <h1 className='text-muted mt-3'> Dawgz </h1>
            <div className="btn-group dropright">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Breed
                </button>
                <ul className="dropdown-menu scrollable-menu" role='menu' onChange={getBreed}>
                    {breedList()}
                    <div className="dropdown-divider"></div>
                    <li className="dropdown-item" value='random'>random</li>
                </ul>
            </div>
            <div className="carousel-inner mt-5">
                {generateDogCards()}
            </div>
        </div>
    )
}
export default Dog;
