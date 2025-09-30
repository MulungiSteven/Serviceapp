import { useState } from "react";
import { Alert } from "react-native";

const useServiceHistory = () => {
  const [serviceHistory, setServiceHistory] = useState([
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
  ]);

  const [selectedService, setSelectedService] = useState(null);
  const [rating, setRating] = useState(0);
  const [approvalStatus, setApprovalStatus] = useState(null);
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [approvalModalVisible, setApprovalModalVisible] = useState(false);

  const handleReview = (service) => {
    if (service.rating > 0) {
      Alert.alert(
        "Already Reviewed",
        "You have already reviewed this service. You can only review a service once.",
        [{ text: "OK" }]
      );
      return;
    }
    
    setSelectedService(service);
    setRating(0);
    setReviewModalVisible(true);
  };

  const handleApproval = (service) => {
    setSelectedService(service);
    setApprovalStatus(null);
    setApprovalModalVisible(true);
  };

  const submitReview = () => {
    if (rating === 0) {
      Alert.alert("Rating Required", "Please select a star rating before submitting.");
      return;
    }

    setServiceHistory(prevHistory => 
      prevHistory.map(item => 
        item.id === selectedService.id ? { ...item, rating } : item
      )
    );

    setReviewModalVisible(false);
    Alert.alert("Thank You!", "Your review has been submitted successfully.");
  };

  const submitApproval = () => {
    if (approvalStatus === null) {
      Alert.alert("Selection Required", "Please select whether the service was completed or not.");
      return;
    }

    setServiceHistory(prevHistory => 
      prevHistory.map(item => 
        item.id === selectedService.id ? { ...item, approved: approvalStatus } : item
      )
    );

    setApprovalModalVisible(false);
    Alert.alert(
      "Status Updated", 
      approvalStatus 
        ? "Service marked as completed successfully!" 
        : "Service marked as not completed."
    );
  };

  const getApprovalStatusText = (approved) => {
    if (approved === null) return "Pending Approval";
    if (approved === true) return "Approved ✓";
    if (approved === false) return "Rejected ✗";
  };

  const getApprovalStatusColor = (approved) => {
    if (approved === null) return "#666";
    if (approved === true) return "#4caf50";
    if (approved === false) return "#f44336";
  };

  return {
    serviceHistory,
    selectedService,
    rating,
    approvalStatus,
    reviewModalVisible,
    approvalModalVisible,
    setRating,
    setApprovalStatus,
    setReviewModalVisible,
    setApprovalModalVisible,
    handleReview,
    handleApproval,
    submitReview,
    submitApproval,
    getApprovalStatusText,
    getApprovalStatusColor,
  };
};

export default useServiceHistory;