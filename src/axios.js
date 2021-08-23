import axios from "axios";

const API_URL = "http://127.0.0.1:8080/";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;