import { create } from 'zustand'
import { type selectedRoomTypes } from '../types/dataTypes';

export type State = {
    // Estados
    arrivalDate: Date | undefined,
    arrivalTime: Date | undefined,
    departureDate: Date | undefined,
    departureTime: Date | undefined,

    roomTypes: selectedRoomTypes[]

    // Funciones
    setArrivalDate: (dateSelected: Date) => void;
    setArrivalTime: (timeSelected: Date) => void;
    setDepartureDate: (dateSelected: Date) => void;
    setDepartureTime: (timeSelected: Date) => void;
    addRoomTypes: (idRoom: number) => void;
    editRoomTypes: (idRoom: number) => void;
}

export const useBookingStore = create<State>( (set) => ({
    // Estados
    arrivalDate: undefined,
    arrivalTime: undefined,
    departureDate: undefined,
    departureTime: undefined,

    roomTypes: [],

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
    addRoomTypes: (idRoom) =>
        set( (prev) => ({ roomTypes: [...prev.roomTypes, {roomType: idRoom, amount: 1}] }) ),

    editRoomTypes: (idRoom, operation) =>
        set( (prev) => ({ roomTypes: [] }))
    // 1. Encontrar 
}))