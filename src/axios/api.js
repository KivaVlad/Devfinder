import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/"
})

api.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";
    return config;
});

export default api;