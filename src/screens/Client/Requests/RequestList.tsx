import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { SectionHeader, Spacer, Tabs } from "~components"
import { lawyerService } from "~services/lawyers"
import { heightPixel } from "~theme"
import { requests } from "~utils/fakeData"
import { RequestTab } from "./RequestTab"

const tabs = ['الحالية', 'القديمة', 'تحت المراجعة']

export const RequestList = () => {
  const [activeTag, setActiveTag] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  // TODO: Implement this function
  const goToLawersScreen = () => null

  const getRequests = async () => {
    try {
      setLoading(true)
      const res = await lawyerService.getLawyers()
      console.log(res.data)
    } catch (e) {
      // TODO: Handle error
      console.log(e)
    }
  }
  return (
    <View style={styles.container}>
      <SectionHeader title="المحاميين" onViewAll={goToLawersScreen} />
      <Tabs data={tabs} active={activeTag} setActive={setActiveTag} />
      <Spacer h={12} />
      <View>
        {requests.map((request) => (
          <RequestTab key={request.id} data={request} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: heightPixel(24),
  },
})