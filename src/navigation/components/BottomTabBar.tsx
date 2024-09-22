import { useEffect, useState } from 'react'

import { View, StyleSheet, Pressable, Keyboard } from 'react-native'
import { colors, fonts } from '~theme'
import { Icons } from '~utils/images'
import { Icon, P } from '~components'

interface BottomTabBarProps {
  state: any
  descriptors: any
  navigation: any
}

export const BottomTabBar = ({
  state,
  navigation,
}: BottomTabBarProps) => {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setHidden(true))
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setHidden(false))

    return () => {
      showListener.remove()
      hideListener.remove()
    }
  }, [Keyboard])

  const navigate = (route: any, isFocused: boolean) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true })
    }
  }

  return (
    <>
      {!hidden && (
        <View style={styles.continer}>
          {state.routes.map((route: any, index: number) => {

            const isFocused = state.index === index

            if (route.name == 'Notifications') return null

            let label
            let tabBarIcon = null
            let tabBarIconColor = isFocused
              ? colors.primary
              : colors.textLight

            switch (route.name) {
              case 'Home':
                tabBarIcon = Icons.home
                label = 'الرئيسية'
                break
              case 'Requests':
                tabBarIcon = Icons.request
                label = 'الطلبات'
                break
              case 'ChatList':
                tabBarIcon = Icons.chat
                label = 'المحادثات'
                break
              case 'Profile':
                tabBarIcon = Icons.profile
                label = 'الحساب'
                break
            }

            return (
              <Pressable
                key={route.name}
                onPress={() => navigate(route, isFocused)}
                style={styles.button}>
                <Icon source={tabBarIcon} size={22} color={tabBarIconColor} />
                <P
                  color={tabBarIconColor}
                  size={12}>
                  {label}
                </P>
              </Pressable>
            )
          })}
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  continer: {
    backgroundColor: colors.background,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 16,
    paddingTop: 5,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 10,
    fontFamily: fonts.semiBold,
  },
})
