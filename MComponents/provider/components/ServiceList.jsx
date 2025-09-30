import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import { colors, commonStyles, styles } from "../../../styles/ProviderScreenStyles";

const ServiceList = ({ services, onSelectService }) => {
  const renderServiceItem = ({ item }) => (
    <TouchableOpacity
      style={styles.serviceCard}
      onPress={() => onSelectService(item)}
    >
      <View style={styles.serviceHeader}>
        <View style={styles.serviceIcon}>
          <FontAwesome5 name="user-tie" size={20} color={colors.primary} />
        </View>
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceTitle}>{item.service}</Text>
          <Text style={styles.serviceDetails} numberOfLines={2}>
            {item.details}
          </Text>
          <Text style={styles.serviceCompany}>{item.companyName}</Text>
          <Text style={styles.servicePrice}>Approx. ${item.approximatePrice}</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color={colors.textLight} />
      </View>
      <View style={styles.serviceStats}>
        <Text style={styles.serviceStat}>23 orders • 4.2⭐</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={commonStyles.section}>
      <View style={commonStyles.sectionHeader}>
        <MaterialIcons name="list" size={24} color={colors.primary} />
        <ThemedText style={commonStyles.sectionTitle}>My Services</ThemedText>
      </View>

      {services.length === 0 ? (
        <View style={styles.emptyState}>
          <MaterialIcons name="miscellaneous-services" size={48} color={colors.textLight} />
          <Text style={styles.emptyStateText}>No services yet</Text>
          <Text style={styles.emptyStateSubtext}>Create your first service to get started</Text>
        </View>
      ) : (
        <FlatList
          data={services}
          keyExtractor={(item) => item.$id}
          scrollEnabled={false}
          renderItem={renderServiceItem}
        />
      )}
    </View>
  );
};

export default ServiceList;