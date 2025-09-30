import { useState } from "react";
import { View, ScrollView, Alert, ActivityIndicator, Text } from "react-native";
import ThemedView from "../../shared/components/ThemedView";
import Spacer from "../../shared/components/Spacer";
import { colors, commonStyles, styles } from "../../styles/ClientScreenStyles";

// Import components and hooks
import ClientHeader from "../../MComponents/client/components/ClientHeader";
import ProviderList from "../../MComponents/client/components/ProviderList";
import ProviderDetail from "../../MComponents/client/components/ProviderDetail";
import OrderForm from "../../MComponents/client/components/OrderForm";
import PaymentScreen from "../../MComponents/client/components/PaymentScreen";
import useProviders from "../../MComponents/client/hooks/useProviders";
import useOrders from "../../MComponents/client/hooks/useOrders";
import useLocation from "../../MComponents/client/hooks/useLocation";
import CustomMapView from "../../MComponents/client/components/CustomMapView";

const ClientScreen = () => {
  const [view, setView] = useState("list");
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  // Use custom hooks
  const { filteredProviders, loading, searchQuery, filterProviders } = useProviders();
  const { 
    orderDetails, setOrderDetails, 
    quantity, setQuantity, 
    useCurrentLocation, setUseCurrentLocation, 
    customAddress, setCustomAddress, 
    orderSummary, setOrderSummary,
    handlePlaceOrder, 
    calculateOrderTotal, 
    resetOrder 
  } = useOrders();
  
  const { 
    clientLocation, setClientLocation, 
    locationError, setLocationError, 
    routeInfo, setRouteInfo, 
    requestLocationAndShowMap 
  } = useLocation();

  const handleSelectProvider = (provider) => {
    setSelectedProvider(provider);
    setView("details");
  };

  const handlePlaceOrderFlow = async () => {
    const summary = await handlePlaceOrder(selectedProvider);
    if (summary) {
      setOrderSummary(summary);
      setView("payment");
    }
  };

  const handleProcessPayment = () => {
    setPaymentProcessing(true);
    setTimeout(() => {
      setPaymentProcessing(false);
      Alert.alert(
        "Payment Successful!",
        `Your payment of $${orderSummary.total} for ${orderSummary.service} has been processed successfully via ${paymentMethod}.`,
        [{ text: "Great!", onPress: resetToProviders }]
      );
    }, 2000);
  };

  const handleShowMap = async () => {
    const location = await requestLocationAndShowMap();
    if (location) {
      setClientLocation(location);
      setView("map");
    }
  };

  const resetToProviders = () => {
    setSelectedProvider(null);
    setView("list");
    setRouteInfo(null);
    resetOrder();
    setPaymentMethod("");
    setOrderSummary(null);
  };

  if (loading && view === "list") {
    return (
      <ThemedView style={commonStyles.container}>
        <ClientHeader view={view} selectedProvider={selectedProvider} />
        <ActivityIndicator size="large" style={styles.loader} color={colors.primary} />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={commonStyles.container}>
      {view === "map" && selectedProvider && clientLocation && !locationError ? (
        <CustomMapView 
          provider={selectedProvider}
          clientLocation={clientLocation}
          routeInfo={routeInfo}
          onBack={() => setView("details")}
          onDirectionsReady={(result) => setRouteInfo({
            distance: result.distance,
            duration: result.duration,
          })}
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={commonStyles.scrollContent}>
          <ClientHeader view={view} selectedProvider={selectedProvider} />
          <Spacer size={24} />

          {view === "list" && (
            <ProviderList
              providers={filteredProviders}
              loading={loading}
              searchQuery={searchQuery}
              onFilterProviders={filterProviders}
              onSelectProvider={handleSelectProvider}
            />
          )}

          {view === "details" && selectedProvider && (
            <ProviderDetail
              provider={selectedProvider}
              onBack={resetToProviders}
              onOrder={() => setView("order")}
              onShowMap={handleShowMap}
            />
          )}

          {view === "order" && selectedProvider && (
            <OrderForm
              provider={selectedProvider}
              orderDetails={orderDetails}
              quantity={quantity}
              useCurrentLocation={useCurrentLocation}
              customAddress={customAddress}
              onOrderDetailsChange={setOrderDetails}
              onQuantityChange={setQuantity}
              onUseCurrentLocationChange={setUseCurrentLocation}
              onCustomAddressChange={setCustomAddress}
              onCalculateTotal={() => calculateOrderTotal(selectedProvider, quantity)}
              onPlaceOrder={handlePlaceOrderFlow}
              onBack={() => setView("details")}
            />
          )}

          {view === "payment" && orderSummary && (
            <PaymentScreen
              orderSummary={orderSummary}
              paymentMethod={paymentMethod}
              paymentProcessing={paymentProcessing}
              onPaymentMethodChange={setPaymentMethod}
              onProcessPayment={handleProcessPayment}
              onBack={() => setView("order")}
            />
          )}

          {locationError && (
            <View style={commonStyles.section}>
              <Text style={styles.errorText}>
                Unable to use maps without location permission.
              </Text>
            </View>
          )}
        </ScrollView>
      )}
    </ThemedView>
  );
};



export default ClientScreen;