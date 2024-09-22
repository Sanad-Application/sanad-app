import { View } from 'react-native'
import { SectionHeader } from '~components'
import { TabButton } from '~components/TabButton'
import { Tag } from '~types'

type ChooseSpecProps = {
  setSpec: (specId: number) => void
  tags: Tag[]
}

export const ChooseSpec = ({ setSpec, tags }: ChooseSpecProps) => {

  // TODO: get the data from the server

  return (
    <View>
      <SectionHeader title="اختر التخصص" />
      {tags.map((item, index) => (
        <TabButton key={index} title={item.name} subtitle={'القضايا المجتمعية و قضايا الرأي العام'} onPress={() => setSpec(item.id)} />
      ))}
    </View>
  )
}