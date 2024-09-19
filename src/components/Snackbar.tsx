import { useEffect } from 'react'
import { Animated, Pressable, StyleSheet, View } from 'react-native'
import { P } from '~components'
import { heightPixel, widthPixel, colors } from '~theme'
import { useAppDispatch, useAppSelector } from '~store/hooks'
import { hideSnack } from '~store/slices/uiSlice'

export const Snackbar = () => {
  const { snackText: text, snackType: type } = useAppSelector(state => state.ui)
  const dispatch = useAppDispatch()

  const hideCB = () => dispatch(hideSnack())

  const translateY = new Animated.Value(150)

  const hide = () => {
    Animated.timing(translateY, {
      toValue: 150,
      useNativeDriver: true,
    }).start(hideCB)
  }

  useEffect(() => {
    if (!text) return

    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start()

    let timeout = setTimeout(hide, 3500)

    return () => {
      clearTimeout(timeout)
    }
  }, [text])

  if (!text) return null

  return (
    <Animated.View style={[styles.conatiner, { transform: [{ translateY }] }]}>
      <View style={[styles.snackBody, { backgroundColor: colors[type as keyof typeof colors] }]}>
        <View style={styles.info}>
          <P color="#fff">{text}</P>
        </View>
        <Pressable onPress={hide}>
          <P color="#FFF" size={30}>
            ×
          </P>
        </Pressable>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    position: 'absolute',
    bottom: heightPixel(35),
    marginHorizontal: widthPixel(20),
  },

  snackBody: {
    position: 'relative',
    borderRadius: heightPixel(8),
    padding: heightPixel(8),
    paddingHorizontal: widthPixel(20),
    backgroundColor: '#121212',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  info: {
    flexDirection: 'row',
  },
})
