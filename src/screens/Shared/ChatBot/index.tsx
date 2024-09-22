import { TopSection } from './TopSection'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ChatInput } from './ChatInput'
import { Welcome } from './Welcome'
import { SendButton } from './SendButton'
import { colors } from '~theme'
import { aiService } from '~services/ai'

const ChatBot = () => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const [loading, setLoading] = useState(false)

  const onSend = async (msgs: IMessage[]) => {
    try {
      setMessages((curr) => GiftedChat.append(curr, msgs))
      setLoading(true)

      const res = await aiService.getChatAnswer(msgs[0].text)
      const { response } = res.data

      setMessages(curr => GiftedChat.append(curr, [
        {
          _id: Math.random(),
          text: response,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Chatbot',
          },
        },
      ]))

      setLoading(false)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
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