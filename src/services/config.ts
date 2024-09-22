import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import log from '~utils/logger';

export const baseURL = 'http://192.168.100.3:8080/api';

const client = axios.create({baseURL});

const constructLog = (req: any) => {
  let url = req.responseURL?.substring(baseURL.length);
  return `[${req._method}] ${url} ${req.status}`;
};

const injectToken = async (config: any) => {
  const token = (await AsyncStorage.getItem('token')) || null;
  if (!config.headers.Authorization && token)
    config.headers.Authorization = `Bearer ${token}`;
  return config;
};

client.interceptors.request.use(injectToken, error => Promise.reject(error));

client.interceptors.response.use(
  res => {
    log.server(constructLog(res.request));
    return res;
  },
  error => {
    log.server_Error(constructLog(error.request));
    return Promise.reject(error);
  },
);

export default client;
