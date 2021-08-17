import React from 'react';
import { Link } from 'react-router-dom';
import { NavList } from './style';


export const Menu = () => {
    return(
        <NavList>
            <Link to="/">Dashboard</Link>
            <Link to="/list">Listar</Link>
        </NavList>
    )
}