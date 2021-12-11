import { AdminHttpClient } from "../utils/AdminhttpClient";
import { HttpClient } from "../utils/httpClient";

const PATH = {
  getMembersList: "group/groupMembers",
  getGroupInfo: "group/groupInfo",
  getNonMembers: "/group/nonMembersList",
  addMember: "group/addMember",
};

const getMembersList = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getMembersList}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const getGroupInfo = (params, start, callback, error, next) => {
  start();
  return AdminHttpClient.get(`${PATH.getGroupInfo}`, params)
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

export const GroupServices = {
  getMembersList,
  getGroupInfo,
  addGroupMembers,
  getNonMembers,
};
