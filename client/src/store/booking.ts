import { create } from 'zustand'
import { type selectedRoomTypes } from '../types/dataTypes';

export type State = {
    // Estados
    arrivalDate: Date | undefined,
    arrivalTime: Date | undefined,
    departureDate: Date | undefined,
    departureTime: Date | undefined,

    roomTypes: selectedRoomTypes[]
    comments: string | undefined;

    // Funciones
    setArrivalDate: (dateSelected: Date) => void;
    setArrivalTime: (timeSelected: Date) => void;
    setDepartureDate: (dateSelected: Date) => void;
    setDepartureTime: (timeSelected: Date) => void;
    incrementAmountRoom: (idRoom: number, name: string, price: number) => void;
    decrementAmountRoom: (idRoom: number) => void;
    setComments: (comments: string) => void;
}

export const useBookingStore = create<State>( (set) => ({
    // Estados
    arrivalDate: undefined,
    arrivalTime: undefined,
    departureDate: undefined,
    departureTime: undefined,

    roomTypes: [],
    comments: undefined,

    // Acciones referentes a la fecha de la reserva
    setArrivalDate: (dateSelected) => 
        set( () => ({ arrivalDate: dateSelected }) ),
    setArrivalTime: (timeSelected) => 
        set( () => ({ arrivalTime: timeSelected }) ),

    setDepartureDate: (dateSelected) => 
        set( () => ({ departureDate: dateSelected }) ),
    setDepartureTime: (timeSelected) => 
        set( () => ({ departureTime: timeSelected }) ),

    // Acciones referentes a las habitaciones
    // Funcion que se encargara de sumar cantidad a la habitacion y añadirla a la lista si es la primera vez
    incrementAmountRoom: (idRoom, name, price) =>  
        set( prev => {
            let foundRoom = false;
            for (const room of prev.roomTypes) {
                // Verificamos si se encuentra o no el tipo de habitacion
                if(room.roomType === idRoom) foundRoom = true
            }

            if(foundRoom){
                return {roomTypes: prev.roomTypes.map(room => room.roomType === idRoom ? {...room, amount: room.amount+1 } : room)} 
            }

            const newRoomTypes = prev.roomTypes.map(room => room)
            newRoomTypes.push({roomType: idRoom, amount:1, name, price})
            return { roomTypes: newRoomTypes }  

        }),
    
    decrementAmountRoom: (idRoom) =>
        set( prev => ({roomTypes: prev.roomTypes.map(room => room.roomType === idRoom ? {...room, amount: room.amount-1 } : room)})),
    
    setComments: (comments) => set( () => ({comments})),
}))
