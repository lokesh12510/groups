import { AdminHttpClient } from "../utils/AdminhttpClient";
import { HttpClient } from "../utils/httpClient";

const PATH = {
  userUpdate: "user/update",
  userInfo: "/user/userInfo",
  home: "user/home",
  acceptPayment: "user/acceptPayment",
  createPayment: "user/createPayment",
  userPayments: "user/payment",
  userContribution: "user/groupContribution",
  deletePayment: "user/deletePayment",
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
const home = (params, start, callback, error, next) => {
  start();
  return HttpClient.get(`${PATH.home}`, params)
    .then(callback)
    .catch(error)
    .finally(next);
};

const acceptPayment = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.post(`${PATH.acceptPayment}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const createPayment = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.post(`${PATH.createPayment}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const userPayments = (params, start, callback, error, next) => {
  console.log(params);
  start();
  return AdminHttpClient.get(`${PATH.userPayments}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const userContribution = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.userContribution}`, params)
    .then(callback)
    .catch(error)
    .finally(next);
};

const deletePayment = (payload, start, callback, error, next) => {
  console.log(payload);
  start();
  return AdminHttpClient.delete(`${PATH.deletePayment}`, { data: payload })
    .then(callback)
    .catch(error)
    .finally(next);
};

export const UserServices = {
  userUpdate,
  userInfo,
  home,
  acceptPayment,
  createPayment,
  userContribution,
  userPayments,
  deletePayment,
};
