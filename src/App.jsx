import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemsListContainer from './components/ItemsComponents/ItemsListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import ItemDetail from './components/ItemsComponents/ItemDetail'
import {ContextProvider} from './components/Context/Context'
import Cart from './components/Cart/Cart'
import Nosotros from './components/NavBar/Nosotros'
import Contacto from './components/NavBar/Contacto'

function App() {

  const [categoria, setCategoria] = useState('Todo');
  
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <NavBar setCategoria={setCategoria}/>
          <Routes>
            <Route path='/' element={<ItemsListContainer categoria={categoria}/>} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/detalle/:id' element={<ItemDetail />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};

export default App;