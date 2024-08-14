import React, { useEffect } from "react";
import ItemList from "./ItemList";
import './ItemsListContainer.css'
import {useAppContext} from "../Context/Context";

function ItemsListContainer ({categoria}) {

    const {productos, loadData} = useAppContext();

    useEffect(() => {
        loadData();
    },[]);

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