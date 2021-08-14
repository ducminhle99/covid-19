import axios from "axios";
import queryString from "querystring";

const axiosClient = axios.create({
    baseURL: "https://api.covid19api.com",
    header: {
        'content-type': 'application/json',
    },
    paramsSerializer: param => queryString.stringify(param),
});

axiosClient.interceptors.request.use(async (config) => {
    // handle token here
    return config;
});

axiosClient.interceptors.response.use((respose) => {
    if (respose.data && respose) {
        return respose.data;
    }
    return respose;
}, (error) => {
    throw error;
});

export default axiosClient;