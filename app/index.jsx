import { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import ThemedView from "../shared/components/ThemedView";
import ThemedText from "../shared/components/ThemedText";
import Spacer from "../shared/components/Spacer";
import ThemedLoader from "../shared/components/ThemedLoader";
import { useUser } from "../shared/hooks/useUser"; // 👈 bring in auth state

// Design system constants
const colors = {
  primary: "#667eea",
  primaryDark: "#764ba2",
  secondary: "#10b981",
  accent: "#ff6b6b",
  background: "#f8fafc",
  card: "#ffffff",
  text: "#374151",
  textLight: "#6b7280",
  white: "#ffffff",
};

const gradients = {
  primary: ["#667eea", "#764ba2"],
};

const Home = () => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  // 👇 If logged in, redirect directly to profile
  useEffect(() => {
    if (authChecked && user) {
      router.replace("/ProfileScreen");
    }
  }, [authChecked, user]);

  // While checking auth, show loader
  if (!authChecked) {
    return <ThemedLoader />;
  }

  // If not logged in → show Login + Register
  if (!user) {
    return (
      <LinearGradient colors={gradients.primary} style={styles.gradientBackground}>
        <ThemedView style={styles.container} safe={true}>
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <MaterialIcons name="auto-awesome" size={48} color={colors.white} />
            </View>
            <ThemedText style={styles.appTitle}>Quality Services</ThemedText>
            <ThemedText style={styles.tagline}>Connect • Serve • Excel</ThemedText>
          </View>

          <Spacer size={60} />

          {/* Options only when logged out */}
          <View style={styles.optionsContainer}>
            <Link href="/login" asChild>
              <TouchableOpacity style={[styles.optionButton, styles.loginButton]}>
                <ThemedText style={styles.optionText}>Login</ThemedText>
              </TouchableOpacity>
            </Link>

            <Spacer size={20} />

            <Link href="/register" asChild>
              <TouchableOpacity style={[styles.optionButton, styles.registerButton]}>
                <ThemedText style={styles.optionText}>Register</ThemedText>
              </TouchableOpacity>
            </Link>
          </View>

          <Spacer size={40} />

          {/* Footer */}
          <View style={styles.footer}>
            <ThemedText style={styles.footerText}>
              Your gateway to exceptional services
            </ThemedText>
          </View>
        </ThemedView>
      </LinearGradient>
    );
  }

  // If logged in, the effect already redirected to Profile
  return <ThemedLoader />;
};

export default Home;

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tagline: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    fontWeight: "500",
  },
  optionsContainer: {
    width: "100%",
    alignItems: "center",
  },
  optionButton: {
    width: "80%",
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  loginButton: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  registerButton: {
    backgroundColor: "#10b981",
    borderWidth: 2,
    borderColor: "#10b981",
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    fontWeight: "500",
  },
});
