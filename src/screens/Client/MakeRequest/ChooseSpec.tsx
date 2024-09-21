import { View } from 'react-native'
import { SectionHeader } from '~components'
import { TabButton } from '~components/TabButton'

type ChooseSpecProps = {
  setSpec: (service: string) => void
}

const specData = [
  {
    title: 'أحوال شخصية',
    subtitle: 'يختص بقضايا الزواج والخلع والنفقة والحضانه',
    value: 'personalStatus',
  },
  {
    title: 'مشاكل الورث',
    subtitle: 'يختص بقضايا الورث وتوزيع الميراث',
    value: 'inheritance',
  },
  {
    title: 'الجنايات',
    subtitle: 'يختص بقضايا الجنايات والجنح',
    value: 'crimes',
  },
  {
    title: 'الأحوال الإدارية',
    subtitle: 'يختص بقضايا الأحوال الإدارية',
    value: 'administrative',
  },
]

export const ChooseSpec = ({ setSpec }: ChooseSpecProps) => {

  // TODO: get the data from the server

  return (
    <View>
      <SectionHeader title="اختر التخصص" />
      {specData.map((item, index) => (
        <TabButton key={index} title={item.title} subtitle={item.subtitle} onPress={() => setSpec(item.value)} />
      ))}
    </View>
  )
}