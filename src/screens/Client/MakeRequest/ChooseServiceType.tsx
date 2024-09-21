import { View } from 'react-native'
import { SectionHeader } from '~components'
import { TabButton } from '~components/TabButton'

type ChooseServiceTypeProps = {
  setServiceType: (service: string) => void
}

export const ChooseServiceType = ({ setServiceType }: ChooseServiceTypeProps) => {
  return (
    <View>
      <SectionHeader title="اختر نوع الخدمة" />
      <TabButton
        title="استشارة"
        subtitle="استشارة قانونية"
        onPress={() => setServiceType('consultation')}
      />
      <TabButton
        title="قضية"
        subtitle="تقديم قضية قانونية"
        onPress={() => setServiceType('case')}
      />
    </View>
  )
}