import { StyleSheet } from "react-native";

// Design System Constants
export const colors = {
  primary: '#667eea',
  primaryDark: '#764ba2',
  secondary: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  background: '#f8fafc',
  card: '#ffffff',
  text: '#374151',
  textLight: '#6b7280',
};

export const gradients = {
  primary: ['#667eea', '#764ba2'],
  success: ['#10b981', '#059669'],
  warning: ['#f59e0b', '#d97706'],
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
};

// Common reusable styles
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    backgroundColor: colors.card,
    marginHorizontal: spacing.sm,
    padding: spacing.sm,
    borderRadius: 20,
    ...shadows.card,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginLeft: spacing.sm,
  },
});

// Component-specific styles
export const styles = StyleSheet.create({
  // Safe Area & Header Styles
  safeArea: {
    backgroundColor: colors.primary,
  },
  headerGradient: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    alignItems: 'flex-start',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subWelcomeText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },

  // Search & List Styles
  searchInput: {
    borderWidth: 1,
    borderColor: colors.textLight,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    backgroundColor: colors.background,
    color: colors.text,
    fontSize: 16,
  },
  providerCard: {
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 15,
    marginBottom: 16,
    ...shadows.card,
  },
  providerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  providerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  providerInfo: {
    flex: 1,
  },
  providerCompany: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  providerName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  providerDetails: {
    fontSize: 14,
    color: colors.textLight,
  },
  providerPrice: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: '600',
    textAlign: 'right',
  },

  // Service Detail Styles
  detailCard: {
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  detailCompany: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color: colors.primary,
  },
  detailDescription: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 22,
    color: colors.text,
  },
  detailPrice: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: '600',
    marginBottom: 8,
  },
  detailLocation: {
    fontSize: 14,
    color: colors.textLight,
  },

  // Action Button Styles
  actionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: 12,
    minWidth: 80,
    ...shadows.button,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
    marginTop: 4,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    ...shadows.button,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
  },

  // Order Form Styles
  orderCard: {
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  orderCompany: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 12,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.textLight,
    borderRadius: 12,
    padding: 16,
    backgroundColor: colors.card,
    color: colors.text,
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: colors.textLight,
    borderRadius: 12,
    padding: 16,
    backgroundColor: colors.card,
    color: colors.text,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
    marginTop: 16,
    textAlign: 'center',
  },
  orderActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.textLight,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginLeft: 8,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: '600',
  },

  // Payment Styles
  summaryBox: {
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: colors.textLight,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 10,
  },
  paymentMethod: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
    gap: 8,
  },
  paymentMethodSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  paymentMethodText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
  },
  paymentMethodTextSelected: {
    color: '#fff',
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  // Map Styles
  mapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    padding: 16,
    paddingTop: 50,
  },
  mapBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
    borderRadius: 8,
  },
  mapBackText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 4,
  },
  mapTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  fullScreenMapContainer: {
    flex: 1,
    width: '100%',
  },
  fullScreenMap: {
    width: '100%',
    height: '100%',
  },
  mapRouteInfoBox: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  routeInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  routeInfoText: {
    fontWeight: '600',
    color: colors.text,
    fontSize: 14,
  },
  clientDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "blue",
    borderWidth: 2,
    borderColor: "#fff",
  },
  providerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "red",
    borderWidth: 2,
    borderColor: "#fff",
  },
  errorText: {
    color: colors.error,
    textAlign: 'center',
    fontSize: 16,
  },

  // Empty State Styles
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
  },

  // Location Options
  locationOptions: {
    marginBottom: 16,
  },
  locationOption: {
    marginBottom: 12,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: colors.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  locationOptionText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },

  // Loading Styles
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});