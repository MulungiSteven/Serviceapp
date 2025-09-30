import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import { colors, commonStyles, styles } from "../../../styles/ClientScreenStyles";

const OrderForm = ({ 
  provider, 
  orderDetails, 
  quantity, 
  useCurrentLocation, 
  customAddress,
  onOrderDetailsChange,
  onQuantityChange,
  onUseCurrentLocationChange,
  onCustomAddressChange,
  onCalculateTotal,
  onPlaceOrder,
  onBack 
}) => {
  return (
    <View style={commonStyles.section}>
      <View style={commonStyles.sectionHeader}>
        <MaterialIcons name="shopping-cart" size={24} color={colors.primary} />
        <ThemedText style={commonStyles.sectionTitle}>Place Order</ThemedText>
      </View>

      <View style={styles.orderCard}>
        <Text style={styles.orderTitle}>Order for {provider.service}</Text>
        <Text style={styles.orderCompany}>by {provider.companyName}</Text>
        
        <Text style={styles.inputLabel}>Order Details</Text>
        <TextInput
          style={styles.textArea}
          multiline
          placeholder="Describe your requirements..."
          placeholderTextColor={colors.textLight}
          value={orderDetails}
          onChangeText={onOrderDetailsChange}
        />

        <Text style={styles.inputLabel}>Quantity</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="1"
          placeholderTextColor={colors.textLight}
          value={quantity}
          onChangeText={onQuantityChange}
        />

        <Text style={styles.inputLabel}>Delivery Location</Text>
        
        <View style={styles.locationOptions}>
          <TouchableOpacity 
            style={styles.locationOption}
            onPress={() => onUseCurrentLocationChange(true)}
          >
            <View style={styles.radioContainer}>
              <View style={[styles.radio, useCurrentLocation && styles.radioSelected]}>
                {useCurrentLocation && <View style={styles.radioInner} />}
              </View>
              <MaterialIcons name="my-location" size={20} color={colors.primary} />
              <Text style={styles.locationOptionText}>Use Current Location</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.locationOption}
            onPress={() => onUseCurrentLocationChange(false)}
          >
            <View style={styles.radioContainer}>
              <View style={[styles.radio, !useCurrentLocation && styles.radioSelected]}>
                {!useCurrentLocation && <View style={styles.radioInner} />}
              </View>
              <MaterialIcons name="location-on" size={20} color={colors.primary} />
              <Text style={styles.locationOptionText}>Enter Custom Address</Text>
            </View>
          </TouchableOpacity>
        </View>

        {!useCurrentLocation && (
          <TextInput
            style={styles.textArea}
            multiline
            placeholder="Enter your full address..."
            placeholderTextColor={colors.textLight}
            value={customAddress}
            onChangeText={onCustomAddressChange}
          />
        )}

        <Text style={styles.totalText}>Total: ${onCalculateTotal()}</Text>
      </View>

      <View style={styles.orderActions}>
        <TouchableOpacity style={styles.confirmButton} onPress={onPlaceOrder}>
          <Text style={styles.confirmButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onBack}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default OrderForm;