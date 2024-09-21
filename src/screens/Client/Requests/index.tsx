import { Container, P, ScrollContainer, Spacer, Tabs } from '~components'
import { colors } from '~theme'
import { RequestTypeTabs } from './RequestTypeTabs'
import { useState } from 'react'
import { RequestList } from './RequestList'

const tabs = ['الحالية', 'القديمة', 'تحت المراجعة']

const Requests = () => {
  const [activeType, setActiveType] = useState<'consult' | 'case'>('consult')
  const [activeTab, setActiveTab] = useState(0)

  return (
    <ScrollContainer>
      <Container>
        <P size={20} center fw='bold'>حجوزات</P>
        <P center color={colors.textLight}>يمكنك تتبع جميع حجوزاتك من هنا سواء كانت قديمة او حالية او تحت المراجعة</P>
        <Spacer h={24} />
        <RequestTypeTabs active={activeType} setActive={setActiveType} />
        <Spacer h={24} />
        <RequestList />
      </Container>
    </ScrollContainer>
  )
}

export default Requests