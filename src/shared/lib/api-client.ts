import axios from 'axios';
import { env } from './env';

export const apiClient = axios.create({
    baseURL: env.apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});



const publicApiPaths = ['/auth/login', '/auth/register'];
const publicFrontendPaths = ['/login', '/register'];


apiClient.interceptors.request.use(
    (config) => {

        const isPublic = publicApiPaths.some((path) => config.url?.includes(path));
        if (isPublic) return config;

        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);


apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('access_token');

            const isOnPublicUrl = publicFrontendPaths.some((path) => window.location.pathname.startsWith(path));
            if (!isOnPublicUrl) {
                window.location.href = '/login';
            }

        }
        return Promise.reject(error);
    }
);