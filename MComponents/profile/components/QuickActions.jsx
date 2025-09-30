import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import { styles } from "../../../styles/ProfileStyle";

const QuickActions = ({ onShowHistory, onSettings }) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <MaterialIcons name="flash-on" size={24} color="#667eea" />
        <ThemedText style={styles.sectionTitle}>Quick Actions</ThemedText>
      </View>
      <View style={styles.actionsRow}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={onShowHistory}
        >
          <MaterialIcons name="history" size={24} color="#667eea" />
          <Text style={styles.actionText}>History</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={onSettings}>
          <MaterialIcons name="settings" size={24} color="#667eea" />
          <Text style={styles.actionText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuickActions;