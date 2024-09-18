import { Provider } from 'react-redux'
import { NavigationContainer } from "@react-navigation/native"
import { PersistGate } from 'redux-persist/integration/react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppWrapper } from "~components"
import { persistor, store } from '~store'
import { navTheme } from "~theme"
import Navigation from "~navigation"

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer theme={navTheme}>
            <AppWrapper>
              <Navigation />
            </AppWrapper>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  )
}

export default Root