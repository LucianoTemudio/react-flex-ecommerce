import React from "react";
import Item from "./Item";
import './ItemList.css'
import { useState, useEffect } from "react";

const ItemList = ({productos, categoria}) => {

    const [productosFiltrados, setProductosFiltrados] = useState(productos);

    useEffect(() => {
        const temp = productos.filter((element) => element.categoria == categoria)
        setProductosFiltrados(temp)
    },[categoria]);

    
    return (
        <div className="cards">
            {
                categoria === 'Todo'?
                productos.map((element) => {
                    return (
                        <Item id={element.id} categoria={element.categoria} nombre={element.nombre} image={element.image} precio={element.precio} unidades={element.unidades}/>
                    )
                })
                :
                productosFiltrados.map((element) => {
                    return (
                        <Item id={element.id} categoria={element.categoria} nombre={element.nombre} image={element.image} precio={element.precio} unidades={element.unidades}/>
                    )
                })
            }
        </div>)
    }

export default ItemList;