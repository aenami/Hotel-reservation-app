import { api } from "./Api";
import {type Reservations } from "../types/dataTypes";

type reservatioCrud = {
    insertBooking: (payload: Record<string, unknown>) => Promise<Record<string, string>>;
    getBooking: (params:string) => Promise<Reservations[]>
}

export const reservationService:reservatioCrud = {
    insertBooking: (payload) => api.post('/reservation', payload),
    getBooking: (params) => api.get(`/reservation/${params}`),
}