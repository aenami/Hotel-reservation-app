import habitacion1 from '../../assets/homePage/habitacion2.jpg'
import { useState } from 'react'
import type { Rooms } from '../../types/dataTypes';
import { useBookingStore } from '../../store/booking';

interface DataRoom {
    data: Rooms
}

// Consumiendo las acciones de nuestra store
const incrementAmountRoom = useBookingStore.getState().incrementAmountRoom
const decrementAmountRoom = useBookingStore.getState().decrementAmountRoom

function SuitCard({ data }: DataRoom) {
    const [counter, setCounter] = useState(0)

    const hanlderSum = () => {
        incrementAmountRoom(data.id, data.name, data.price)
        setCounter( (prev) => prev+1)
    }

    const handlerRest = () => {
        
        if(counter > 0) {
            decrementAmountRoom(data.id)
            setCounter( (prev) => prev-1)
        }
    }

  return (
      <div className='flex flex-col gap-6'>
          <img src={habitacion1} alt="Habitacion1" className="min-w-1/4 max-w-full h-auto rounded-lg" />
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h2 className='text-2xl font-bold'>{data.name}</h2>
                  <div className='flex gap-1'>
                    <span className='text-[#8e6314] font-bold'>${data.price}</span>
                    <span>/ NIGHT - {data.capacity}</span>
                  </div>
                </div>
                <span>Descripcion de prueba</span>
            </div>
            <hr className='bg-[#4A5568]' />
            <div className='flex justify-between items-center'>
                <h3 className='text-sm text-[#4A5568]'>SELECT ROOMS</h3>
                <div className='flex items-center bg-[#cccccc4a] gap-4'>
                    <button className='cursor-pointer py-2 px-4' onClick={ hanlderSum } >+</button>
                    <span>{ counter }</span>
                    <button className='cursor-pointer py-2 px-4' onClick={ handlerRest }>-</button>
                </div>
            </div>
          </div>
      </div>
  )
}

export default SuitCard
