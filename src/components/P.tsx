import { Text, TextStyle } from 'react-native'
import { fontPixel, fonts } from '../theme/fonts'
import { colors } from '../theme/colors'

interface PProps {
  children: any
  size?: number
  fw?: string
  color?: string
  style?: TextStyle
  limit?: number
  lines?: number
  center?: boolean
}

export function P({
  children,
  size = 14,
  fw = 'regular',
  color = colors.text,
  style,
  lines,
  center,
}: PProps): JSX.Element {
  return (
    <Text
      numberOfLines={lines}
      ellipsizeMode="tail"
      style={[
        {
          fontSize: fontPixel(size),
          fontFamily: fonts[fw],
          color,
          lineHeight: fontPixel(size + 12),
          textAlign: center ? 'center' : 'left',
        },
        style,
      ]}>
      {children}
    </Text>
  )
}
