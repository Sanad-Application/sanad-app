import { useAppSelector } from "~store/hooks"
import BottomTabs from "./BottomTabs"
import AuthStack from "./stacks/AuthStack"
import { useGetUser } from "~hooks/useGetUser"

const Navigation = () => {
  const { token } = useAppSelector(s => s.auth)
  useGetUser()
  return token ? <BottomTabs /> : <AuthStack />
}

export default Navigation