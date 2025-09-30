import { databases } from "../../lib/appwrite";
import { Query, ID } from "react-native-appwrite";

const DATABASE_ID = "68c97c1700028d1fc92f";
const COLLECTIONS = {
  SERVICES: "services",
  ORDERS: "orders", 
  COMPLETED_ORDERS: "completed_orders"
};

export const apiService = {
  // ===== PROVIDER/SERVICE OPERATIONS =====
  getActiveProviders: () => 
    databases.listDocuments(DATABASE_ID, COLLECTIONS.SERVICES, [
      Query.equal("isActive", true)
    ]),

  createService: (serviceData) =>
    databases.createDocument(DATABASE_ID, COLLECTIONS.SERVICES, ID.unique(), serviceData),

  getUserServices: (userId) =>
    databases.listDocuments(DATABASE_ID, COLLECTIONS.SERVICES, [
      Query.equal("UserId", userId)
    ]),

  updateService: (serviceId, updates) =>
    databases.updateDocument(DATABASE_ID, COLLECTIONS.SERVICES, serviceId, updates),

  // ===== ORDER OPERATIONS =====
  getAvailableOrders: () =>
    databases.listDocuments(DATABASE_ID, COLLECTIONS.ORDERS, [
      Query.equal("status", "pending")
    ]),

  createOrder: (orderData) =>
    databases.createDocument(DATABASE_ID, COLLECTIONS.ORDERS, ID.unique(), orderData),

  updateOrderStatus: (orderId, status) =>
    databases.updateDocument(DATABASE_ID, COLLECTIONS.ORDERS, orderId, {
      status,
      completedAt: status === 'completed' ? new Date().toISOString() : undefined
    }),

  getUserOrders: (userId, userType) => // userType: 'client' or 'provider'
    databases.listDocuments(DATABASE_ID, COLLECTIONS.ORDERS, [
      Query.equal(userType === 'client' ? 'clientId' : 'providerId', userId)
    ]),

  // ===== COMPLETED ORDERS =====
  getCompletedOrders: (providerId) =>
    databases.listDocuments(DATABASE_ID, COLLECTIONS.COMPLETED_ORDERS, [
      Query.equal("providerId", providerId)
    ]),

  moveToCompleted: (orderData) =>
    databases.createDocument(DATABASE_ID, COLLECTIONS.COMPLETED_ORDERS, ID.unique(), orderData),

  // ===== UTILITY METHODS =====
  searchServices: (query) =>
    databases.listDocuments(DATABASE_ID, COLLECTIONS.SERVICES, [
      Query.equal("isActive", true),
      Query.or([
        Query.search('service', query),
        Query.search('companyName', query),
        Query.search('details', query)
      ])
    ])
};

export default apiService;