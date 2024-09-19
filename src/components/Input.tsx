import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  I18nManager,
} from 'react-native'
import { P } from './P'
import { colors } from '../theme/colors'
import { Icon } from './Icon'
import { Icons } from '../utils/images'
import { useState } from 'react'
import { heightPixel, widthPixel } from '../theme/fonts'

interface InputProps {
  style?: any
  password?: boolean
  placeholder?: string
  value?: string | null | undefined
  onChange?: (text: string) => void
  number?: boolean
}

export const Input = ({
  placeholder,
  value,
  onChange,
  password = false,
  style,
  number,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, style]}>
        <TextInput
          style={[styles.input, I18nManager.isRTL && { textAlign: 'right' }]}
          placeholder={placeholder}
          placeholderTextColor={colors.textLight}
          value={value || ''}
          onChangeText={onChange}
          secureTextEntry={password && !showPassword}
          keyboardType={number ? 'number-pad' : 'default'}
        />
        {password && (
          <Pressable
            onPress={() => setShowPassword(curr => !curr)}>
            <Icon
              source={Icons[showPassword ? 'eyeSlash' : 'eye']}
              color={colors.textLight}
            />
          </Pressable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: heightPixel(10),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: widthPixel(12),
    overflow: 'hidden',
    borderWidth: 0.3,
    borderColor: 'grey',
    marginTop: heightPixel(5),
    paddingVertical: widthPixel(16),
    paddingHorizontal: widthPixel(12),
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: widthPixel(16),
    padding: 0,
  },
})
