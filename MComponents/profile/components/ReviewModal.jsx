import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../../styles/ProfileStyle";

const ReviewModal = ({ 
  visible, 
  selectedService, 
  rating, 
  onSetRating, 
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
          <Text style={styles.modalTitle}>Rate Your Experience</Text>
          <Text style={styles.modalSubtitle}>{selectedService?.serviceName}</Text>
          <Text style={styles.modalProvider}>by {selectedService?.provider}</Text>
          
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => onSetRating(star)}>
                <Ionicons
                  name={rating >= star ? "star" : "star-outline"}
                  size={32}
                  color={rating >= star ? "gold" : "#ccc"}
                />
              </TouchableOpacity>
            ))}
          </View>
          
          <Text style={styles.ratingText}>
            {rating > 0 ? `You rated: ${rating} star${rating > 1 ? 's' : ''}` : "Tap to rate"}
          </Text>
          
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
              disabled={rating === 0}
            >
              <Text style={styles.submitButtonText}>Submit Review</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};


export default ReviewModal;