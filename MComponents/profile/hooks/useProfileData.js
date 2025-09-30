import { useState, useEffect } from "react";
import { useUser } from "../../../shared/hooks/useUser";
import apiService from "../../../shared/services/apiService";

export const useProfileData = () => {
  const { user } = useUser();
  const [serviceHistory, setServiceHistory] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock service history data
  const mockServiceHistory = [
    {
      id: "1",
      serviceName: "Music Entertainment",
      provider: "DJ Services Inc",
      date: "2023-10-15",
      price: "$200",
      rating: 0,
      approved: null,
    },
    {
      id: "2",
      serviceName: "Photography",
      provider: "Photo Masters",
      date: "2023-10-10",
      price: "$150",
      rating: 5,
      approved: true,
    },
    {
      id: "3",
      serviceName: "Food & Catering",
      provider: "Tasty Catering",
      date: "2023-10-05",
      price: "$300",
      rating: 0,
      approved: false,
    },
    {
      id: "4",
      serviceName: "Event Planning",
      provider: "Perfect Events",
      date: "2023-09-28",
      price: "$400",
      rating: 4,
      approved: true,
    },
    {
      id: "5",
      serviceName: "Music Entertainment",
      provider: "DJ Services Inc",
      date: "2023-09-20",
      price: "$180",
      rating: 0,
      approved: null,
    },
  ];

  // Mock stats data
  const mockStats = {
    totalPayments: 100,
    successfulPayments: 42,
    unsuccessfulPayments: 5,
    completionPercentage: 42,
    favoriteService: "Music Entertainment",
    totalSpent: 2450,
  };

  // Fetch user's service history
  const fetchServiceHistory = async () => {
    try {
      setLoading(true);
      setError(null);

      // In real app, this would be an API call:
      // const response = await apiService.getUserOrders(user.$id, 'client');
      // setServiceHistory(response.documents);

      setServiceHistory(mockServiceHistory);
    } catch (err) {
      console.error("Error fetching service history:", err);
      setError("Failed to load service history.");
      setServiceHistory(mockServiceHistory); // fallback
    } finally {
      setLoading(false);
    }
  };

  // Fetch user stats
  const fetchUserStats = async () => {
    try {
      // In real app:
      // const response = await apiService.getUserStats(user.$id);
      setStats(mockStats);
    } catch (err) {
      console.error("Error fetching user stats:", err);
      setStats(mockStats); // fallback
    }
  };

  // Submit a review
  const submitReview = async (serviceId, rating) => {
    try {
      // In real app:
      // await apiService.submitReview(serviceId, { rating, review: reviewText });

      setServiceHistory(prev =>
        prev.map(service =>
          service.id === serviceId ? { ...service, rating } : service
        )
      );
      return true;
    } catch (err) {
      console.error("Error submitting review:", err);
      return false;
    }
  };

  // Submit service approval
  const submitApproval = async (serviceId, approved) => {
    try {
      // In real app:
      // await apiService.updateOrderStatus(serviceId, approved ? 'approved' : 'rejected');

      setServiceHistory(prev =>
        prev.map(service =>
          service.id === serviceId ? { ...service, approved } : service
        )
      );
      return true;
    } catch (err) {
      console.error("Error submitting approval:", err);
      return false;
    }
  };

  // Derived helpers
  const getServiceById = (serviceId) =>
    serviceHistory.find(service => service.id === serviceId);

  const getPendingApprovals = () =>
    serviceHistory.filter(service => service.approved === null);

  const getCompletedServices = () =>
    serviceHistory.filter(service => service.approved === true);

  const getServicesNeedingReview = () =>
    serviceHistory.filter(service => service.approved === true && service.rating === 0);

  const refreshData = async () => {
    await Promise.all([fetchServiceHistory(), fetchUserStats()]);
  };

  // Effects
  useEffect(() => {
    if (user) {
      fetchServiceHistory();
      fetchUserStats();
    }
  }, [user]);

  return {
    // State
    user,
    serviceHistory,
    stats,
    loading,
    error,

    // Actions
    submitReview,
    submitApproval,
    refreshData,
    getServiceById,

    // Derived data
    pendingApprovals: getPendingApprovals(),
    completedServices: getCompletedServices(),
    servicesNeedingReview: getServicesNeedingReview(),

    // Convenience flags
    hasServiceHistory: serviceHistory.length > 0,
    hasPendingApprovals: getPendingApprovals().length > 0,
    hasCompletedServices: getCompletedServices().length > 0,
  };
};

export default useProfileData;
