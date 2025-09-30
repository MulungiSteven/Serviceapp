import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import { colors, styles } from "../../../styles/ProfileStyle";

const ServiceHistory = ({ 
  serviceHistory, 
  onReview, 
  onApproval,
  getApprovalStatusText,
  getApprovalStatusColor 
}) => {
  const renderServiceItem = ({ item }) => (
    <View style={styles.historyItem}>
      <View style={styles.historyContent}>
        <Text style={styles.historyService}>{item.serviceName}</Text>
        <Text style={styles.historyProvider}>by {item.provider}</Text>
        <View style={styles.historyDetails}>
          <Text style={styles.historyDate}>{item.date}</Text>
          <Text style={styles.historyPrice}>{item.price}</Text>
        </View>
        <Text style={[styles.approvalStatus, { color: getApprovalStatusColor(item.approved) }]}>
          {getApprovalStatusText(item.approved)}
        </Text>
      </View>
      
      <View style={styles.historyActions}>
        {item.approved === null && (
          <TouchableOpacity 
            style={styles.approvalButton}
            onPress={() => onApproval(item)}
          >
            <MaterialIcons name="check-circle" size={16} color="#667eea" />
            <Text style={styles.approvalText}>Approve</Text>
          </TouchableOpacity>
        )}
        
        {item.approved === true && (
          <TouchableOpacity 
            style={[
              styles.reviewButton,
              item.rating > 0 && styles.reviewedButton
            ]}
            onPress={() => onReview(item)}
            disabled={item.rating > 0}
          >
            {item.rating > 0 ? (
              <View style={styles.ratedContainer}>
                <Ionicons name="star" size={16} color="gold" />
                <Text style={styles.ratedText}>{item.rating}/5</Text>
              </View>
            ) : (
              <>
                <Ionicons name="star-outline" size={16} color="#667eea" />
                <Text style={styles.reviewText}>Review</Text>
              </>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <MaterialIcons name="history" size={24} color="#667eea" />
        <ThemedText style={styles.sectionTitle}>Your Bookings</ThemedText>
      </View>

      {serviceHistory.length === 0 ? (
        <View style={styles.emptyState}>
          <MaterialIcons name="event-busy" size={48} color="#ccc" />
          <Text style={styles.emptyStateText}>No service history yet</Text>
          <Text style={styles.emptyStateSubtext}>Book services to see them here</Text>
        </View>
      ) : (
        <FlatList
          data={serviceHistory}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={renderServiceItem}
        />
      )}
    </View>
  );
};


export default ServiceHistory;