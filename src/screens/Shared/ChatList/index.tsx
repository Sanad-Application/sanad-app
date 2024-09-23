import { Container, P, ScrollContainer, Spacer } from '~components'
import { colors } from '~theme'

const ChatList = () => {
  return (
    <ScrollContainer>
      <Container>
        <Spacer h={16} />
        <P size={20} fw='bold' center>المحادثات</P>
        <Spacer h={40} />
        <P center color={colors.textLight} size={16}>لا يوجد لديك محادثات</P>
      </Container>
    </ScrollContainer>
  )
}

export default ChatList