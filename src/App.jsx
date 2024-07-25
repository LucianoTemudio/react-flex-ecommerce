import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'
import fetchData from './fetchdata'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import ItemDetail from './components/ItemsListContainer/ItemDetail'

function App() {


  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchData()
    .then(response => {setProductos(response)})
    .catch(err => console.error(err));
  })

  const [categoria, setCategoria] = useState('Todo');

  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <h2>Seleccione una categoría:</h2>
        <button onClick={(e) => setCategoria(e.target.value)} value="Todo">Todo</button>
        <button onClick={(e) => setCategoria(e.target.value)} value="Beers">Beers</button>
        <button onClick={(e) => setCategoria(e.target.value)} value="Wines">Wines</button>
        <button onClick={(e) => setCategoria(e.target.value)} value="Aperitivos">Aperitivos</button>
        <Routes>
          <Route path='/' element={<ItemsListContainer productos={productos} categoria={categoria}/>} />
          <Route path='/detalle/:id' element={<ItemDetail productos={productos} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
