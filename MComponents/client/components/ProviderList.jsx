import { View, TextInput, FlatList, TouchableOpacity, Text } from "react-native";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import { colors, commonStyles, styles } from "../../../styles/ClientScreenStyles";

const ProviderList = ({ providers, loading, searchQuery, onFilterProviders, onSelectProvider }) => {
  if (loading) {
    return (
      <View style={commonStyles.section}>
        <Text style={styles.loadingText}>Loading providers...</Text>
      </View>
    );
  }

  const renderProviderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.providerCard}
      onPress={() => onSelectProvider(item)}
    >
      <View style={styles.providerHeader}>
        <View style={styles.providerIcon}>
          <FontAwesome5 name="user-tie" size={20} color={colors.primary} />
        </View>
        <View style={styles.providerInfo}>
          <Text style={styles.providerCompany}>{item.companyName}</Text>
          <Text style={styles.providerName}>{item.service}</Text>
          <Text style={styles.providerDetails} numberOfLines={2}>
            {item.details}
          </Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color={colors.textLight} />
      </View>
      {item.approximatePrice && (
        <Text style={styles.providerPrice}>${item.approximatePrice}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={commonStyles.section}>
      <View style={commonStyles.sectionHeader}>
        <MaterialIcons name="search" size={24} color={colors.primary} />
        <ThemedText style={commonStyles.sectionTitle}>Find Services</ThemedText>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by company or service..."
        placeholderTextColor={colors.textLight}
        value={searchQuery}
        onChangeText={onFilterProviders}
      />

      <FlatList
        data={providers}
        keyExtractor={(item) => item.$id}
        scrollEnabled={false}
        renderItem={renderProviderItem}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No providers found</Text>
          </View>
        }
      />
    </View>
  );
};


export default ProviderList;