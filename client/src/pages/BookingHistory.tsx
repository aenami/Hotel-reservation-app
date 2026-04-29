import { Header } from "../components/Header"
import { useEffect, useState } from "react"
import Upcoming from "../components/BookingHistory/Upcoming"
import Past from "../components/BookingHistory/Past"
import Cancelled from "../components/BookingHistory/Cancelled"
import { type Reservations } from "../types/dataTypes"
import ErrorBackend from "../components/reservationPage/ErrorBackend"
import { reservationService } from "../services/reservationService"


function BookingHistory() {
    const[filter, setFilter] = useState<'AGENDADA'| 'CANCELADA' | 'FINALIZADA'>('AGENDADA') // Estado para filtrar
    const[error, setError] = useState('') // Maneja el loading 
    const[reservations, setReservations] = useState<Reservations[] | undefined>(undefined)

    useEffect( () => {
        const fetchReservations = async ()=>{
            try {
                //1. Pedimos los datos de las reservas
                const  data = await reservationService.getBooking(`estado=${filter}`)

                //2. Guardamos la info devuelva por el backend
                setReservations(data)
            } catch (error) {
                setError( error instanceof Error 
                ? error.message 
                : 'Error desconocido del servidor' )
            }
        }

        fetchReservations()
    }, [filter])

  return (
    <main>
        <Header/>

        <section className="flex flex-col">

            {/* ---- TITLE  ---- */}
            <div className="flex flex-col">
                <span className="text-sm text-secondary">YOUR CURATED JOURNEY</span>
                <h1 className="text-4xl">BOOKING HISTORY</h1>
            </div>

            {/* ----- FILTERS  ----- */}
            <div className="flex flex-col ">
                {/* ---- FILTERS ---- */}
                <div className="flex w-fit">
                    <button onClick={() => setFilter('AGENDADA')}
                    className="cursor-pointer p-4">
                        UPCOMING
                    </button>
                    <button className="cursor-pointer p-4">
                        UPCOMING
                    </button>
                    <button className="cursor-pointer p-4">
                        UPCOMING
                    </button>

                </div>
            </div>

            <section className="flex flex-col">
                {/* ----- Managing error ---- */}
                {error && <ErrorBackend message={error}/>}

                {/* ----- HISTORY RESERVATION ----- */}
                {filter == 'AGENDADA' ? reservations?.map(reservation => <Upcoming data={reservation}/>) : null}
                {filter == 'CANCELADA' ? reservations?.map(reservation => <Past data={reservation}/>) : null}
                {filter == 'FINALIZADA' ? reservations?.map(reservation => <Cancelled data={reservation}/>) : null}
            </section>

        </section>
        

    </main>
  )
}

export default BookingHistory
