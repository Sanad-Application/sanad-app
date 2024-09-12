import {Dimensions, PixelRatio} from 'react-native';

const fonts: {[key: string]: string} = {
  regular: 'IBMPlexSansArabic-Regular',
  medium: 'IBMPlexSansArabic-Medium',
  bold: 'IBMPlexSansArabic-Bold',
};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const widthBaseScale = SCREEN_WIDTH / 390;
const heightBaseScale = SCREEN_HEIGHT / 844;

const normalize = (size: number, based = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const widthPixel = (size: number) => normalize(size, 'width');

const heightPixel = (size: number) => normalize(size, 'height');

const fontPixel = (size: number) => heightPixel(size);

const pixelSizeVertical = (size: number) => heightPixel(size);

const pixelSizeHorizontal = (size: number) => widthPixel(size);

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  fonts,
};
