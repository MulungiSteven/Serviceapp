import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { useUser } from '../../shared/hooks/useUser'
import { Colors } from '../../constants/Colors'

import ThemedLoader from '../../shared/components/ThemedLoader'
import ThemedText from '../../shared/components/ThemedText'
import Spacer from '../../shared/components/Spacer'
import ThemedButton from '../../shared/components/ThemedButton'
import ThemedTextInput from '../../shared/components/ThemedTextInput'
import ThemedView from '../../shared/components/ThemedView'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error,setError] = useState(null)
  const { login } = useUser()

const handleSubmit = async () => {
    setError(null)

    try{
      await login(email, password)
    }catch (error) {
      setError(error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Login to Your Account
        </ThemedText>

        {/* <TextInput placeholder="Email" /> */}

        <Spacer />
        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2' }}>Login</Text>
        </ThemedButton>

        <Spacer />
        {error &&<Text style={styles.error}>{error}</Text>}
          

        <Spacer height={100} />
        <Link href="/register" replace>
          <ThemedText style={{ textAlign: "center" }}>
            Register instead
          </ThemedText>
        </Link>


      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
  error: {
    color: Colors.waring,
    padding: 10,
    backgroundColor: '#f5c1c8',
    boarderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  } 
})