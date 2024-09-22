import client from './config';

const {get, post} = client;

export const authService = {
  login: (email: string, password: string, fcmToken: string) =>
    post('/auth/login', {email, password, fcmToken}),

  register: (data: object, lawyer: boolean) =>
    post(`/auth/${lawyer ? 'lawyer' : 'client'}/signup`, data),

  verifyEmail: (email: string, code: string) =>
    post('/auth/verify-code', {email, code}),

  createLawyer: (data: object, token: string) =>
    post('/lawyers/create', data, {
      headers: {Authorization: `Bearer ${token}`},
    }),

  me: () => get('/users/me'),
};
