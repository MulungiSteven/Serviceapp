import { useEffect } from "react"
import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import ThemedLoader from "../ThemedLoader"

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (authChecked && user) {
      router.replace("ProfileScreen") // ✅ correct route
    }
  }, [authChecked, user])

  if (!authChecked || user) {
    return <ThemedLoader />
  }

  return children
}

export default GuestOnly
