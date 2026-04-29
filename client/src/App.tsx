import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import ReservationPage from './pages/ReservationPage'
import WelcomePage from './pages/WelcomePage'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import BookingHistory from './pages/BookingHistory'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/login' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/landingPage' element={ <h1>Bienveinod  A LA LANDING PAGE</h1>} />

        {/* --- Rutas protegidas ---- */}
        <Route element={<ProtectedRoute/>}>
          <Route path='/welcome' element={ <WelcomePage/> } />
          <Route path='/reservation' element={ <ReservationPage/> } />
          <Route path='/bookingHistory' element={<BookingHistory/>}/>
        </Route>

        {/* --- RUTA POR DEFECTO --- */}
        <Route path='/' element={ <Login/> } />

      </Routes>

    </BrowserRouter>
  )
}

export default App
