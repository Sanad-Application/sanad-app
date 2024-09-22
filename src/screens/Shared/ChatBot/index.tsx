import { TopSection } from './TopSection'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ChatInput } from './ChatInput'
import { Welcome } from './Welcome'
import { SendButton } from './SendButton'
import { widthPixel } from '~theme'

const ChatBot = () => {
  const [messages, setMessages] = useState<IMessage[]>([])

  const onSend = useCallback((messages: IMessage[]) => {
    setMessages(curr => GiftedChat.append(curr, messages))
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <TopSection />
      <GiftedChat
        messages={messages}
        user={{ _id: 1 }}
        onSend={onSend}
        placeholder='اكتب رسالتك'
        textInputProps={{ style: styles.input }}
        renderSend={(props) => <SendButton {...props} />}
        renderInputToolbar={(props) => <ChatInput {...props} />}
        alwaysShowSend
        listViewProps={{ ListFooterComponent: <Welcome /> }}
      />
    </View>
  )
}

export default ChatBot

const styles = StyleSheet.create({
  input: {
    flex: 1,
    textAlign: 'right',
  },
})