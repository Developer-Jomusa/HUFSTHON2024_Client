import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import Config from 'react-native-config';
import {errorLogger, requestLogger, responseLogger} from "axios-logger";
export const setupAxiosInterceptors = () => {

    axios.defaults.baseURL = Config.API_URL;
    axios.defaults.timeout = 10000;
    
    const requestInterceptors = axios.interceptors.request.use(
        (request: InternalAxiosRequestConfig) => {
            return requestLogger(request);
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    const responseInterceptors = axios.interceptors.response.use(
        (response: AxiosResponse) => responseLogger(response),
        (error) => errorLogger(error)
    );

    
    return () => {
        axios.interceptors.request.eject(requestInterceptors);
        axios.interceptors.response.eject(responseInterceptors);
    };
}