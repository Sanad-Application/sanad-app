import client from "./config"

const { get } = client

export const chatService = {
  getChats: () => get('/users/chats'),
  getChat: (room: string) => get(`/users/chat?room=${room}`),
}