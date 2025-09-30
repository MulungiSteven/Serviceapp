import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import { colors, commonStyles, styles } from "../../../styles/ProviderScreenStyles";

const AvailableOrders = ({ orders, onSelectOrder }) => {
  const renderOrderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.orderCard}
      onPress={() => onSelectOrder(item)}
    >
      <View style={styles.orderHeader}>
        <View style={styles.orderIcon}>
          <MaterialIcons name="assignment" size={20} color={colors.primary} />
        </View>
        <View style={styles.orderInfo}>
          <Text style={styles.orderTitle}>{item.serviceType}</Text>
          <Text style={styles.orderDetails} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={styles.orderLocation}>
            <MaterialIcons name="location-on" size={14} color={colors.textLight} />
            {item.location}
          </Text>
          <Text style={styles.orderBudget}>
            <MaterialIcons name="attach-money" size={14} color={colors.primary} />
            Budget: ${item.budget}
          </Text>
          <Text style={styles.orderClient}>
            <MaterialIcons name="person" size={14} color={colors.textLight} />
            Client: {item.clientName}
          </Text>
          <Text style={styles.orderDate}>
            <MaterialIcons name="event" size={14} color={colors.textLight} />
            Posted: {new Date(item.$createdAt).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={commonStyles.section}>
      <View style={commonStyles.sectionHeader}>
        <MaterialIcons name="list-alt" size={24} color={colors.primary} />
        <ThemedText style={commonStyles.sectionTitle}>Available Orders</ThemedText>
      </View>

      {orders.length === 0 ? (
        <View style={styles.emptyState}>
          <MaterialIcons name="assignment" size={48} color={colors.textLight} />
          <Text style={styles.emptyStateText}>No available orders</Text>
          <Text style={styles.emptyStateSubtext}>Check back later for new orders</Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.$id}
          scrollEnabled={false}
          renderItem={renderOrderItem}
        />
      )}
    </View>
  );
};


export default AvailableOrders;