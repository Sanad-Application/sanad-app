import { StyleSheet } from "react-native"
import { IMessage, InputToolbar, InputToolbarProps, Send } from "react-native-gifted-chat"
import { colors, widthPixel } from "~theme"

export const ChatInput = (props: InputToolbarProps<IMessage>) => {
  return <InputToolbar
    {...props}
    containerStyle={styles.input}
  />
}

const styles = StyleSheet.create({
  input: {
    borderTopWidth: 0,
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(12),
    paddingRight: widthPixel(4),
    paddingVertical: widthPixel(14),
    justifyContent: 'center',
  },
})