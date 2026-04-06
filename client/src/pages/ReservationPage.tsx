import { CircleUserRound } from 'lucide-react';
import { tokenManager } from '../utils/tokenManager';
import { Link } from 'react-router';
import SuitCard from '../components/reservationPage/SuitCard';
import ResumReservation from '../components/reservationPage/ResumReservation';
import ConfirmationModal from '../components/reservationPage/ConfirmationModal';
import { useState } from 'react';

function ReservationPage() {
  const user = tokenManager.getUser();


  const [visibleModal, setVisibileModal] = useState(false)

  return (
    <main className='bg-[#f8f8f6] relative'>
      <header className='flex justify-between px-6 py-7 sticky w-full top-0 backdrop-blur-2xl z-10'>
        <h2 className="font-headline font-bold md:text-2xl">LUXE RESERVE</h2>
        <div className='flex gap-6 text-[#4A5568]'>
          <div className='flex gap-2'>
            <CircleUserRound size={20} color='#4A5568'/>
            <span> WELCOME, { user.nombre}  </span>
          </div>
          <Link to={'landingPage'} className='hover:text-[#1a1c1e]'> LOG OUT</Link>
        </div>
      </header>

      
      <section className='flex flex-col gap-14 py-4 px-12 '>
        <div className='flex flex-col max-w-180'>
          <span className='text-[#4A5568]'>SELECTED ACOMMODATIONS</span>
          <h1 className='font-bold font-headline mt-2 text-2xl sm:text-4xl md:text-5xl'>Refined living for the discerning traveler.</h1>
        </div>

        <div className='grid grid-cols-1 gap-14 lg:grid-cols-[2fr_1fr]'>
          <div className='flex flex-col gap-14'>

            {/* ---- SECCION DE HABITACIONES ----- */}
            <section className='grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1fr] '>
              <SuitCard/>

              <SuitCard/>

            </section>

            {/* ----Seccion de las observaciones ---- */}
            <section className='flex flex-col gap-6 text-sm'>
              <h2 className='font-bold font-headline text-3xl'>Reservation Details</h2>
              <span className='text-base '>Additional comments or special requests</span>
              <textarea name="" id="observations" placeholder='Let us know how we can make your sanctuary truly bestpoke' className='bg-surface-low h-40 rounded-lg ring-[#2563eb] focus:ring-1 p-6'></textarea>
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
