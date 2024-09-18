import { useEffect } from "react"
import { I18nManager } from "react-native"
import RNRestart from "react-native-restart"

export const useRTL = () => {
  useEffect(() => {
    if(!I18nManager.isRTL) {
      I18nManager.allowRTL(true)
      I18nManager.forceRTL(true)
      RNRestart.restart();
    }
  }, [])
}