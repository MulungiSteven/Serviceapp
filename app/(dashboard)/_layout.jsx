import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons"
import UserOnly from "../../shared/components/(auth)/UseOnly"

export default function DashboardLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <UserOnly>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { 
            backgroundColor: theme.navBackground, 
            paddingTop: 10, 
            height: 90,
            borderTopWidth: 1,
            borderTopColor: theme.borderColor || 'rgba(0,0,0,0.1)'
          },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
        }}
      >
        <Tabs.Screen 
          name="ProfileScreen"
          options={{ 
            title: "Profile", 
            tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                size={26} 
                name={focused ? 'account-circle' : 'account-circle'} 
                color={focused ? theme.iconColorFocused : theme.iconColor} 
              />
            ) 
          }}
        />

        <Tabs.Screen 
          name="ClientScreen"
          options={{ 
            title: "Services", 
            tabBarIcon: ({ focused }) => (
              <FontAwesome5 
                size={22} 
                name={focused ? 'search' : 'search'} 
                color={focused ? theme.iconColorFocused : theme.iconColor} 
              />
            ) 
          }} 
        />

        <Tabs.Screen 
          name="ProviderScreen"
          options={{ 
            title: "My Business", 
            tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                size={26} 
                name={focused ? 'business-center' : 'business-center'} 
                color={focused ? theme.iconColorFocused : theme.iconColor} 
              />
            ) 
          }} 
        />
      </Tabs>
    </UserOnly>
  )
}