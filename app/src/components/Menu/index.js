import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavList } from './style';


export const Menu = () => {
    return(
        <NavList>
            <NavLink to="/">
                <li>
                    Dashboard
                </li>
            </NavLink>
            <NavLink to="/list">
                <li>
                    Listar
                </li>
            </NavLink>
        </NavList>
    )
}