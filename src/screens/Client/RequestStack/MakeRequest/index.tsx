import { useCallback, useMemo, useState } from 'react'
import { Container, P, ScrollContainer } from '~components'
import { ChooseServiceType } from './ChooseServiceType'
import { ChooseSpec } from './ChooseSpec'
import { colors } from '~theme'

const MakeRequest = ({ route }: any) => {
  const { lawyer } = route.params

  const [serviceType, setServiceType] = useState('')
  const [spec, setSpec] = useState('')

  const step = useMemo(() => {
    if (serviceType === '') return 1
    if (spec === '') return 2
    return 3
  }, [serviceType, spec])

  return (
    <ScrollContainer>
      <Container>
        <P color={colors.textLight}>الخطوة: {step} / 5</P>
        {step === 1 && <ChooseServiceType setServiceType={setServiceType} />}
        {step === 2 && <ChooseSpec setSpec={setSpec} />}
      </Container>
    </ScrollContainer>
  )
}

export default MakeRequest