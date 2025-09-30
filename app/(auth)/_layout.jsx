import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import { useUser } from "../../shared/hooks/useUser"
import GuestOnly from "../../shared/components/(auth)/GuestOnly"

export default function AuthLayout() {

  
  return (
    <GuestOnly>
      <StatusBar style="auto" />
      <Stack 
        screenOptions={{ headerShown: false, animation: "none" }} 
      />
    </GuestOnly>
  )
}