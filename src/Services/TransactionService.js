import { AdminHttpClient } from "../utils/AdminhttpClient";

const PATH = {
  getReport: "transaction/report-Transaction",
  createTransaction: "transaction/create-Transaction",
};

const getReport = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getReport}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const createTransaction = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.post(`${PATH.getReport}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

export const TransactionServices = {
  getReport,
  createTransaction,
};
