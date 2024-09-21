import { Pressable } from "react-native"
import { useAppNavigation } from "~hooks"
import { Icon } from "~components/Icon"
import { Icons } from "~utils/images"

type Props = {
  onPress?: () => void
}

export const BackButton = ({ onPress }: Props) => {
  const { goBack, canGoBack } = useAppNavigation()
  if (!onPress || !canGoBack()) return null
  return <Pressable onPress={onPress || goBack}>
    <Icon size={35} source={Icons.back} />
  </Pressable>
}