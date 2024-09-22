import { useState } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { SendButton } from './SendButton'
import { ChatInput } from './ChatInput'
import { View } from 'react-native'
import { TopSection } from './TopSection'
import { MessageBubble } from './MessageBubble'
import { AttachmentButton } from './AttachmentButton'

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([])

  const onSend = (newMessages: IMessage[]) =>
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages))

  const onAction = () => {
    console.log('Action pressed')
  }

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
        renderActions={props => <AttachmentButton {...props} />}
        renderBubble={props => <MessageBubble {...props} />}
      />
    </View>
  )
}

export default Chat