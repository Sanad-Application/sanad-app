import { useMemo, useState } from 'react'
import { BackButton, Container, ScrollContainer, Spacer } from '~components'
import { ChooseServiceType } from './ChooseServiceType'
import { ChooseSpec } from './ChooseSpec'
import { useAppNavigation } from '~hooks'

const MakeRequest = ({ route }: any) => {
  const { lawyer } = route.params
  const [step, setStep] = useState(1)
  const [serviceType, setServiceType] = useState('')

  const { goBack, navigate } = useAppNavigation()

  const handleBack = () => {
    if (step === 1) return goBack()
    setStep(curr => {
      if (curr === 2) setServiceType('')
      return curr - 1
    })
  }

  useMemo(() => {
    if (serviceType) setStep(2)
    else setStep(1)
  }, [serviceType])

  const setSpec = (spec: string) =>
    navigate('RequestDetails', { lawyer, serviceType, spec })

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