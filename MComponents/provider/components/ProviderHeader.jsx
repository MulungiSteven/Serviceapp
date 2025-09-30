import { View, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import ThemedText from "../../../shared/components/ThemedText";
import { colors, gradients, styles } from "../../../styles/ProviderScreenStyles";

const ProviderHeader = ({ title, subtitle }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient 
        colors={gradients.primary} 
        style={styles.headerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerContent}>
          <ThemedText style={styles.welcomeText}>
            {title}
          </ThemedText>
          <ThemedText style={styles.subWelcomeText}>
            {subtitle}
          </ThemedText>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProviderHeader;