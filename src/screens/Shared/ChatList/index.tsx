import { useEffect, useState } from 'react'
import { Container, Loader, P, ScrollContainer, Spacer } from '~components'
import { chatService } from '~services/chat'
import { colors } from '~theme'
import { ChatTab } from './ChatTab'

const ChatList = () => {
  const [loading, setLoading] = useState(false)
  const [chats, setChats] = useState([])

  const getChats = async () => {
    try {
      setLoading(true)
      const res = await chatService.getChats()
      setChats(res.data.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getChats()
  }, [])

  if (loading) return <Loader />

  return (
    <ScrollContainer>
      <Container>
        <Spacer h={16} />
        <P size={20} fw='bold' center>المحادثات</P>
        <Spacer h={40} />
        {!chats.length && <P center color={colors.textLight} size={16}>لا يوجد لديك محادثات</P>}
        {chats.map((chat: any, index: number) => (
          <ChatTab key={index} {...chat} />
        ))}
      </Container>
    </ScrollContainer>
  )
}

export default ChatList