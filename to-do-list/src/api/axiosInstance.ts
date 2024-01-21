import axios from "axios";
import { CONSTANTS } from "./constants";

const fetchWithAuth = axios.create({
  baseURL: CONSTANTS.SERVER,
  withCredentials: true,
  responseType: "json",
});

fetchWithAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      try {
        const refreshResult = await fetch(
          CONSTANTS.SERVER + CONSTANTS.REFRESH_TOKEN_URL,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (refreshResult?.status === 200) {
          return fetchWithAuth(error.config);
        } else {
          window.location.href = "/auth";
        }
      } catch (error) {
        console.log(error);
      }
    }
    return Promise.reject(error);
  }
);

export { fetchWithAuth };
