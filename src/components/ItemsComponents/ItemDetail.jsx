import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import './ItemDetail.css'
import {useAppContext} from "../Context/Context";

const ItemDetail = () => {

    const {productos} = useAppContext();
    const params = useParams();

    const [productoFiltrado, setProductoFiltrado] = useState([])

    useEffect(() => {
        const productoFiltro = productos.find(element => element.id == params.id);
        setProductoFiltrado(productoFiltro);
    },[])


    return (
       <div className="cardDetail">        
        <p><strong>Producto seleccionado:</strong></p>
        <Item id={productoFiltrado.id} categoria={productoFiltrado.categoria} nombre={productoFiltrado.nombre} image={productoFiltrado.image} precio={productoFiltrado.precio} unidades={productoFiltrado.unidades}/>
        </div>
    )

}


export default ItemDetail;