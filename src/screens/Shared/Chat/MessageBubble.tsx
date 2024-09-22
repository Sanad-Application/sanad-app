import { Bubble } from "react-native-gifted-chat"
import { colors } from "~theme"


export const MessageBubble = (props: any) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: { backgroundColor: colors.primary },
        left: { backgroundColor: colors.white },
      }}
    />
  )
}