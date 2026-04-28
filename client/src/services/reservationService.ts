import { api } from "./Api";

type reservatioCrud = {
    insertBooking: (payload: Record<string, unknown>) => Promise<Record<string, string>>;
}

export const reservationService:reservatioCrud = {
    insertBooking: (payload) => api.post('/reservation', payload),
}