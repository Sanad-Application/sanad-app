import { useMemo, useState } from 'react'
import { BackButton, Container, ScrollContainer, Spacer } from '~components'
import { ChooseServiceType } from './ChooseServiceType'
import { ChooseSpec } from './ChooseSpec'
import { useAppNavigation } from '~hooks'

const MakeRequest = ({ route }: any) => {
  const { lawyer } = route.params
  const [step, setStep] = useState(1)
  const [serviceType, setServiceType] = useState('')
  const [spec, setSpec] = useState('')

  const { goBack } = useAppNavigation()

  const handleBack = () => {
    if (step === 1) return goBack()
    setStep(curr => {
      if (curr === 2) setServiceType('')
      if (curr === 3) setSpec('')
      return curr - 1
    })
  }

  useMemo(() => {
    if (serviceType && spec) setStep(3)
    else if (serviceType) setStep(2)
    else setStep(1)
  }, [spec, serviceType])

  return (
    <ScrollContainer>
      <Container>
        <BackButton onPress={handleBack} />
        <Spacer h={32} />
        {step === 1 && <ChooseServiceType setServiceType={setServiceType} />}
        {step === 2 && <ChooseSpec setSpec={setSpec} />}
      </Container>
    </ScrollContainer>
  )
}

export default MakeRequest