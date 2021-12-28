import { AdminHttpClient } from "../utils/AdminhttpClient";

const PATH = {
  getReport: "transaction/report-Transaction",
  createTransaction: "transaction/create-Transaction",
  historyTransaction: "transaction/history-Transaction",
  reportTransaction: "transaction/report-Transaction",
};

const getReport = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getReport}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const historyTransaction = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.historyTransaction}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const reportTransaction = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.reportTransaction}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const createTransaction = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.post(`${PATH.createTransaction}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

export const TransactionServices = {
  getReport,
  createTransaction,
  historyTransaction,
  reportTransaction,
};
