import React from "react";
import Item from "./Item";
import './ItemList.css'
import { useState, useEffect } from "react";

const ItemList = ({productos, categoria}) => {

    const productosFiltrados = productos.filter((element) => element.categoria == categoria)
    
    return (
        <div className="cards">
            {
                categoria === 'Todo'?
                productos.map((element) => {
                    return (
                        <Item id={element.id} categoria={element.categoria} nombre={element.nombre} image={element.image} precio={element.precio}/>
                    )
                })
                :
                productosFiltrados.map((element) => {
                    return (
                        <Item id={element.id} categoria={element.categoria} nombre={element.nombre} image={element.image} precio={element.precio}/>
                    )
                })
            }
        </div>)
    }

export default ItemList;