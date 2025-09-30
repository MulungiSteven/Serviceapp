import { View, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import ThemedText from "../../../shared/components/ThemedText";
import { colors, gradients, styles } from "../../../styles/ClientScreenStyles";

const ClientHeader = ({ view, selectedProvider }) => {
  const getHeaderTitle = () => {
    switch (view) {
      case "list": return "Find Services";
      case "details": return selectedProvider?.service || "Service Details";
      case "order": return "Place Order";
      case "payment": return "Payment";
      case "map": return "Directions";
      default: return "Find Services";
    }
  };

  const getHeaderSubtitle = () => {
    switch (view) {
      case "list": return "Browse available services";
      case "details": return "Service information & pricing";
      case "order": return "Complete your booking";
      case "payment": return "Secure checkout";
      case "map": return "Get directions to provider";
      default: return "Browse available services";
    }
  };

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
            {getHeaderTitle()}
          </ThemedText>
          <ThemedText style={styles.subWelcomeText}>
            {getHeaderSubtitle()}
          </ThemedText>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ClientHeader;