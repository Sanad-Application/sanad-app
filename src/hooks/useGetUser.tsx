import { useEffect } from "react"
import { authService } from "~services/auth"
import { useAppDispatch, useAppSelector } from "~store/hooks"
import { setUser } from "~store/slices/authSlice"

export const useGetUser = () => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector(s => s.auth)

  const getUser = async () => {
    try {
      const res = await authService.me()
      dispatch(setUser(res.data))
    } catch (e) {
    } finally {
      // Hide splash
    }
  }

  useEffect(() => {
    if (!token) {
      // Hide splash
      return
    }

    getUser()
  }, [token])
}
