import { create } from 'zustand'

export type State = {
    // Estados
    arrivalDate: Date | undefined,
    arrivalTime: Date | undefined,
    departureDate: Date | undefined,
    departureTime: Date | undefined,

    // Funciones
    setArrivalDate: (dateSelected: Date) => void;
    setArrivalTime: (timeSelected: Date) => void;
    setDepartureDate: (dateSelected: Date) => void;
    setDepartureTime: (timeSelected: Date) => void;
}

export const useBookingStore = create<State>( (set) => ({
    // Estados
    arrivalDate: undefined,
    arrivalTime: undefined,
    departureDate: undefined,
    departureTime: undefined,

    // Funciones para actualizar los estados
    setArrivalDate: (dateSelected) => 
        set( () => ({ arrivalDate: dateSelected }) ),
    setArrivalTime: (timeSelected) => 
        set( () => ({ arrivalTime: timeSelected }) ),

    setDepartureDate: (dateSelected) => 
        set( () => ({ departureDate: dateSelected }) ),
    setDepartureTime: (timeSelected) => 
        set( () => ({ departureTime: timeSelected }) ),
}))