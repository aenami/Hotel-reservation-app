//import { tokenManager } from '../utils/tokenManager';
//import { Link } from 'react-router';
import SuitCard from '../components/reservationPage/SuitCard';
import ResumReservation from '../components/reservationPage/ResumReservation';
import ConfirmationModal from '../components/reservationPage/ConfirmationModal';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import ErrorBackend from '../components/reservationPage/ErrorBackend';
import type { Rooms } from '../types/dataTypes';
import { roomTypesService } from '../services/roomTypesService';
import { useBookingStore } from '../store/booking';
import { tokenManager } from '../utils/tokenManager';

function ReservationPage() {
  const user = tokenManager.getUser();
  const setReservationComment = useBookingStore(state => state.setComments)
  const [visibleModal, setVisibileModal] = useState(false)
  const [isError, setIsError] = useState('')
  const [dataRooms, setDataRooms] = useState<Rooms[] | undefined>(undefined)

  // useEffect que se encarga de traer la informacion de las habitaciones a mostrar
  useEffect(  () =>{
    const fetchRooms = async () => {
      try {
        const data = await roomTypesService.getRoomTypes()
        
        // Seteamos la informacion consultada del backend
        setDataRooms(data.rooms)
        
      } catch (error) {
        setIsError( error instanceof Error 
          ? error.message 
          : 'Error desconocido del servidor' )
      } 
    }

    fetchRooms()

  }, [])

  const hanlderComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const comment = e.target.value;
    setReservationComment(comment)
    console.log(comment)
  }

  return (
    <main className='bg-[#f8f8f6] relative'>
      <Header name={user.nombre}/>
      
      <section className='flex flex-col gap-14 py-4 px-12 '>
        <div className='flex flex-col max-w-180'>
          <span className='text-[#4A5568]'>SELECTED ACOMMODATIONS</span>
          <h1 className='font-bold font-headline mt-2 text-2xl sm:text-4xl md:text-5xl'>Refined living for the discerning traveler.</h1>
        </div>

        {/* ---- Feedback de errores al usuario ----- */}
        { isError && <ErrorBackend message={isError}/> }

        <div className='grid grid-cols-1 gap-14 lg:grid-cols-[2fr_1fr]'>
          <div className='flex flex-col gap-14'>

            {/* ---- SECCION DE HABITACIONES ----- */}
            <section className='grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1fr] '>
              { dataRooms 
              ? dataRooms.map( room => (<SuitCard key={room.id} data={room}/>))
              : null }
            </section>

            {/* ----Seccion de las observaciones ---- */}
            <section className='flex flex-col gap-6 text-sm'>
              <h2 className='font-bold font-headline text-3xl'>Reservation Details</h2>
              <span className='text-base '>Additional comments or special requests</span>
              <textarea name="" id="observations" onChange={hanlderComment}
              placeholder='Let us know how we can make your sanctuary truly bestpoke' 
              className='bg-surface-low h-40 rounded-lg ring-[#2563eb] focus:ring-1 p-6'></textarea>
              <span>We will review these details to acurate your stay</span>
            </section>

          </div>
          
          {/* ----SECCION DEL RESUMEN DE LA RESERVA------ */}
          <ResumReservation modal={ () => setVisibileModal(true) } />
        </div>
      </section>

      {/* ---- MODAL DE CONFIRMACION RESERVA ----- */}
      { visibleModal ? <ConfirmationModal onClose={ () => setVisibileModal(false) } /> : null}
    </main>
  )
}

export default ReservationPage
