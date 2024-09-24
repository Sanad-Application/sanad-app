export type Message = {
  room: string;
  content: string;
  senderId: number;
  receiverId: number;
};

export type Chat = {
  chatId: number;
  otherUserName: string;
  room: string;
};
