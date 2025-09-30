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

export const typography = {
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  body: {
    fontSize: 16,
    color: colors.text,
  },
  caption: {
    fontSize: 14,
    color: colors.textLight,
  },
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
    alignItems: 'center',
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

  // Form & Input Styles
  input: {
    borderWidth: 1,
    borderColor: colors.textLight,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    backgroundColor: colors.background,
    color: colors.text,
    fontSize: 16,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: colors.textLight,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
  },

  // Service Card Styles
  serviceCard: {
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  serviceDetails: {
    fontSize: 14,
    color: colors.textLight,
  },
  serviceCompany: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 4,
  },
  servicePrice: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
    marginTop: 4,
  },
  serviceStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceStat: {
    fontSize: 12,
    color: colors.textLight,
  },

  // Order Styles
  orderCard: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  orderIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  orderInfo: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  orderDetails: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 4,
  },
  orderLocation: {
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 2,
  },
  orderBudget: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
    marginBottom: 2,
  },
  orderClient: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 2,
  },
  orderDate: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 2,
    fontStyle: 'italic',
  },
  orderActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 8,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 4,
    flex: 1,
  },
  detailsButtonText: {
    color: colors.primary,
    fontWeight: '500',
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 4,
  },
  completeButtonText: {
    color: '#fff',
    fontWeight: '500',
  },

  // View Toggle Styles
  viewToggle: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 4,
    marginHorizontal: 24,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: colors.primary,
  },
  toggleButtonText: {
    color: colors.textLight,
    fontWeight: '500',
  },
  toggleButtonTextActive: {
    color: '#fff',
  },

  // Detail Styles
  detailCard: {
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 15,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  detailDescription: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 12,
  },
  detailInfo: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 8,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcfce7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.secondary,
    marginLeft: 4,
  },

  // Stats Grid Styles
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    gap: 16,
  },
  statCard: {
    width: '48%',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'center',
  },

  // Rating & Review Styles
  ratingOverview: {
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.primary,
  },
  ratingStars: {
    fontSize: 16,
    marginVertical: 4,
  },
  ratingCount: {
    fontSize: 14,
    color: colors.textLight,
  },
  reviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  reviewLabel: {
    width: 40,
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  reviewBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginHorizontal: 12,
    overflow: 'hidden',
  },
  reviewBarFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  reviewCount: {
    width: 30,
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'right',
  },

  // Button Styles
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
  },

  // Toggle & Empty States
  toggleCompletedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: colors.background,
    borderRadius: 8,
    marginBottom: 16,
  },
  toggleCompletedButtonText: {
    color: colors.primary,
    fontWeight: '500',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
    marginTop: 4,
  },

  // Completed Order Styles
  completedOrderCard: {
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: colors.warning,
  },
});