import { AdminHttpClient } from "../utils/AdminhttpClient";

const PATH = {
  getReport: "transaction/report-Transaction",
};

const getReport = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getReport}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

export const GroupServices = {
  getReport,
};
