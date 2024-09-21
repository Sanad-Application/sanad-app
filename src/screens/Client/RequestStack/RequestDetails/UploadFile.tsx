import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from '~components'
import DocumentPicker from 'react-native-document-picker'
import { colors, heightPixel } from '~theme'

type UploadFileProps = {
  file: any
  setFile: (file: any) => void
}

export const UploadFile = ({ file, setFile }: UploadFileProps) => {
  const [loading, setLoading] = useState(false)

  const pickFile = async () => {
    try {
      setLoading(true)
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: false,
      })

      setFile(res[0])
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View>
      <Button
        title={file?.name || 'رفع مستند'}
        onPress={pickFile}
        style={[styles.button, file && styles.activeBtn]}
        loading={loading}
        textStyle={[styles.buttonText, file && styles.activeBtnText]}
        icon={file ? undefined : 'upload'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.textLight,
    borderStyle: 'dashed',
    paddingVertical: heightPixel(20),
  },

  activeBtn: {
    borderColor: colors.primary,
    borderStyle: 'solid',
  },

  buttonText: {
    color: colors.textLight,
  },

  activeBtnText: {
    color: colors.primary,
  },
})