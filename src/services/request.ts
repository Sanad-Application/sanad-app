import client from './config';

const {get} = client;

export const requestService = {
  getTags: () => get('/clients/tags'),
};
