import React from 'react'

const Button = (props) => {
    const urlArr = props.url.split('/');
    console.log(urlArr);

    let btnMsg = `Get 
        ${urlArr[3] ? urlArr[3] : 'a'} 
        ${urlArr[2] ? urlArr[2] : 'random'} 
        ${urlArr[1]}`
    ;
    

    return (
        <button>{btnMsg}</button>
    )
}

export default Button;