import React from 'react'

const Button = (props) => {
    let btnMsg = `Get 
        ${props.state.num_img > 1 ? props.state.num_img : 'a'} 
        ${props.state.breed} 
        ${Number(props.state.num_img) > 1 ? props.state.animal + 's' : props.state.animal}
    `;
    
    return (
        <button onClick={props.handleClick}>{btnMsg}</button>
    )
}

export default Button;