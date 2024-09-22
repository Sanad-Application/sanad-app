import { useState } from 'react'
import { BackButton, Button, Container, Input, ScrollContainer, SectionHeader, Spacer } from '~components'
import { globalStyles } from '~theme'
import { UploadFile } from './UploadFile'
import { requestService } from '~services/request'
import { RequestData } from '~types'
import { useAppDispatch } from '~store/hooks'
import { showSnack } from '~store/slices/uiSlice'

const RequestDetails = ({ route, navigation }: any) => {
  const { lawyer, serviceType, specId } = route.params

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const dispatch = useAppDispatch()

  // TODO: Implement uploadFile function
  const uploadFile = () => null

  // constuct request data
  const constructRequest = async () => {
    let attachment = file ? await uploadFile() : null

    return {
      type: serviceType,
      title,
      description: details,
      tagId: specId,
      attachment,
      keywords: []
    } as RequestData
  }

  const submitRequest = async () => {
    try {
      setLoading(true)

      const data = await constructRequest()
      await requestService.createRequest(data, lawyer.id)

      dispatch(showSnack({ type: 'success', message: 'تم ارسال الطلب بنجاح' }))
      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
      dispatch(showSnack({ type: 'error', message: 'حدث خطأ ما حاول مرة اخري' }))
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
        <Button title='ارسال الطلب' onPress={submitRequest} loading={loading} />
      </Container>
    </ScrollContainer>
  )
}

export default RequestDetails