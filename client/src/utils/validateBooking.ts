import { useBookingStore } from "../store/booking"
import dayjs from "dayjs"

export const validateBooking = () => {
    // Consumimos el estado general
    const state = useBookingStore.getState()

    // Verificamos que el check-in y check-out tengan sentido
    if(!state.arrivalDate || !state.departureDate || !state.arrivalTime || !state.departureTime) return false
    if(dayjs(state.departureDate).isBefore(dayjs(state.arrivalDate))) return false

    if(dayjs(state.arrivalDate).isSame(dayjs(state.departureDate))) return false

    return true
}