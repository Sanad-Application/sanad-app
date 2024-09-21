import { useAppSelector } from "~store/hooks"
import AuthStack from "./stacks/AuthStack"
import { useGetUser } from "~hooks/useGetUser"
import LawyerNavigator from "./LawyerNavigator"
import ClientNavigator from "./ClientNavigator"

const Navigation = () => {
  const { token, isLawyer } = useAppSelector(s => s.auth)

  useGetUser()

  return token ? (isLawyer ? <LawyerNavigator /> : <ClientNavigator />) : <AuthStack />
}

export default Navigation