import { HttpClient } from "../utils/httpClient";

const PATH = {
  getMembersList: "tool/app/s3/upload",
};

const uploadProfile = (payload, start, callback, error, next) => {
  start();
  return HttpClient.post(`${PATH.getMembersList}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

export const UploadServices = {
  uploadProfile,
};
