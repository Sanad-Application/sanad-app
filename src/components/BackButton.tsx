import { Pressable } from "react-native"
import { useAppNavigation } from "~hooks"
import { Icon } from "~components/Icon"
import { Icons } from "~utils/images"
import { heightPixel } from "~theme"

type Props = {
  onPress?: () => void
  light?: boolean
}

export const BackButton = ({ onPress, light }: Props) => {
  const { goBack, canGoBack } = useAppNavigation()
  if (!onPress && !canGoBack()) return null
  return <Pressable onPress={onPress || goBack} style={{ marginBottom: heightPixel(24) }}>
    <Icon size={35} source={light ? Icons.lightBack : Icons.back} />
  </Pressable>
}