import axios from "@config/axios";

export function uploadFile(data, params) {
  return axios.post("/third/v1/upload-file", data, params);
}

export function getAddress(data, params) {
  return axios.get("/third/v1/getAddress", {
    params: data,
  });
}