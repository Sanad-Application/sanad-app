import { useEffect } from "react"
import { authService } from "~services/auth"
import { useAppDispatch, useAppSelector } from "~store/hooks"
import { setUser } from "~store/slices/authSlice"
import BootSplash from "react-native-bootsplash"

export const useGetUser = () => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector(s => s.auth)

  const getUser = async () => {
    try {
      const res = await authService.me()
      dispatch(setUser(res.data.data))
    } catch (e) {
    } finally {
      BootSplash.hide({ fade: true })
    }
  }

  useEffect(() => {
    if (!token) {
      BootSplash.hide({ fade: true })
      return
    }

    getUser()
  }, [token])
}
