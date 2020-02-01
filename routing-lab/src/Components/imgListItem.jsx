import React from 'react';

const ImgListItem = (props) => {
    return (
        <div>
            <li>
            <img src={props.img} alt="dog or cat pic"></img>
            </li>
        </div>
    )
}

export default ImgListItem;