import { useCallback, useEffect, useState } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { SendButton } from './SendButton'
import { ChatInput } from './ChatInput'
import { View } from 'react-native'
import { TopSection } from './TopSection'
import { MessageBubble } from './MessageBubble'
import { AttachmentButton } from './AttachmentButton'
import { socket, joinRoom, sendMessage, Message } from '../../../socket'
import { useAppSelector } from '~store/hooks'

const Chat = ({ route }: any) => {
  const { user } = useAppSelector(state => state.auth)
  const { personId } = route.params
  const id = user!!.id

  const [messages, setMessages] = useState<IMessage[]>([])

  const onReceive = useCallback((message: Message) => {
    console.log('new message')
    const msg: IMessage = {
      _id: Math.random(),
      text: message.content,
      createdAt: new Date(),
      user: {
        _id: message.senderId
      },
    }

    setMessages(curr => GiftedChat.append(curr, [msg]))
  }, [])

  const onSend = (newMessages: IMessage[]) =>
    sendMessage(newMessages[0], id, personId)

  useEffect(() => {
    joinRoom(id, personId)
    socket.on('newMessage', onReceive)
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <TopSection />
      <GiftedChat
        messages={messages}
        user={{ _id: 1 }}
        onSend={onSend}
        placeholder='اكتب رسالتك'
        textInputProps={{ style: { textAlign: 'right', flex: 1 } }}
        alwaysShowSend
        renderInputToolbar={(props) => <ChatInput {...props} />}
        renderSend={(props) => <SendButton {...props} />}
        // renderActions={props => <AttachmentButton {...props} />}
        renderBubble={props => <MessageBubble {...props} />}
      />
    </View>
  )
}

export default Chat