import { NavigationContainer } from "@react-navigation/native"
import { AppWrapper } from "~components"
import {Provider} from 'react-redux';
import {persistor, store} from '~store';
import {PersistGate} from 'redux-persist/integration/react';
import { navTheme } from "~theme"
import Navigation from "~navigation"

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={navTheme}>
          <AppWrapper>
            <Navigation />
          </AppWrapper>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default Root;