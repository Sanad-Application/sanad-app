import {RequestData} from '~types';
import client from './config';

const {get, post} = client;

export const requestService = {
  getTags: () => get('/clients/tags'),
  createRequest: (data: RequestData, lawyerId: number) =>
    post('/clients/request?lawyerId=' + lawyerId, data),
};
