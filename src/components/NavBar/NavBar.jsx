import React from "react";
import img_logo from '../../assets/ecommerce_logo.png'
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom';

function NavBar ({}) {
    return (
        <nav>

            <img src={img_logo} alt="logo"></img>

            <div>
                <ul>
                    <Link to={'/'}>
                    <li><a href="">Home</a></li>
                    </Link>
                    
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>

            <CartWidget />

        </nav>

    )
};

export default NavBar;