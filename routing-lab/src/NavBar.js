import React from 'react'
import {NavLink} from 'react-router-dom'
const NavBar =()=>{
return (
    <nav>
        <NavLink exact to={'/'} >Home</NavLink>
        <br></br>
        <NavLink to={'/dog'} >Dog Img</NavLink>
        <br></br>
        <NavLink to={'/dog/random/:num'}>Multiple Dog Images</NavLink>
        <br></br>
        <NavLink to ={'/cat'}>Cat Img</NavLink>
        <br></br>
        <NavLink to ={'/cat/random/:num'}>Multiple Cat Images</NavLink>
        <br></br>

    </nav>
)
}

export default NavBar;

