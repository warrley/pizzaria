import { signOut } from "@/context/AuthContext";
import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies"

export const setupAPI = (ctx = undefined) => {
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: "http://localhost:3300",
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    });

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if(error.response !== undefined && error.response.status === 401) {
            if(typeof window !== undefined) {
                signOut();
            } else {
                return Promise.reject("Error with authentication token.")
            };
        };

        return Promise.reject(error);
    });

    return api;
};