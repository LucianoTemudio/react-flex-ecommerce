import React from "react";
import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({id, categoria, nombre, precio, image, unidades}) => {
    return(
        <div className="items" key={id}>
            <div>{categoria}</div>
            <img className="productos_img" src={image} alt=""></img>
            <div>{nombre}</div>
            <div>${precio}</div>
            <div>{unidades}</div>
            <Link to={`/detalle/${id}`}>
                <button className="card_button">Detalle</button>
            </Link>
            <button className="card_button">Agregar</button>
        </div>
    )
};

export default Item;

