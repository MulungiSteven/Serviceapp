import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../../styles/ProfileStyle";

const ApprovalModal = ({ 
  visible, 
  selectedService, 
  approvalStatus, 
  onSetApprovalStatus, 
  onSubmit, 
  onClose 
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Service Completion</Text>
          <Text style={styles.modalSubtitle}>{selectedService?.serviceName}</Text>
          <Text style={styles.modalProvider}>by {selectedService?.provider}</Text>
          
          <Text style={styles.modalQuestion}>
            Was this service completed successfully?
          </Text>
          
          <View style={styles.approvalButtons}>
            <TouchableOpacity 
              style={[
                styles.approvalOption,
                approvalStatus === true && styles.approvalOptionSelected
              ]}
              onPress={() => onSetApprovalStatus(true)}
            >
              <Ionicons 
                name="checkmark-circle" 
                size={24} 
                color={approvalStatus === true ? "#4caf50" : "#ccc"} 
              />
              <Text style={styles.approvalOptionText}>Yes, Completed</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.approvalOption,
                approvalStatus === false && styles.approvalOptionSelected
              ]}
              onPress={() => onSetApprovalStatus(false)}
            >
              <Ionicons 
                name="close-circle" 
                size={24} 
                color={approvalStatus === false ? "#f44336" : "#ccc"} 
              />
              <Text style={styles.approvalOptionText}>No, Not Completed</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.modalButtons}>
            <TouchableOpacity 
              style={[styles.modalButton, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.modalButton, styles.submitButton]}
              onPress={onSubmit}
              disabled={approvalStatus === null}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};


export default ApprovalModal;