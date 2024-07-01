import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'

function App() {
  const [count, setCount] = useState(0)
  const bienvenido = ''

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemsListContainer texto={'Bienvenidos'}/>
      </main>
      
    </>
  )
};

export default App;
