import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cat = () => {
    const { num } = useParams();
    const [catArray, setCatArray] = useState([]);
    const [numberOfCats, setNumberOfCats] = useState(1);
    const [allBreeds, setAllBreeds] = useState([]);
    useEffect(() => {
        handleRandomCat();
        generateCatCards();
        // getBreeds();
    }, []);

    const handleRandomCat = async () => {
        let url = ``;
        num === '1' || num === 'undefined' ? url = `https://api.thecatapi.com/v1/images/search` : url = `https://api.thecatapi.com/v1/images/search?limit=${num}`;
        try {
            let imageUrls = await axios.get(url)
                .then((res) => { return res.data[0].url });
            setCatArray([imageUrls])
        }
        catch (err) {
            let errorMessage = `Uh-oh! Something went wrong, try again later!`;
            console.log(errorMessage)
        }
    }
    const generateCatCards = () => {
        return catArray.map((cat) => {
            return (
                <div key={cat} className=''>
                    <img src={cat} alt='cat' className='w-25 h-25 mt-3' />
                </div>
            )
        })
    };
    // const getBreeds = async () => {
    //     let allBreedsArr = [];
    //     let url = `https://api.thecatapi.com/v1/images/search`;
    //     try {
    //         let allBreedsObj = await axios.get(url).then((res) => { return res.data.message });
    //         for (let breed in allBreedsObj) {
    //             allBreedsArr.push(breed)
    //         }
    //         setAllBreeds(allBreedsArr)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // };
    // const breedList = () => {
    //     return allBreeds.map((breed) => {
    //         return (
    //             <li className="dropdown-item" key={breed}>{breed}</li>
    //         )
    //     })
    // };
    return (
        <div>
            <h1 className='text-muted mt-3'> Gatos </h1>
            <div className="btn-group dropright">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Breed
                </button>
                <ul className="dropdown-menu scrollable-menu" role='menu'>
                    {/* {breedList()} */}
                    <div className="dropdown-divider"></div>
                    <li className="dropdown-item">random</li>
                </ul>
            </div>
            <div className="carousel-inner mt-5">
                {generateCatCards()}
            </div>
        </div>
    )
}
export default Cat;