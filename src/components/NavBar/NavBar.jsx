import React from "react";
import img_logo from '../../assets/ecommerce_logo.png'
import './NavBar.css'
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom';

function NavBar ({setCategoria}) {
    return (
        <nav>

            <img src={img_logo} alt="logo"></img>

            <div>
                <ul>
                    <Link to={'/'}>
                    <li><a href="">Home</a></li>
                    </Link>
                    
                    <Link to={'/nosotros'}><li><a href="">Nosotros</a></li></Link>
                    <Link to={'/contacto'}><li><a href="">Contacto</a></li></Link>
                    
                    <li className="intro_categorias">Filtro Categoría:</li>
                    <button className="button_style" onClick={(e) => setCategoria(e.target.value)} value="Todo">Todo</button>
                    <button className="button_style" onClick={(e) => setCategoria(e.target.value)} value="Beers">Beers</button>
                    <button className="button_style" onClick={(e) => setCategoria(e.target.value)} value="Wines">Wines</button>
                    <button className="button_style" onClick={(e) => setCategoria(e.target.value)} value="Aperitivos">Aperitivos</button>

                </ul>
            </div>

            <CartWidget />

        </nav>

    )
};

export default NavBar;