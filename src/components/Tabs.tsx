import { Pressable, ScrollView, StyleSheet, View } from "react-native"
import { P } from "./P"
import { colors, globalStyles, widthPixel } from "~theme"

type TabProps = {
  label: string
  active: boolean
  onClick?: () => void
}

type TabsProps = {
  data: any[]
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
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>
        {data.map((tab, i) => (
          <Tab
            key={tab.id || tab}
            label={tab.label || tab}
            active={i === active}
            onClick={() => handleClick(i)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: widthPixel(8),
    alignItems: 'flex-start',
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