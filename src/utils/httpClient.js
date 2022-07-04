import axios from "axios";
import { BASE_URL } from "../Constant";
import { logout } from "../redux/actions/Auth.actions";
import { store } from "../redux/Store";

const HEADERS = {
    "Content-Type": "application/json",
};

export const HttpClient = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        ...HEADERS,
    },
    withCredentials: true,
});

HttpClient.interceptors.request.use((config) => {
    const state = store.getState();
    let token = state.auth.accessToken;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

HttpClient.interceptors.response.use(
    (res) => {
        console.log(res)
        return Promise.resolve(res);
    },
    (error) => {
        console.log(error);
        if (error.response && error.respones.status) {
            const resStatus = error.respones.status;
            if (resStatus === 401 || resStatus === 403) {
                store.dispatch(logout())
                window.location.reload()
            }
        }
        return Promise.reject(error);
    }
);