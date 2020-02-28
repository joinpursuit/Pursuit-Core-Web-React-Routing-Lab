import React from 'react'
import {NavLink} from 'react-router-dom'
const NavBar =()=>{
return (
    <nav>
        <NavLink exact to={'/'} >Home</NavLink>
        <NavLink to={'/dog'} >Dog Img</NavLink>
        <NavLink to={'/dog/random/:num'}>Multiple Dog Images</NavLink>
        <NavLink to ={'/cat'}>Cat Img</NavLink>
        <NavLink to ={'/cat/random/:num'}>Multiple Cat Images</NavLink>

    </nav>
)
}

export default NavBar;

