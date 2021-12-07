import { HttpClient } from "../utils/httpClient";

const PATH = {
  getMembersList: "group/groupMembers",
};

const getMembersList = (params, start, callback, error, next) => {
  start();
  return HttpClient.get(`${PATH.getMembersList}`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

export const GroupServices = {
  getMembersList,
};
