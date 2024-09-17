import { NavigationContainer } from "@react-navigation/native"
import { navTheme } from "~theme/navTheme"
import { P, AppWrapper } from "~components"

const Root = () => {
  return <NavigationContainer theme={navTheme}>
    <AppWrapper>
      <P>Welcome to Sanad App!</P>
    </AppWrapper>
  </NavigationContainer>
}

export default Root;