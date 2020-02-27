import React from 'react'
import {NavLink} from 'react-router-dom'
const NavBar =()=>{
return (
    <nav>
        <NavLink exact to={'/'} >Home</NavLink>
        <NavLink to={'/dog'} >Dog Img</NavLink>
        <NavLink to={'/dog/random/:num'}>Multiple Dog Images</NavLink>
        

    </nav>
)
}

export default NavBar;

