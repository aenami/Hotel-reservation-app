import { api } from "./Api";

type reservatioCrud = {
    insertBooking: (payload: Record<string, unknown>) => Promise<string>;
}

export const reservationService:reservatioCrud = {
    insertBooking: (payload) => api.post('/booking', payload),
}