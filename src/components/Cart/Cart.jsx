import {React, setState, useState} from "react";
import { useAppContext } from "../Context/Context";
import './Cart.css'
import {addDoc} from "firebase/firestore"
import Swal from 'sweetalert2'


const Cart = () => {

    const {carrito, setCarrito, ordenesCollection } = useAppContext();
    const [confirmacionOrden, setConfirmacionOrden] = useState('');

    function removerProducto (id) {
        let carritoTemp = [...carrito];
        carritoTemp.find(producto => producto.id == id).unidades = 0;
        carritoTemp = carritoTemp.filter(productos => productos.id != id);
        setCarrito(carritoTemp);
    };

    function crearOrden (e) {
        e.preventDefault();
        if (carrito.length > 0) {
        
            const detalleOrden = {
                nombre: e.target[0].value,
                email: e.target[1].value,
                productos: carrito,
            }
            let tempID = '';
            addDoc(ordenesCollection, detalleOrden).then(response => {
                tempID = response.id;
                setConfirmacionOrden(`Muchas gracias por su compra ${detalleOrden.nombre}! Su compra ha sido creada exitosamente con id: ${tempID}.`)    
            }).catch(err => {
                alert("Error, intente más tarde!");
                console.log(err)});
        
            setCarrito([]);
            e.target[0].value = ''
            e.target[1].value = ''
        } else {
            Swal.fire("No hay productos en el carrito!");

        }
    };


    return(
        <div>
            {
                carrito.map((element) => {
                    return(
                        <div className="cart_items" key={element.id}>
                            <div><strong>Producto: </strong>{element.nombre}</div>
                            <div><strong>Unidades: </strong>{element.unidades}</div>
                            <div><strong>Precio total: </strong>${element.precio * element.unidades}</div>
                            <button onClick={(e) => removerProducto(e.target.value)} key={element.id} value={element.id}>Eliminar</button>
                        </div>
                    )
        
                })
            }
            <form className="finalizar_compra" value="Test" onSubmit={crearOrden}>
                <div className="form_item">
                    <h4 className="form_item_name">Nombre:</h4>
                    <input className="form_input" type="text" placeholder="Ingresa tu nombre"/>
                </div>
                <div className="form_item">
                    <h4 className="form_item_name">email:</h4>
                    <input className="form_input" type="text" placeholder="Ingresa tu email"/>
                </div>
                <input className="form_submit" type="submit" value="Finalizar compra"/>
            </form>
            <p>{confirmacionOrden}</p>
        </div>

    );
};

export default Cart;