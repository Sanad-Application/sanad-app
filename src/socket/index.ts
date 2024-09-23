import {IMessage} from 'react-native-gifted-chat';
import io from 'socket.io-client';

export const socket = io('http://192.168.100.3:9092');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('connect_error', e => {
  console.log('Sad', e);
});

export type Message = {
  room: string;
  content: string;
  senderId: number;
  receiverId: number;
};

const constructRoomName = (id1: number, id2: number) =>
  'chat-' + [id1, id2].sort().join('-');

export const constructMessage = (
  message: IMessage,
  senderId: number,
  receiverId: number,
) => {
  return {
    room: constructRoomName(senderId, receiverId),
    content: message.text,
    senderId,
    receiverId,
  };
};

export const joinRoom = (id1: number, id2: number) => {
  console.log(constructRoomName(id1, id2));
  socket.emit('joinRoom', constructRoomName(id1, id2));
};

export const sendMessage = (
  message: IMessage,
  senderId: number,
  receiverId: number,
) => {
  socket.emit('sendMessage', constructMessage(message, senderId, receiverId));
};
