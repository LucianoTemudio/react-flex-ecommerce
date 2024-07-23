import React from "react";
import ItemList from "./ItemList";
import './ItemsListContainer.css'

function ItemsListContainer ({productos, categoria}) {

    return (
        <div className="container">
            {
                productos.length === 0?
                <p>Loading</p>
                :
                <ItemList productos={productos} categoria={categoria}/>

            }
            
        </div>
    )
};

export default ItemsListContainer;