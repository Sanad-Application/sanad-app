import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { SectionHeader, Spacer, Tabs } from "~components"
import { lawyerService } from "~services/lawyers"
import { heightPixel } from "~theme"
import { tags, lawyers } from "~utils/fakeData"
import { LawyerTab } from "./LawyerTab"
import { Lawyer } from "~types"

export const LawyersList = () => {
  const [activeTag, setActiveTag] = useState(0)
  const [data, setData] = useState<Lawyer[]>([])
  const [loading, setLoading] = useState(false)

  // TODO: Implement this function
  const goToLawersScreen = () => null

  const getLawyers = async () => {
    try {
      setLoading(true)
      const res = await lawyerService.getLawyers()
      setData(res.data.data)
    } catch (e) {
      // TODO: Handle error
      console.log(e)
    } finally {
      setLoading(false)
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
        {data.map((lawyer) => <LawyerTab key={lawyer.user.id} data={lawyer} />)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: heightPixel(24),
  },
})