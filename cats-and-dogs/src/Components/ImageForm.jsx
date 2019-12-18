import React from 'react'

const ImageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="breed">
                {props.animal.url.includes('dog') ? ' Dog ' : ' Cat '} 
                Breed: </label>
            {/* <input type="text" name="breed" placeholder="Optional" onChange={props.changeState}/> */}
            <select name="breed" onChange={props.changeState}>
                <option value="Random">Random</option>
                {props.allBreeds.map((breed, i) => {
                    return <option value={breed} key={i}>{breed}</option>
                })}
            </select>
            <select name="num_img" onChange={props.changeState}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </form>
    )
}

export default ImageForm;