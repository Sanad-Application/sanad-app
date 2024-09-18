import { View } from "react-native"
import { heightPixel, widthPixel } from "~theme"

export const Spacer = ({ h, w }: { h?: number, w?: number }) => {
  return <View style={{ height: heightPixel(h || 0), width: widthPixel(w || 0) }} />
}