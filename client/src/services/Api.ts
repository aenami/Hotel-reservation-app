import { tokenManager } from "../utils/tokenManager";

// URL base sobre la cual construiremos la direccion de nuestras peticiones
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Funcion que se encargara de crear todos los headers necesarios para cada peticion
const buildHeaders = (isPublic = false):Record<string, string> => {
    const headers:Record<string, string> = { "Content-Type": "application/json" };

    if (!isPublic) {
        const token = tokenManager.getToken();
        if (token) headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
};

const handleResponse = async (response: Response) => {
    // Verificamos si al respuesta que devolvio el servidor fue 2xx u otra distinta
    if (!response.ok) {
        // Si el token expiró, limpiar sesión
        if (response.status === 401) {
            localStorage.removeItem("auth_token");
            window.location.href = "/login";
        }

        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `Error ${response.status}`);
    }

    return response.json();
};

export const api = {
    get: (endpoint: string, isPublic = false) =>
        fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
        headers: buildHeaders(isPublic),
        }).then(handleResponse),

    post: (endpoint: string, body: Record<string, unknown>, isPublic = false) =>
        fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: buildHeaders(isPublic),
        body: JSON.stringify(body),
        }).then(handleResponse),

    put: (endpoint: string, body: Record<string, unknown>) =>
        fetch(`${BASE_URL}${endpoint}`, {
        method: "PUT",
        headers: buildHeaders(),
        body: JSON.stringify(body),
        }).then(handleResponse),

    delete: (endpoint: string) =>
        fetch(`${BASE_URL}${endpoint}`, {
        method: "DELETE",
        headers: buildHeaders(),
        }).then(handleResponse),
};