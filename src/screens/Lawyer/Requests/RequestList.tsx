import { useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { Loader, Spacer, Tabs } from "~components"
import { heightPixel } from "~theme"
import { RequestTab } from "./RequestTab"
import { requestService } from "~services/request"
import { Request } from "~types"

const tabs = ['الكل', 'الجديدة', 'المقبولة', 'المرفوضة']

export const RequestList = () => {
  const [activeTag, setActiveTag] = useState(0)
  const [data, setData] = useState<Request[]>([])
  const [loading, setLoading] = useState(false)

  const getRequests = async () => {
    try {
      setData([])
      setLoading(true)
      const res = await requestService.getRequests(activeTag)
      setData(res.data.data)
    } catch (e) {
      // TODO: Handle error
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getRequests()
  }, [activeTag])

  return (
    <View style={styles.container}>
      <Tabs data={tabs} active={activeTag} setActive={setActiveTag} />
      <Spacer h={12} />
      {loading && <Loader />}
      <View>
        {data.map((request) => (
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