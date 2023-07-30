import axios from "axios";

const api='https://wtsacademy.dedicateddevelopers.us/api/user';

export const baseURL = api;

let axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
    async function(config){
        const token=localStorage.getItem('token');
        if(token!==null || token!==undefined){
            config.headers['x-access-token']=token;
        }
        return config;
    },
    function(err){
        return Promise.reject(err);
    }
)

export default axiosInstance;