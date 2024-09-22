import { View, StyleSheet } from "react-native"
import { Send } from "react-native-gifted-chat"
import { Icon } from "~components"
import { widthPixel, colors } from "~theme"
import { Icons } from "~utils/images"

export const SendButton = (props: any) => {
  return (
    <Send {...props}>
      <View style={styles.sendButton}>
        <Icon source={Icons.arrowSend} />
      </View>
    </Send>
  )
}

const styles = StyleSheet.create({
  sendButton: {
    width: widthPixel(40),
    height: widthPixel(40),
    borderRadius: widthPixel(20),
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
})