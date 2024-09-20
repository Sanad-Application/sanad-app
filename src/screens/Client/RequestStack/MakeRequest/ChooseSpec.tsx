import { View } from 'react-native'
import { SectionHeader } from '~components'
import { TabButton } from '~components/TabButton'

type ChooseSpecProps = {
  setSpec: (service: string) => void
}

export const ChooseSpec = ({ setSpec }: ChooseSpecProps) => {
  return (
    <View>
      <SectionHeader title="اختر التخصص" />
      <TabButton
        title="استشارة"
        subtitle="استشارة قانونية"
        onPress={() => setSpec('consultation')}
      />
      <TabButton
        title="قضية"
        subtitle="تقديم قضية قانونية"
        onPress={() => setSpec('case')}
      />
    </View>
  )
}