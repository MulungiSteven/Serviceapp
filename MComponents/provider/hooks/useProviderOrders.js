import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useProviderOrders = (user) => {
  const [availableOrders, setAvailableOrders] = useState([
    {
      $id: "order1",
      serviceType: "Plumbing Repair",
      description: "Leaky faucet in kitchen needs fixing. The drip is constant and wasting water.",
      location: "123 Main St, Apt 4B, New York, NY 10001",
      budget: "75",
      clientName: "John Smith",
      status: "pending",
      $createdAt: new Date().toISOString(),
      clientLocation: { latitude: 40.7128, longitude: -74.0060 }
    },
    {
      $id: "order2",
      serviceType: "Electrical Work",
      description: "Install ceiling fan in living room. Already have the fan, just need installation.",
      location: "456 Oak Ave, Brooklyn, NY 11201",
      budget: "120",
      clientName: "Maria Garcia",
      status: "pending",
      $createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      clientLocation: { latitude: 40.6782, longitude: -73.9442 }
    },
    {
      $id: "order3",
      serviceType: "Painting",
      description: "Paint bedroom walls. Room is 12x15 feet. Color already selected.",
      location: "789 Pine Road, Queens, NY 11354",
      budget: "250",
      clientName: "Robert Johnson",
      status: "pending",
      $createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      clientLocation: { latitude: 40.7282, longitude: -73.7949 }
    }
  ]);

  const [completedOrders, setCompletedOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  const fetchCompletedOrders = async () => {
    // In real app, this would fetch from database
    // For now, using static data
    try {
      // Simulate API call
      const completed = [
        {
          $id: "completed1",
          serviceType: "Plumbing Repair",
          description: "Fixed kitchen sink leakage",
          location: "123 Main St",
          budget: "75",
          clientName: "John Smith",
          status: "completed",
          completedAt: new Date().toISOString(),
          rating: 5
        }
      ];
      setCompletedOrders(completed);
    } catch (err) {
      console.log("Error fetching completed orders:", err);
    }
  };

  const handleJobComplete = async (orderId) => {
    try {
      const orderToComplete = availableOrders.find(order => order.$id === orderId);
      
      Alert.alert(
        "Confirm Completion",
        `Are you sure you want to mark "${orderToComplete.serviceType}" as completed?`,
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Yes, Complete",
            onPress: () => {
              setAvailableOrders(prevOrders => 
                prevOrders.filter(order => order.$id !== orderId)
              );
              
              const completedOrder = {
                ...orderToComplete,
                status: "completed",
                completedAt: new Date().toISOString(),
                rating: 0
              };
              
              setCompletedOrders(prev => [...prev, completedOrder]);
              
              Alert.alert(
                "Job Completed!",
                `You've successfully completed the ${orderToComplete.serviceType} job for ${orderToComplete.clientName}.`,
                [{ text: "OK" }]
              );
              
              setSelectedOrder(null);
            }
          }
        ]
      );
    } catch (err) {
      console.log("Error completing job:", err);
      Alert.alert("Error", "Failed to mark job as completed. Please try again.");
    }
  };

  useEffect(() => {
    fetchCompletedOrders();
  }, []);

  return {
    availableOrders,
    completedOrders,
    selectedOrder,
    showCompleted,
    setSelectedOrder,
    setShowCompleted,
    handleJobComplete,
    refreshOrders: fetchCompletedOrders,
  };
};

export default useProviderOrders;