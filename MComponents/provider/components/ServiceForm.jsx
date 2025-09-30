import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import { colors, commonStyles, styles } from "../../../styles/ProviderScreenStyles";

const ServiceForm = ({ 
  service, 
  companyName, 
  approximatePrice, 
  location, 
  details,
  loading,
  onServiceChange,
  onCompanyNameChange,
  onApproximatePriceChange,
  onLocationChange,
  onDetailsChange,
  onSubmit 
}) => {
  const isFormValid = service && companyName && approximatePrice && location && details;

  return (
    <View style={commonStyles.section}>
      <View style={commonStyles.sectionHeader}>
        <MaterialIcons name="add-business" size={24} color={colors.primary} />
        <ThemedText style={commonStyles.sectionTitle}>Create New Service</ThemedText>
      </View>

      <TextInput
        placeholder="Service Name"
        placeholderTextColor={colors.textLight}
        value={service}
        onChangeText={onServiceChange}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Company Name"
        placeholderTextColor={colors.textLight}
        value={companyName}
        onChangeText={onCompanyNameChange}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Approximate Price ($)"
        placeholderTextColor={colors.textLight}
        value={approximatePrice}
        onChangeText={onApproximatePriceChange}
        keyboardType="numeric"
        style={styles.input}
      />
      
      <TextInput
        placeholder="Location"
        placeholderTextColor={colors.textLight}
        value={location}
        onChangeText={onLocationChange}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Service Description"
        placeholderTextColor={colors.textLight}
        value={details}
        onChangeText={onDetailsChange}
        style={[styles.input, styles.textArea]}
        multiline
        numberOfLines={3}
      />

      <TouchableOpacity 
        style={[styles.button, (!isFormValid || loading) && styles.buttonDisabled]} 
        onPress={onSubmit}
        disabled={!isFormValid || loading}
      >
        <MaterialIcons name="check-circle" size={20} color="#fff" />
        <Text style={styles.buttonText}>
          {loading ? "Creating..." : "Create Service"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceForm;