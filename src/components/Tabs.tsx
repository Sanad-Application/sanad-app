import { Pressable, ScrollView, StyleSheet } from "react-native"
import { P } from "./P"
import { colors, widthPixel } from "~theme"
import { Tag } from "~types/Category"

type TabProps = {
  label: string
  active: boolean
  onClick?: () => void
}

type TabsProps = {
  data: Tag[]
  active: number
  setActive: (index: number) => void
}

const Tab = ({ label, active, onClick }: TabProps) => {
  return (
    <Pressable style={[styles.tab, active && styles.activeTab]} onPress={onClick}>
      <P color={active ? colors.white : colors.textLight}>{label}</P>
    </Pressable>
  )
}

export const Tabs = ({ data, active, setActive }: TabsProps) => {
  const handleClick = (i: number) => setActive(i)

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {data.map((tab, i) => (
        <Tab
          key={tab.id}
          label={tab.label}
          active={i === active}
          onClick={() => handleClick(i)}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: widthPixel(8),
  },
  tab: {
    borderWidth: widthPixel(1),
    borderColor: colors.textLight,
    paddingVertical: widthPixel(4),
    paddingHorizontal: widthPixel(16),
    borderRadius: widthPixel(8),
    marginHorizontal: widthPixel(4),
  },
  activeTab: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
})