import { View } from "react-native"
import { heightPixel } from "~theme"

export const Spacer = ({h}: {h: number}) => {
  return <View style={{height: heightPixel(h)}} />;
}