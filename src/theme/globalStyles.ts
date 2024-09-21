import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {fontPixel, fonts, heightPixel, widthPixel} from './fonts';

export const globalStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: widthPixel(20),
    paddingBottom: heightPixel(100),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontFamily: fonts.regular,
    fontSize: fontPixel(16),
    color: colors.text,
    textAlign: 'left',
  },

  textArea: {
    height: heightPixel(200),
    alignItems: 'flex-start',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  divider: {
    height: heightPixel(25),
  },

  shadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 5,
  },
});
