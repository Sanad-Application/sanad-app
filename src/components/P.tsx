import {Text, TextStyle} from 'react-native';
import {fontPixel, fonts} from '../theme/fonts';
import {colors} from '../theme/colors';

interface PProps {
  children: any;
  size?: number;
  fw?: string;
  color?: string;
  style?: TextStyle;
  limit?: number;
  lines?: number;
}

export function P({
  children,
  size = 14,
  fw = 'regular',
  color = colors.text,
  style,
  lines,
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
          textAlign: 'left',
        },
        style,
      ]}>
      {children}
    </Text>
  );
}
