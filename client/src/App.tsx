import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import ReservationPage from './pages/ReservationPage'
import WelcomePage from './pages/WelcomePage'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/landingPage' element={ <h1>Bienveinod  A LA LANDING PAGE</h1>} />

        {/* --- Rutas protegidas ---- */}
        <Route path='/welcome' element={ <WelcomePage/> } />
        <Route path='/reservation' element={ <ReservationPage/> } />

        {/* --- RUTA POR DEFECTO --- */}
        <Route path='/' element={ <Login/> } />

      </Routes>

    </BrowserRouter>
  )
}

export default App
