import React from "react";

function ItemsListContainer (props) {
    const texto = props.texto
    return (
        <div>
            <h1>{texto}</h1>
        </div>
    )
};

export default ItemsListContainer;