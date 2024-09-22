import { useEffect, useMemo, useState } from 'react'
import { BackButton, Container, ScrollContainer, Spacer } from '~components'
import { ChooseServiceType } from './ChooseServiceType'
import { ChooseSpec } from './ChooseSpec'
import { useAppNavigation } from '~hooks'
import { Tag } from '~types'
import { requestService } from '~services/request'

const MakeRequest = ({ route }: any) => {
  const { lawyer } = route.params

  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [serviceType, setServiceType] = useState('')
  const [tags, setTags] = useState<Tag[]>([])

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

  const getTags = async () => {
    try {
      setLoading(true)
      const res = await requestService.getTags()
      setTags(res.data.data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTags()
  }, [])

  const nextStep = (specId: number) =>
    navigate('RequestDetails', { lawyer, serviceType, specId })

  return (
    <ScrollContainer>
      <Container>
        <BackButton onPress={handleBack} />
        <Spacer h={32} />
        {step === 1 && <ChooseServiceType setServiceType={setServiceType} />}
        {step === 2 && <ChooseSpec tags={tags} setSpec={nextStep} />}
      </Container>
    </ScrollContainer>
  )
}

export default MakeRequest