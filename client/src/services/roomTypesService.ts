import { api } from "./Api";

export const roomTypesService = {
    getRoomTypes: () => api.get('/roomTypes'),
}