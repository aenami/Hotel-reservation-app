import { CircleUserRound } from 'lucide-react'
import { tokenManager } from '../utils/tokenManager'
import { Link } from 'react-router'
import SuitCard from '../components/homePage/SuitCard';
import ResumReservation from '../components/homePage/resumReservation';

function HomePage() {
  const user = tokenManager.getUser();

  return (
    <main className='bg-[#f8f8f6]'>
      <header className='flex justify-between px-6 py-7 sticky w-full top-0 backdrop-blur-2xl z-10'>
        <h2 className="font-headline font-bold md:text-2xl">LUXE RESERVE</h2>
        <div className='flex gap-6 text-[#4A5568]'>
          <div className='flex gap-2'>
            <CircleUserRound size={20} color='#4A5568'/>
            <span> WELCOME, { user.nombre}  </span>
          </div>
          <Link to={'landingPage'}> LOG OUT</Link>
        </div>
      </header>

      
      <section className='grid grid-cols-1 py-4 px-12 gap-14 lg:grid-cols-[2fr_1fr]'>
        {/* ---- SECCION DE HABITACIONES ---- */}
        <div className='flex flex-col gap-14'>
          <div>
            <span className='text-[#4A5568]'>SELECTED ACOMMODATIONS</span>
            <h1 className='font-bold font-headline mt-2 text-2xl sm:text-4xl md:text-5xl'>Refined living for the discerning traveler.</h1>
          </div>
          {/* ---- SECCION DE HABITACIONES ----- */}
          <section className='grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1fr] '>
            <SuitCard/>

            <SuitCard/>

          </section>

          {/* ----Seccion de las observaciones ---- */}
          <section className='flex flex-col gap-6 text-sm'>
            <h2 className='font-bold font-headline text-3xl'>Reservation Details</h2>
            <span className='text-base '>Additional comments or special requests</span>
            <textarea name="" id="" placeholder='Let us know how we can make your sanctuary truly bestpoke' className='bg-[#f4f4f2] h-40 rounded-lg ring-[#2563eb] focus:ring-1 p-6'></textarea>
            <span>We will review these details to acurate your stay</span>
          </section>

        </div>
        
        {/* ----SECCION DEL RESUMEN DE LA RESERVA------ */}
        <ResumReservation/>

      </section>
      



    </main>
  )
}

export default HomePage
