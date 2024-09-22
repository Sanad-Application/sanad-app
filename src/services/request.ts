import client from './config';

const {get, post} = client;

type RequestData = {
  type: 'consultation' | 'case';
  title: string;
  description?: string;
  tagId: number;
  attachment?: string;
};

export const requestService = {
  getTags: () => get('/clients/tags'),
  createRequest: (data: RequestData, laywerId: number) =>
    post('/clients/request?laywerId=' + laywerId, data),
};
