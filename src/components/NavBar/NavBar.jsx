import React from "react";
import img_logo from '../../assets/ecommerce_logo.png'
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";

function NavBar () {
    return (
        <nav>

            <img src={img_logo} alt="logo"></img>

            <div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>

            <CartWidget />

        </nav>

    )
};

export default NavBar;