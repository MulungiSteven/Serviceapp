import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import { colors, commonStyles, styles } from "../../../styles/ClientScreenStyles";

const PaymentScreen = ({ 
  orderSummary, 
  paymentMethod, 
  paymentProcessing, 
  onPaymentMethodChange, 
  onProcessPayment, 
  onBack 
}) => {
  const handlePayment = async () => {
    if (!paymentMethod) {
      Alert.alert("Error", "Please select a payment method");
      return;
    }

    onProcessPayment();
  };

  return (
    <View style={commonStyles.section}>
      <View style={commonStyles.sectionHeader}>
        <MaterialIcons name="payment" size={24} color={colors.primary} />
        <ThemedText style={commonStyles.sectionTitle}>Make Payment</ThemedText>
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>Order Summary</Text>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Company:</Text>
          <Text style={styles.summaryValue}>{orderSummary.company}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Service:</Text>
          <Text style={styles.summaryValue}>{orderSummary.service}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Quantity:</Text>
          <Text style={styles.summaryValue}>{orderSummary.quantity}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Delivery Address:</Text>
          <Text style={styles.summaryValue}>{orderSummary.address}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total:</Text>
          <Text style={styles.summaryValue}>${orderSummary.total}</Text>
        </View>
      </View>

      <Text style={styles.inputLabel}>Select Payment Method</Text>
      
      <View style={styles.paymentMethodContainer}>
        <TouchableOpacity 
          style={[
            styles.paymentMethod, 
            paymentMethod === 'Mobile Money' && styles.paymentMethodSelected
          ]}
          onPress={() => onPaymentMethodChange('Mobile Money')}
        >
          <MaterialIcons name="smartphone" size={24} color={paymentMethod === 'Mobile Money' ? '#fff' : colors.primary} />
          <Text style={[
            styles.paymentMethodText,
            paymentMethod === 'Mobile Money' && styles.paymentMethodTextSelected
          ]}>
            Mobile Money
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.paymentMethod, 
            paymentMethod === 'Visa' && styles.paymentMethodSelected
          ]}
          onPress={() => onPaymentMethodChange('Visa')}
        >
          <FontAwesome5 name="cc-visa" size={24} color={paymentMethod === 'Visa' ? '#fff' : colors.primary} />
          <Text style={[
            styles.paymentMethodText,
            paymentMethod === 'Visa' && styles.paymentMethodTextSelected
          ]}>
            Visa
          </Text>
        </TouchableOpacity>
      </View>

      {paymentProcessing ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} color={colors.primary} />
      ) : (
        <>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.secondary, marginTop: 20 }]}
            onPress={handlePayment}
            disabled={!paymentMethod}
          >
            <Text style={styles.buttonText}>Pay ${orderSummary.total}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.textLight, marginTop: 10 }]}
            onPress={onBack}
          >
            <Text style={styles.buttonText}>← Back to Order</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};


export default PaymentScreen;