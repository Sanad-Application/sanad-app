import { Container, P, ScrollContainer, Spacer } from '~components'
import { colors } from '~theme'
import { RequestTypeTabs } from './RequestTypeTabs'
import { useState } from 'react'
import { RequestList } from './RequestList'

const Requests = () => {
  const [activeType, setActiveType] = useState<'consult' | 'case'>('consult')
  const [activeTab, setActiveTab] = useState(0)

  // TODO: get requests from the server

  return (
    <ScrollContainer>
      <Container>
        <P size={20} center fw='bold'>الطلبات</P>
        <P center color={colors.textLight}>ستجد جميع طلباتك هنا</P>
        <Spacer h={24} />
        <RequestTypeTabs active={activeType} setActive={setActiveType} />
        <RequestList />
      </Container>
    </ScrollContainer>
  )
}

export default Requests