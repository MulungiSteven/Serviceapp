import { View, Text } from "react-native";
import { MaterialIcons, Feather } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import { styles, colors } from "../../../styles/ProfileStyle";

const PaymentStats = () => {
  // Hardcoded stats (would come from props in real app)
  const stats = {
    totalPayments: 100,
    successfulPayments: 42,
    unsuccessfulPayments: 5,
  };

  const completionPercentage = (stats.successfulPayments / stats.totalPayments) * 100;

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <MaterialIcons name="payment" size={24} color="#667eea" />
        <ThemedText style={styles.sectionTitle}>Payment Summary</ThemedText>
      </View>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>Completion Progress</Text>
          <Text style={styles.percentageText}>{completionPercentage.toFixed(0)}%</Text>
        </View>
        
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${completionPercentage}%` }
            ]} 
          />
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <View style={[styles.statIcon, styles.successIcon]}>
              <Feather name="check-circle" size={16} color="#fff" />
            </View>
            <View>
              <Text style={styles.statNumber}>{stats.successfulPayments}</Text>
              <Text style={styles.statLabel}>Successful</Text>
            </View>
          </View>

          <View style={styles.statItem}>
            <View style={[styles.statIcon, styles.errorIcon]}>
              <Feather name="x-circle" size={16} color="#fff" />
            </View>
            <View>
              <Text style={styles.statNumber}>{stats.unsuccessfulPayments}</Text>
              <Text style={styles.statLabel}>Unsuccessful</Text>
            </View>
          </View>

          <View style={styles.statItem}>
            <View style={[styles.statIcon, styles.totalIcon]}>
              <Feather name="bar-chart" size={16} color="#fff" />
            </View>
            <View>
              <Text style={styles.statNumber}>{stats.totalPayments}</Text>
              <Text style={styles.statLabel}>Total</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};


export default PaymentStats;