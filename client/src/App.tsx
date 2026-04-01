import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={ <h1> PAGINA LOGIN</h1> } />
        <Route path='/register' element={ <Register/> } />

        {/* --- RUTA POR DEFECTO --- */}
        <Route path='/' element={ <Login/> } />

      </Routes>

    </BrowserRouter>
  )
}

export default App
