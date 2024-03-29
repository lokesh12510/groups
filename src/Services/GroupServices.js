import { AdminHttpClient } from "../utils/AdminhttpClient";

const PATH = {
  getMembersList: "group/groupMembers",
  getGroupInfo: "group/groupInfo",
  getNonMembers: "/group/nonMembersList",
  addMember: "group/addMember",
  removeMember: "group/removeMember",
  payments: "group/payments",
  getDashboardDetails: "tool/dashboardDetails",
  reportPayment: "group/reportPayments",
  updateGroupInfo: "group/updateGroup",
  updatePosition: "group/updateMemberStatus",
  getSubscriptions: "group/plan",
};

const getMembersList = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getMembersList}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const getGroupInfo = (groupId, params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getGroupInfo}/${groupId}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};
const getNonMembers = (groupId, params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getNonMembers}/${groupId}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const addGroupMembers = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.post(`${PATH.addMember}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const removeGroupMembers = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.post(`${PATH.removeMember}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const updateGroupInfo = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.post(`${PATH.updateGroupInfo}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const updatePosition = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.post(`${PATH.updatePosition}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const payments = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.payments}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const reportPayment = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.reportPayment}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const getDashboardDetails = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getDashboardDetails}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const getSubscriptions = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getSubscriptions}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const createSubscriptions = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.post(`${PATH.getSubscriptions}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const updateSubscriptions = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.put(`${PATH.getSubscriptions}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const deleteSubscriptions = (payload, start, callback, error, next) => {
  start();
  return AdminHttpClient.delete(`${PATH.getSubscriptions}`, { data: payload })
    .then(callback)
    .catch(error)
    .finally(next);
};

export const GroupServices = {
  getMembersList,
  getGroupInfo,
  addGroupMembers,
  getNonMembers,
  removeGroupMembers,
  payments,
  getDashboardDetails,
  reportPayment,
  updateGroupInfo,
  getSubscriptions,
  createSubscriptions,
  updateSubscriptions,
  updatePosition,
  deleteSubscriptions,
};
