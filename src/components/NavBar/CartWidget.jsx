import React from "react";
import cart_widget from '../../assets/cart_widget.png'
import './CartWidget.css'
import { useAppContext } from "../Context/Context";
import { Link } from "react-router-dom";

function CartWidget () {
    
    const {carrito} = useAppContext();

    let totalProductos = 0;
    carrito.forEach( element => {
        totalProductos += element.unidades
    });

    return(
        <Link to={'/carrito'}>
            <div className="cart_widget"><img src={cart_widget} alt="cart_widget" />{totalProductos}</div>
        </Link>
    )
};

export default CartWidget;