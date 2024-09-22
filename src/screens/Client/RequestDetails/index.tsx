import { useState } from 'react'
import { BackButton, Button, Container, Input, ScrollContainer, SectionHeader, Spacer } from '~components'
import { globalStyles } from '~theme'
import { UploadFile } from './UploadFile'

const RequestDetails = ({ route }: any) => {
  const { lawyer, serviceType, spec } = route.params

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  // TODO: Implement this
  const goToPayement = () => null

  const submitRequest = async () => {
    try {
      setLoading(true)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollContainer>
      <Container>
        <BackButton />
        <SectionHeader title="تفاصيل الاستشارة" />
        <Spacer h={24} />
        <Input
          label="عنوان الاستشارة"
          placeholder="ادخل عنوان الاستشارة"
          value={title}
          onChange={setTitle}
        />
        <Input
          label="تفاصيل الاستشارة"
          placeholder="اكتب التفاصيل بشكل واضح ومفسر"
          value={details}
          onChange={setDetails}
          style={globalStyles.textArea}
        />
        <Spacer h={24} />
        <UploadFile file={file} setFile={setFile} />
        <Spacer h={24} />
        <Button title='التالي' onPress={goToPayement} />
      </Container>
    </ScrollContainer>
  )
}

export default RequestDetails