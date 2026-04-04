import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />

        {/* --- Rutas protegidas ---- */}
        <Route path='/homePage' element={ <HomePage/> } />

        {/* --- RUTA POR DEFECTO --- */}
        <Route path='/' element={ <Login/> } />

      </Routes>

    </BrowserRouter>
  )
}

export default App
