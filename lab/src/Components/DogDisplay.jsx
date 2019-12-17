import React from 'react';

const DogDisplay = (props) => {
    return (
        <div>
            <img src={props.url} alt="dog"></img>
        </div>
    )
}

export default DogDisplay