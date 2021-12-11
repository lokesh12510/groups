import { AdminHttpClient } from "../utils/AdminhttpClient";

const PATH = {
  getMembersList: "group/groupMembers",
  getGroupInfo: "group/groupInfo",
  getNonMembers: "/group/nonMembersList",
  addMember: "group/addMember",
  removeMember: "group/removeMember",
  pendingPayments: "group/pendingPayments",
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
  return AdminHttpClient.get(`${PATH.getGroupInfo}/${groupId}`, params)
    .then(callback)
    .catch(error)
    .finally(next);
};
const getNonMembers = (groupId, params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getNonMembers}/${groupId}`, params)
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

const pendingPayments = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.pendingPayments}`, { params })
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
  pendingPayments,
};
