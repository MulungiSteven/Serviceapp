import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import Spacer from "../../../shared/components/Spacer";
import { colors, commonStyles, styles } from "../../../styles/ClientScreenStyles";

const ProviderDetail = ({ provider, onBack, onOrder, onShowMap }) => {
  const requestLocationAndShowMap = async () => {
    // This would be connected to useLocation hook in the main component
    onShowMap();
  };

  return (
    <View style={commonStyles.section}>
      <View style={commonStyles.sectionHeader}>
        <MaterialIcons name="info" size={24} color={colors.primary} />
        <ThemedText style={commonStyles.sectionTitle}>Service Details</ThemedText>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.detailCompany}>{provider.companyName}</Text>
        <Text style={styles.detailTitle}>{provider.service}</Text>
        <Text style={styles.detailDescription}>{provider.details}</Text>
        {provider.approximatePrice && (
          <Text style={styles.detailPrice}>Approximate Price: ${provider.approximatePrice}</Text>
        )}
        {provider.location && (
          <Text style={styles.detailLocation}>
            <MaterialIcons name="location-on" size={14} color={colors.textLight} />
            {provider.location}
          </Text>
        )}
      </View>

      <View style={styles.actionGrid}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={requestLocationAndShowMap}
        >
          <Ionicons name="navigate" size={24} color="#23448bff" />
          <Text style={[styles.actionText, { color: '#0e0101ff' }]}>Get Directions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={onOrder}>
          <MaterialIcons name="shopping-cart" size={24} color={colors.primary} />
          <Text style={styles.actionText}>Order Now</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <MaterialIcons name="arrow-back" size={20} color="#fff" />
        <Text style={styles.backButtonText}>Back to Providers</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ProviderDetail;