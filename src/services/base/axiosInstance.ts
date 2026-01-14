import axios from 'axios';
import constants from '../../settings/constants';
import webStorageClient from '../../utils/webStorageClient';

const axiosInstance = axios.create({
  baseURL: constants.API_SERVER,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 300000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem(constants?.ACCESS_TOKEN);

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { config, response } = error;
    const originalRequest = config;

    if (response?.status === 503) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      webStorageClient.removeAll();
      window.location.href = '/auth';
      return Promise.reject(error);
    }

    if (response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      const tokenRefresh = webStorageClient.get(constants.REFRESH_TOKEN);
      if (tokenRefresh) {
        return axiosInstance
          .post('/auth/refresh-token', { refreshToken: tokenRefresh })
          .then((response) => {
            axiosInstance.defaults.headers.common['Authorization'] =
              `Bearer ${response?.data?.accessToken}`;
            originalRequest.headers['Authorization'] =
              `Bearer ${response?.data?.accessToken}`;
            webStorageClient.setToken(response?.data?.accessToken);
            webStorageClient.set(
              constants.REFRESH_TOKEN,
              response?.data?.refreshToken
            );
            return axiosInstance(originalRequest);
          })
          .catch(() => {
            webStorageClient.removeAll();
          });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
