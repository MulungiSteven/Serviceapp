import { StyleSheet } from "react-native";

// Centralized colors
export const colors = {
  primary: '#667eea',
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  text: '#374151',
  textLight: '#6b7280',
  background: '#f8fafc',
  white: '#ffffff',
  gold: 'gold',
};

// Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  headerGradient: {
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  backText: {
    color: colors.white,
    marginLeft: 8,
    fontSize: 16,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  historyContent: {
    flex: 1,
  },
  historyService: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  historyProvider: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 8,
  },
  historyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  historyDate: {
    fontSize: 12,
    color: '#888',
  },
  historyPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  reviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f4ff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
  },
  reviewedButton: {
    backgroundColor: '#fff8e1',
  },
  reviewText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
  ratedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratedText: {
    fontSize: 12,
    color: '#ffa000',
    fontWeight: '500',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: colors.textLight,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
  modalProvider: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 20,
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 8,
  },
  ratingText: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  submitButton: {
    backgroundColor: colors.primary,
  },
  cancelButtonText: {
    color: colors.textLight,
    fontWeight: '500',
  },
  submitButtonText: {
    color: colors.white,
    fontWeight: '500',
  },
  historyActions: {
    alignItems: 'flex-end',
    gap: 8,
  },
  approvalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f4ff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
  },
  approvalText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
  approvalStatus: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
  approvalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    gap: 12,
  },
  approvalOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  approvalOptionSelected: {
    backgroundColor: '#f0f8ff',
    borderColor: colors.primary,
  },
  approvalOptionText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginTop: 8,
  },
  modalQuestion: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 5,
  },
  subWelcomeText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  section: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 10,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '48%',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f1f5f9',
    borderRadius: 15,
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
    marginTop: 8,
    textAlign: 'center',
  },
  progressContainer: {
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 15,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  percentageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  actionsRow: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 10,
  gap: 40,
},

actionButton: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f1f5f9',
  padding: 16,
  borderRadius: 12,
  width: 100,
  height: 80
},

actionText: {
  fontSize: 12,
  color: colors.text,
  marginTop: 8,
  textAlign: 'center',
},
// Add these to your existing ProfileStyle.js
settingsCategory: {
  fontSize: 16,
  fontWeight: '600',
  color: colors.text,
  marginTop: 20,
  marginBottom: 12,
  marginLeft: 4,
},
settingItem: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: '#f0f0f0',
},
settingInfo: {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
},
settingText: {
  marginLeft: 12,
  flex: 1,
},
settingTitle: {
  fontSize: 16,
  fontWeight: '500',
  color: colors.text,
  marginBottom: 2,
},
settingSubtitle: {
  fontSize: 12,
  color: colors.textLight,
  lineHeight: 16,
},
settingsButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 16,
  borderBottomWidth: 1,
  borderBottomColor: '#f0f0f0',
},
settingsButtonText: {
  fontSize: 16,
  color: colors.text,
  fontWeight: '500',
  flex: 1,
  marginLeft: 12,
},
// Add these to your existing ProfileStyle.js
backButtonContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 16,
  paddingHorizontal: 20,
  marginBottom: 10,
},
backButtonText: {
  color: '#667eea',
  fontSize: 16,
  fontWeight: '500',
  marginLeft: 8,
},

logoutButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center', // Center the content
  backgroundColor: '#ef4444', // Red background
  padding: 16,
  borderRadius: 12,
  marginHorizontal: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3.84,
  elevation: 5,
},
logoutText: {
  color: '#fff', // White text for contrast
  fontWeight: 'bold',
  fontSize: 16,
  marginLeft: 8,
  textAlign: 'center', // Ensure text is centered
},
});

