import {StyleSheet, View, Image} from 'react-native';
import {heightPixel, widthPixel} from '../theme/fonts';

interface IconProps {
  source: any;
  size?: number;
  color?: string;
  style?: any;
  rotate?: boolean;
}

export const Icon = ({
  source,
  size,
  color,
  style,
  rotate = false,
}: IconProps) => {
  return (
    <View
      style={[
        {width: widthPixel(size || 25), height: heightPixel(size || 25)},
        rotate && {transform: [{rotate: '180deg'}]},
        style,
      ]}>
      <Image
        style={[
          styles.iconImage,
          {tintColor: color},
        ]}
        source={source}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconImage: {
    width: '100%',
    height: '100%',
    tintColor: 'black',
  },
});
