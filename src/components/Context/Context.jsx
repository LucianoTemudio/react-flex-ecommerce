import { createContext, useContext, useState, useEffect} from "react";
import {initializeApp} from "firebase/app"
import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ2cUyABKBYyykwsNlxM1GRQIWCOkbpV4",
    authDomain: "react-flex-ecommerce.firebaseapp.com",
    projectId: "react-flex-ecommerce",
    storageBucket: "react-flex-ecommerce.appspot.com",
    messagingSenderId: "275192173738",
    appId: "1:275192173738:web:9c4df064bf6277e0382cd3"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productosCollection = collection(db, "productos")
const ordenesCollection = collection(db, "ordenes")

// App context
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    function loadData() {
        getDocs(productosCollection).then(snapshot => {
            let dbProductos = snapshot.docs.map(element => element.data());
            setProductos(dbProductos);
        }).catch(err => console.error(err));        

    };


    function agregarCarrito (id) {
        let carritoTemp = [...carrito];
        const productoSeleccionado = productos.find(producto => producto.id == id);
        if (carritoTemp.find(producto => producto.id == id)) {
            carritoTemp.find(producto => producto.id == id).unidades = carritoTemp.find(producto => producto.id == id).unidades +1;
            setCarrito(carritoTemp);
        } else {
            productoSeleccionado.unidades = productoSeleccionado.unidades+1;
            carritoTemp.push(productoSeleccionado);
            setCarrito(carritoTemp);
        }

    };

    function reducirCarrito (id) {
        let carritoTemp = [...carrito];
        if (carritoTemp.find(producto => producto.id == id)) {
            if (carritoTemp.find(producto => producto.id == id).unidades >1) {
                carritoTemp.find(producto => producto.id == id).unidades = carritoTemp.find(producto => producto.id == id).unidades -1;
                setCarrito(carritoTemp);  
            } else if (carritoTemp.find(producto => producto.id == id).unidades == 1) {
                carritoTemp.find(producto => producto.id == id).unidades = carritoTemp.find(producto => producto.id == id).unidades -1;
                carritoTemp = carritoTemp.filter(productos => productos.id != id);
                setCarrito(carritoTemp);
            }            
        } else {
            console.log('No hay unidades para remover')
        };

    };

    return (
        <AppContext.Provider value={{ productos, carrito, setCarrito, agregarCarrito, reducirCarrito, loadData, ordenesCollection }}>{props.children}</AppContext.Provider>

    );
};

export default ContextProvider;