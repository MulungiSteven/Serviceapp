import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import ThemedView from "../../../shared/components/ThemedView";
import Spacer from "../../../shared/components/Spacer";
import { colors, commonStyles, spacing, styles } from "../../../styles/ProviderScreenStyles";

const ServiceDetail = ({ service, onBack }) => {
  // Hardcoded stats from your original code
  const stats = {
    orders: 23,
    jobsDone: 15,
    revenue: 2450,
    reviews: {
      5: 10,
      4: 5,
      3: 4,
      2: 2,
      1: 2,
    },
  };

  const totalReviews = Object.values(stats.reviews).reduce((a, b) => a + b, 0);
  const averageRating = totalReviews > 0 
    ? ((5*stats.reviews[5] + 4*stats.reviews[4] + 3*stats.reviews[3] + 2*stats.reviews[2] + 1*stats.reviews[1]) / totalReviews).toFixed(1)
    : 0;

  const renderReviewRow = (stars, count) => {
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    return (
      <View style={styles.reviewRow}>
        <Text style={styles.reviewLabel}>{stars} ⭐</Text>
        <View style={styles.reviewBarBackground}>
          <View style={[styles.reviewBarFill, { width: `${percentage}%` }]} />
        </View>
        <Text style={styles.reviewCount}>{count}</Text>
      </View>
    );
  };

  return (
    <ThemedView style={commonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={commonStyles.scrollContent}>
        {/* Header Section */}
        <View style={commonStyles.headerGradient}>
          <View style={styles.headerContent}>
            <ThemedText style={styles.welcomeText}>{service.service}</ThemedText>
            <ThemedText style={styles.subWelcomeText}>Service Performance Dashboard</ThemedText>
          </View>
        </View>

        <Spacer size={spacing.lg} />

        {/* Service Details */}
        <View style={commonStyles.section}>
          <View style={commonStyles.sectionHeader}>
            <MaterialIcons name="info" size={24} color={colors.primary} />
            <ThemedText style={commonStyles.sectionTitle}>Service Information</ThemedText>
          </View>
          
          <View style={styles.detailCard}>
            <Text style={styles.detailTitle}>{service.service}</Text>
            <Text style={styles.detailDescription}>{service.details}</Text>
            <Text style={styles.detailInfo}>Company: {service.companyName}</Text>
            <Text style={styles.detailInfo}>Approximate Price: ${service.approximatePrice}</Text>
            <Text style={styles.detailInfo}>Location: {service.location}</Text>
            <View style={styles.statusBadge}>
              <MaterialIcons name="check-circle" size={16} color={colors.secondary} />
              <Text style={styles.statusText}>Active</Text>
            </View>
          </View>
        </View>

        <Spacer size={spacing.lg} />

        {/* Statistics Cards */}
        <View style={styles.statsGrid}>
          <View style={[styles.statCard, { backgroundColor: '#e0f2fe' }]}>
            <MaterialIcons name="shopping-cart" size={32} color={colors.primary} />
            <Text style={styles.statNumber}>{stats.orders}</Text>
            <Text style={styles.statLabel}>Total Orders</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: '#dcfce7' }]}>
            <MaterialIcons name="work" size={32} color={colors.secondary} />
            <Text style={styles.statNumber}>{stats.jobsDone}</Text>
            <Text style={styles.statLabel}>Jobs Completed</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: '#fef3c7' }]}>
            <MaterialIcons name="attach-money" size={32} color={colors.warning} />
            <Text style={styles.statNumber}>${stats.revenue}</Text>
            <Text style={styles.statLabel}>Revenue</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: '#fee2e2' }]}>
            <MaterialIcons name="star" size={32} color={colors.error} />
            <Text style={styles.statNumber}>{averageRating}</Text>
            <Text style={styles.statLabel}>Avg Rating</Text>
          </View>
        </View>

        <Spacer size={spacing.lg} />

        {/* Reviews Section */}
        <View style={commonStyles.section}>
          <View style={commonStyles.sectionHeader}>
            <MaterialIcons name="star" size={24} color={colors.primary} />
            <ThemedText style={commonStyles.sectionTitle}>Reviews Summary</ThemedText>
          </View>

          <View style={styles.ratingOverview}>
            <Text style={styles.ratingNumber}>{averageRating}</Text>
            <Text style={styles.ratingStars}>⭐⭐⭐⭐⭐</Text>
            <Text style={styles.ratingCount}>{totalReviews} reviews</Text>
          </View>

          {renderReviewRow(5, stats.reviews[5])}
          {renderReviewRow(4, stats.reviews[4])}
          {renderReviewRow(3, stats.reviews[3])}
          {renderReviewRow(2, stats.reviews[2])}
          {renderReviewRow(1, stats.reviews[1])}
        </View>

        <Spacer size={spacing.lg} />

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={onBack}
        >
          <MaterialIcons name="arrow-back" size={20} color="#fff" />
          <Text style={styles.backButtonText}>Back to My Services</Text>
        </TouchableOpacity>

        <Spacer size={spacing.xl} />
      </ScrollView>
    </ThemedView>
  );
};


export default ServiceDetail;