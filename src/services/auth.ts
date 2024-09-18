import client from "./config";

const {post} = client;

export const authService = {
  login: (email: string, password: string) => post('/auth/login', {email, password}),
}