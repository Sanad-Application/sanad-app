import { Image, Pressable, StyleSheet, View } from "react-native"
import { P } from "~components"
import { useAppNavigation } from "~hooks"
import { colors, globalStyles, widthPixel } from "~theme"
import { Chat } from "~types"
import { Images } from "~utils/images"

export const ChatTab = (data: Chat) => {
  const { navigate } = useAppNavigation()

  const goToChat = () => navigate("Chat", { room: data.room })

  return (
    <Pressable style={styles.container} onPress={goToChat}>
      <View style={styles.imgContainer}>
        <Image source={Images.ex_lawyer} style={globalStyles.image} />
      </View>
      <View>
        <P size={16} fw="medium">{data.otherUserName}</P>
        <P color={colors.textLight}>رسالة جديدة</P>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },

  imgContainer: {
    marginRight: widthPixel(16),
    width: widthPixel(50),
    height: widthPixel(50),
    borderRadius: widthPixel(50),
    overflow: 'hidden'
  }
})