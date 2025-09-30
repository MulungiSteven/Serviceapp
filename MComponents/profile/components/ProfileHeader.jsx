import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ThemedText from "../../../shared/components/ThemedText";
import { colors, styles } from "../../../styles/ProfileStyle";

const ProfileHeader = ({ user, view, onBack }) => {

  const gradientColors = [colors.primary, "#5a67d8"]; 

  if (view === "history") {
    return (
      <LinearGradient colors={gradientColors} style={styles.headerGradient}>
        <View style={styles.headerContent}>

          <ThemedText style={styles.welcomeText}>Service History</ThemedText>
          <ThemedText style={styles.subWelcomeText}>
            Your past service bookings and approvals
          </ThemedText>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={gradientColors} style={styles.headerGradient}>
      <View style={styles.headerContent}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.email?.charAt(0).toUpperCase() || "U"}
          </Text>
        </View>

        <ThemedText style={styles.welcomeText}>
          Welcome back, {user.email?.split("@")[0]}
        </ThemedText>
        <ThemedText style={styles.subWelcomeText}>
          Ready to discover amazing services? 🎉
        </ThemedText>
      </View>
    </LinearGradient>
  );
};

export default ProfileHeader;
