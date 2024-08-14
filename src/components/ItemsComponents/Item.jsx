import React from "react";
import './Item.css';
import {Link} from 'react-router-dom';
import {useAppContext} from "../Context/Context";

const Item = ({id, categoria, nombre, precio, image, unidades}) => {

    const {agregarCarrito, reducirCarrito, carrito} = useAppContext();

    return(
        <div className="items" key={id}>
            <div>{categoria}</div>
            <img className="productos_img" src={image} alt=""></img>
            <div>{nombre}</div>
            <div>Precio: ${precio}</div>
            <div>Unidades: {carrito.find(item => item.id == id)? carrito.find(item => item.id == id).unidades : 0}</div>
            <Link to={`/detalle/${id}`}>
                <button className="card_button">Detalle</button>
            </Link>
            <button className="card_button" onClick={() => agregarCarrito(id)}>+</button>
            <button className="card_button" onClick={() => reducirCarrito(id)}>-</button>
        </div>
    )
};

export default Item;

