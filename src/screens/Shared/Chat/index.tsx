import { useCallback, useEffect, useState } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { SendButton } from './SendButton'
import { ChatInput } from './ChatInput'
import { View } from 'react-native'
import { TopSection } from './TopSection'
import { MessageBubble } from './MessageBubble'
import { socket, joinRoom, sendMessage } from '../../../socket'
import { useAppSelector } from '~store/hooks'
import { Message } from '~types'
import { colors } from '~theme'

const Chat = ({ route }: any) => {
  const { user } = useAppSelector(state => state.auth)
  const id = user!!.id

  let { personId, room } = route.params
  personId = personId || room.split('-').find((ID: string) => !isNaN(+ID) && +ID !== id)

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
    <View style={{ flex: 1, backgroundColor: colors.background }}>
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
        renderBubble={props => <MessageBubble {...props} />}
      />
    </View>
  )
}

export default Chat