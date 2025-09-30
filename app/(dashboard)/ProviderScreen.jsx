import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import { useUser } from "../../shared/hooks/useUser";
import ThemedView from "../../shared/components/ThemedView";
import ThemedLoader from "../../shared/components/ThemedLoader";
import ThemedText from "../../shared/components/ThemedText";
import Spacer from "../../shared/components/Spacer";
import { commonStyles, colors, styles } from "../../styles/ProviderScreenStyles";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { FlatList } from 'react-native';

// Import provider components and hooks
import ProviderHeader from "../../MComponents/provider/components/ProviderHeader";
import ServiceForm from "../../MComponents/provider/components/ServiceForm";
import ServiceList from "../../MComponents/provider/components/ServiceList";
import AvailableOrders from "../../MComponents/provider/components/AvailableOrders";
import OrderDetail from "../../MComponents/provider/components/OrderDetail";
import ServiceDetail from "../../MComponents/provider/components/ServiceDetail";

import useServices from "../../MComponents/provider/hooks/useServices";
import useProviderOrders from "../../MComponents/provider/hooks/useProviderOrders";

const ProviderScreen = () => {
  const { user } = useUser();
  const [view, setView] = useState("services"); // "services" or "orders"
  const [selectedService, setSelectedService] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [serviceForm, setServiceForm] = useState({
    service: "",
    companyName: "",
    approximatePrice: "",
    location: "",
    details: ""
  });

  // Use custom hooks
  const { myServices, loading: servicesLoading, createService } = useServices(user);
  const { 
    availableOrders, 
    completedOrders, 
    showCompleted, 
    setShowCompleted, 
    handleJobComplete 
  } = useProviderOrders(user);

  const handleCreateService = async () => {
    const success = await createService(serviceForm);
    if (success) {
      setServiceForm({
        service: "",
        companyName: "",
        approximatePrice: "",
        location: "",
        details: ""
      });
    }
  };

  const handleFormChange = (field, value) => {
    setServiceForm(prev => ({ ...prev, [field]: value }));
  };

  // ✅ ADD SERVICE DETAILS VIEW
  if (selectedService) {
    return (
      <ServiceDetail 
        service={selectedService} 
        onBack={() => setSelectedService(null)} 
      />
    );
  }

  if (servicesLoading) {
    return <ThemedLoader message="Setting you up as a provider..." />;
  }

  if (selectedOrder) {
    return (
      <OrderDetail
        order={selectedOrder}
        onCompleteJob={handleJobComplete}
        onBack={() => setSelectedOrder(null)}
      />
    );
  }

  return (
    <ThemedView style={commonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={commonStyles.scrollContent}>
        <ProviderHeader 
          title="Become a Provider" 
          subtitle="Offer your services to clients" 
        />

        <Spacer size={24} />

        {/* View Toggle */}
        <View style={styles.viewToggle}>
          <TouchableOpacity 
            style={[styles.toggleButton, view === "services" && styles.toggleButtonActive]}
            onPress={() => setView("services")}
          >
            <Text style={[styles.toggleButtonText, view === "services" && styles.toggleButtonTextActive]}>
              My Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.toggleButton, view === "orders" && styles.toggleButtonActive]}
            onPress={() => setView("orders")}
          >
            <Text style={[styles.toggleButtonText, view === "orders" && styles.toggleButtonTextActive]}>
              Available Orders
            </Text>
          </TouchableOpacity>
        </View>

        <Spacer size={24} />

        {view === "services" ? (
          <>
            <ServiceForm
              service={serviceForm.service}
              companyName={serviceForm.companyName}
              approximatePrice={serviceForm.approximatePrice}
              location={serviceForm.location}
              details={serviceForm.details}
              loading={servicesLoading}
              onServiceChange={(value) => handleFormChange("service", value)}
              onCompanyNameChange={(value) => handleFormChange("companyName", value)}
              onApproximatePriceChange={(value) => handleFormChange("approximatePrice", value)}
              onLocationChange={(value) => handleFormChange("location", value)}
              onDetailsChange={(value) => handleFormChange("details", value)}
              onSubmit={handleCreateService}
            />

            <Spacer size={24} />

            <ServiceList
              services={myServices}
              onSelectService={setSelectedService} 
            />

            {/* Completed Orders Toggle */}
            <View style={commonStyles.section}>
              <TouchableOpacity 
                style={styles.toggleCompletedButton}
                onPress={() => setShowCompleted(!showCompleted)}
              >
                <Text style={styles.toggleCompletedButtonText}>
                  {showCompleted ? 'Hide Completed Orders' : 'Show Completed Orders'}
                </Text>
                <MaterialIcons 
                  name={showCompleted ? "keyboard-arrow-up" : "keyboard-arrow-down"} 
                  size={24} 
                  color={colors.primary} 
                />
              </TouchableOpacity>

              {showCompleted && (
                <>
                  <View style={commonStyles.sectionHeader}>
                    <MaterialIcons name="done-all" size={24} color={colors.primary} />
                    <ThemedText style={commonStyles.sectionTitle}>Completed Orders</ThemedText>
                  </View>

                  {completedOrders.length === 0 ? (
                    <View style={styles.emptyState}>
                      <MaterialIcons name="assignment-turned-in" size={48} color={colors.textLight} />
                      <Text style={styles.emptyStateText}>No completed orders yet</Text>
                      <Text style={styles.emptyStateSubtext}>Complete your first order to see it here</Text>
                    </View>
                  ) : (
                    <FlatList
                      data={completedOrders}
                      keyExtractor={(item) => item.$id}
                      scrollEnabled={false}
                      renderItem={({ item }) => (
                        <View style={styles.completedOrderCard}>
                          <View style={styles.orderHeader}>
                            <View style={[styles.orderIcon, { backgroundColor: '#dcfce7' }]}>
                              <MaterialIcons name="done" size={20} color={colors.secondary} />
                            </View>
                            <View style={styles.orderInfo}>
                              <Text style={styles.orderTitle}>{item.serviceType}</Text>
                              <Text style={styles.orderDetails}>{item.description}</Text>
                              <Text style={styles.orderLocation}>
                                <MaterialIcons name="location-on" size={14} color={colors.textLight} />
                                {item.location}
                              </Text>
                              <Text style={styles.orderClient}>
                                <MaterialIcons name="person" size={14} color={colors.textLight} />
                                Client: {item.clientName}
                              </Text>
                              <Text style={styles.orderDate}>
                                <MaterialIcons name="event" size={14} color={colors.textLight} />
                                Completed: {new Date(item.completedAt || item.$createdAt).toLocaleDateString()}
                              </Text>
                              <View style={styles.ratingContainer}>
                                <MaterialIcons name="star" size={16} color={colors.warning} />
                                <Text style={styles.ratingText}>
                                  {item.rating > 0 ? `${item.rating}/5` : 'Not rated yet'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      )}
                    />
                  )}
                </>
              )}
            </View>
          </>
        ) : (
          <AvailableOrders
            orders={availableOrders}
            onSelectOrder={setSelectedOrder}
          />
        )}

        <Spacer size={40} />
      </ScrollView>
    </ThemedView>
  );
};

export default ProviderScreen;