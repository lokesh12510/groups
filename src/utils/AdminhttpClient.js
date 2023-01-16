import axios from "axios";
import { BASE_URL } from "../Constant";
import { logout } from "../redux/actions/Auth.actions";
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
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.group_id = state.groups.currentGroupId;
  return config;
});

AdminHttpClient.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    console.log(error);
    if (error.response && error.respones.status) {
      const resStatus = error.respones.status;
      if (resStatus === 401 || resStatus === 403) {
        store.dispatch(logout());
        window.location.reload();
      }
    }
    return Promise.reject(error);
  }
);
