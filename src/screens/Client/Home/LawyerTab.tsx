import { Image, StyleSheet, View } from "react-native"
import { Button, Icon, P } from "~components"
import { useAppNavigation } from "~hooks"
import { colors, fontPixel, globalStyles, widthPixel } from "~theme"
import { Lawyer } from "~types"
import { Icons, Images } from "~utils/images"

export const LawyerTab = ({ data }: { data: Lawyer }) => {
  const { navigate } = useAppNavigation()

  const goToLawerScreen = () =>
    navigate('MakeRequest', { lawyer: data })

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={Images.ex_lawyer} style={globalStyles.image} />
      </View>
      <View style={styles.details}>
        <P size={16}>{data.user.firstName + " " + data.user.lastName}</P>

        <View style={styles.middleRow}>
          <View style={globalStyles.row}>
            <Icon source={Icons.briefcase} size={16} style={styles.icon} />
            <P size={14}>{data.experienceYears} سنوات خبرة</P>
          </View>
          <View style={globalStyles.row}>
            <Icon source={Icons.star} size={16} style={styles.icon} />
            <P size={14}>{data.avgRate}</P>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <Button
            title="حجز الان"
            onPress={goToLawerScreen}
            style={styles.btn}
            textStyle={styles.btnText}
          />
          <View style={globalStyles.row}>
            <Icon source={Icons.location} size={16} style={styles.icon} />
            <P size={14}>{data.location}</P>
          </View>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: colors.textLight + '50',
    borderWidth: widthPixel(1),
    borderRadius: widthPixel(8),
    marginBottom: widthPixel(16),
    height: widthPixel(136),
    backgroundColor: colors.white,
    overflow: 'hidden',
  },

  imgContainer: {
    width: widthPixel(100),
    marginRight: widthPixel(16),
    borderRadius: widthPixel(12),
  },

  details: {
    padding: widthPixel(16),
    flex: 1,
  },

  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: widthPixel(8),
    paddingRight: widthPixel(12),
  },

  icon: {
    marginRight: widthPixel(4),
    marginBottom: widthPixel(4),
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn: {
    paddingVertical: widthPixel(4),
    paddingHorizontal: widthPixel(16),
    borderRadius: widthPixel(16),
    backgroundColor: colors.primary,
  },

  btnText: {
    fontSize: fontPixel(14),
    color: colors.white,
  },
})