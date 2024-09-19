import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { SectionHeader, Tabs } from "~components"
import { heightPixel } from "~theme"

const tabs = [
  {
    label: 'All',
    key: 'all',
  },
  {
    label: 'Criminal',
    key: 'criminal',
  },
  {
    label: 'Civil',
    key: 'civil',
  },
  {
    label: 'Family',
    key: 'family',
  },
  {
    label: 'Corporate',
    key: 'corporate',
  },
]

export const LawyersList = () => {
  const [activeTab, setActiveTab] = useState(0)

  // TODO: Implement this function
  const goToLawersScreen = () => null

  return (
    <View style={styles.container}>
      <SectionHeader title="المحاميين" onViewAll={goToLawersScreen} />
      <Tabs data={tabs} active={activeTab} setActive={setActiveTab} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: heightPixel(24),
  },
})