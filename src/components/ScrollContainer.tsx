import { ReactNode } from 'react'
import { ScrollView } from 'react-native'
import { colors, heightPixel } from '~theme'

export const ScrollContainer = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.background, paddingBottom: heightPixel(50) }}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  )
}