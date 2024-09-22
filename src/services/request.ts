import {RequestData} from '~types';
import client from './config';

const {get, post} = client;

export const requestService = {
  getTags: () => get('/clients/tags'),
  getRequests: (status: number) => get('/lawyers/requests?type=' + status),
  createRequest: (data: RequestData, lawyerId: number) =>
    post('/clients/request?lawyerId=' + lawyerId, data),
};
