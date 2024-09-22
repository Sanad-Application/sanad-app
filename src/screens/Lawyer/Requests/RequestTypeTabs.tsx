import { View } from "react-native"
import { ChooseButton, Spacer } from "~components"
import { globalStyles, widthPixel } from "~theme"
import { Images } from "~utils/images"

type Type = 'consult' | 'case'
type RequestTypeTabsProps = {
  active: Type,
  setActive: (active: Type) => void
}

export const RequestTypeTabs = ({ active, setActive }: RequestTypeTabsProps) => {

  return <View style={globalStyles.row}>
    <ChooseButton
      title="الاستشارات"
      img={Images.consult}
      style={{ padding: widthPixel(28) }}
      onPress={() => setActive('consult')}
      active={active === 'consult'}
    />
    <Spacer w={16} />
    <ChooseButton
      title="الترافع في قضية"
      img={Images.case}
      style={{ padding: widthPixel(28) }}
      onPress={() => setActive('case')}
      active={active === 'case'}
    />
  </View>
}