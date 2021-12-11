import axios from "axios";
import { BASE_URL } from "../Constant";
import { store } from "../redux/Store";

const HEADERS = {
  "Content-Type": "application/json",
};

export const AdminHttpClient = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    ...HEADERS,
  },
  withCredentials: true,
});

AdminHttpClient.interceptors.request.use((config) => {
  const state = store.getState();
  let token = state.auth.accessToken;
  config.headers.Authorization = `Bearer ${token}`;
  config.headers.group_id = state.groups.currentGroupId;
  return config;
});

AdminHttpClient.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
