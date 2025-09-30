import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import Spacer from "../../../shared/components/Spacer";
import { colors, commonStyles, spacing, styles } from "../../../styles/ProviderScreenStyles";
import ThemedView from "../../../shared/components/ThemedView";
import ProviderHeader from "./ProviderHeader";


const OrderDetail = ({ order, onCompleteJob, onBack }) => {
  return (
    <ThemedView style={commonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={commonStyles.scrollContent}>
        <ProviderHeader 
          title="Order Details" 
          subtitle={order.serviceType} 
        />

        <Spacer size={spacing.lg} />

        <View style={commonStyles.section}>
          <View style={commonStyles.sectionHeader}>
            <MaterialIcons name="info" size={24} color={colors.primary} />
            <Text style={commonStyles.sectionTitle}>Order Information</Text>
          </View>
          
          <View style={styles.detailCard}>
            <Text style={styles.detailTitle}>{order.serviceType}</Text>
            <Text style={styles.detailDescription}>{order.description}</Text>
            
            <View style={styles.detailRow}>
              <MaterialIcons name="person" size={16} color={colors.textLight} />
              <Text style={styles.detailInfo}>Client: {order.clientName}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <MaterialIcons name="location-on" size={16} color={colors.textLight} />
              <Text style={styles.detailInfo}>Location: {order.location}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <MaterialIcons name="attach-money" size={16} color={colors.textLight} />
              <Text style={styles.detailInfo}>Budget: ${order.budget}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <MaterialIcons name="event" size={16} color={colors.textLight} />
              <Text style={styles.detailInfo}>Posted: {new Date(order.$createdAt).toLocaleDateString()}</Text>
            </View>
          </View>
        </View>

        <Spacer size={spacing.lg} />

        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.completeButton]} 
            onPress={() => onCompleteJob(order.$id)}
          >
            <MaterialIcons name="check-circle" size={20} color="#fff" />
            <Text style={styles.buttonText}>Mark as Completed</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]}
            onPress={onBack}
          >
            <MaterialIcons name="arrow-back" size={20} color="#fff" />
            <Text style={styles.buttonText}>Back to Orders</Text>
          </TouchableOpacity>
        </View>

        <Spacer size={spacing.xl} />
      </ScrollView>
    </ThemedView>
  );
};

export default OrderDetail;