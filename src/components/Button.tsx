import {Pressable, StyleSheet, ActivityIndicator} from 'react-native';
import {colors} from '../theme/colors';
import {Icon} from './Icon';
import {Icons} from '../utils/images';
import { heightPixel, widthPixel } from '../theme/fonts'
import { P } from './P'

interface ButtonProps {
  title: string;
  onPressHandler: () => void;
  style?: any;
  textStyle?: any;
  loading?: boolean;
  icon?: string;
  revert?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {title, onPressHandler, style, icon, textStyle, loading, revert} = props;

  return (
    <Pressable
      android_ripple={{color: '#DDD'}}
      style={[styles.buttonContianer, revert && {backgroundColor: 'transparent'}, style]}
      onPress={onPressHandler}>
      {icon && (
        <Icon
          source={Icons[icon as keyof typeof Icons]}
          size={22}
          style={{marginRight: widthPixel(10)}}
        />
      )}
      {loading ? (
        <ActivityIndicator color={revert? colors.primary : colors.white} size={28} />
      ) : (
        <P size={16} color={revert? colors.primary : colors.white} fw='medium' style={textStyle}>{title}</P>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContianer: {
    backgroundColor: colors.primary,
    borderRadius: widthPixel(16),
    marginTop: heightPixel(10),
    padding: heightPixel(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
