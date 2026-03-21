import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fake-api.com/api", // sonra dəyişəcəksən
    timeout: 5000,
});

// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
    (config) => {
        // gələcəkdə token əlavə edə bilərsən
        return config;
    },
    (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API ERROR:", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;