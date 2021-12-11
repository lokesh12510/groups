import { HttpClient } from "../utils/httpClient";

const PATH = {
  getMembersList: "group/groupMembers",
  getGroupInfo: "group/groupInfo",
};

const getMembersList = (params, start, callback, error, next) => {
  start();
  return HttpClient.get(`${PATH.getMembersList}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const getGroupInfo = (groupId, params, start, callback, error, next) => {
  start();
  return HttpClient.get(`${PATH.getGroupInfo}/${groupId}`, params)
    .then(callback)
    .catch(error)
    .finally(next);
};

export const GroupServices = {
  getMembersList,
  getGroupInfo,
};
