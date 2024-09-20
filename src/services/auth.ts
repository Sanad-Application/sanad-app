import client from './config';

const {get, post} = client;

export const authService = {
  login: (email: string, password: string) =>
    post('/auth/login', {email, password}),
  register: (data: object, lawyer: boolean) =>
    post(`/auth/${lawyer ? 'lawyer' : 'client'}/signup`, data),
  verifyEmail: (email: string, code: string) =>
    post('/auth/verify-code', {email, code}),
  me: () => get('/users/me'),
};
