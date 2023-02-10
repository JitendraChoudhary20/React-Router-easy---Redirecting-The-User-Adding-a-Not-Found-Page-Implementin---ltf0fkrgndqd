import React from 'react';
import { NavLink } from 'react-router-dom';


export const NavBar = () =>{
    return(
        <NavBar>
            <ul>
                <li><NavLink to='/' className={'index-link'}>Index</NavLink>   </li> 
                <li><NavLink to='/home' className={'home-link'} >Home</NavLink>   </li>            
                
            </ul>
        </NavBar>

    )
}