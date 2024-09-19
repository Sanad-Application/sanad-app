import client from "./config";

const {get} = client;

export const lawyerService = {
  getLawyers: () => get('/clients/lawyers'),
}