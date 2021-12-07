import { HttpClient } from "../utils/httpClient";

const PATH = {
  userUpdate: "user/update",
  userInfo: "/user/userInfo",
};

const userUpdate = (payload, start, callback, error, next) => {
  start();
  return HttpClient.post(`${PATH.userUpdate}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};
const userInfo = (params, start, callback, error, next) => {
  start();
  return HttpClient.get(`${PATH.userInfo}`, params)
    .then(callback)
    .catch(error)
    .finally(next);
};

export const UserServices = {
  userUpdate,
  userInfo,
};
