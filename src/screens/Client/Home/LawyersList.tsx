import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { SectionHeader, Spacer, Tabs } from "~components"
import { lawyerService } from "~services/lawyers"
import { heightPixel } from "~theme"
import { tags, lawyers } from "~utils/fakeData"
import { LawyerTab } from "./LawyerTab"

export const LawyersList = () => {
  const [activeTag, setActiveTag] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  // TODO: Implement this function
  const goToLawersScreen = () => null

  const getLawyers = async () => {
    try {
      setLoading(true)
      const res = await lawyerService.getLawyers()
      console.log(res.data)
    } catch (e) {
      // TODO: Handle error
      console.log(e)
    }
  }

  useEffect(() => {
    getLawyers()
  }, [])

  return (
    <View style={styles.container}>
      <SectionHeader title="المحاميين" onViewAll={goToLawersScreen} />
      <Tabs data={tags} active={activeTag} setActive={setActiveTag} />
      <Spacer h={12} />
      <View>
        {lawyers.map((lawyer) => <LawyerTab key={lawyer.user.id} data={lawyer} />)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: heightPixel(24),
  },
})