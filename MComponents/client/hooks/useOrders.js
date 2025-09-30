import { useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

const useOrders = () => {
  const [orderDetails, setOrderDetails] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [useCurrentLocation, setUseCurrentLocation] = useState(true);
  const [customAddress, setCustomAddress] = useState("");
  const [orderSummary, setOrderSummary] = useState(null);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "Location access is required.");
        return null;
      }
      const loc = await Location.getCurrentPositionAsync({});
      return loc;
    } catch (err) {
      console.log("Error getting location:", err);
      return null;
    }
  };

  const calculateOrderTotal = (provider, qty) => {
    const basePrice = provider?.approximatePrice ? parseFloat(provider.approximatePrice) : 50;
    const quantity = parseInt(qty) || 1;
    return (basePrice * quantity).toFixed(2);
  };

  const handlePlaceOrder = async (provider) => {
    if (!orderDetails.trim()) {
      Alert.alert("Error", "Please enter order details");
      return null;
    }

    let finalDeliveryAddress = deliveryAddress;

    if (useCurrentLocation) {
      const loc = await getCurrentLocation();
      if (loc) {
        try {
          const addressResponse = await Location.reverseGeocodeAsync({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
          });
          
          if (addressResponse.length > 0) {
            const address = addressResponse[0];
            finalDeliveryAddress = `${address.street || ''} ${address.streetNumber || ''}, ${address.city || ''}, ${address.region || ''}`.trim();
          }
        } catch (error) {
          console.log("Error getting address:", error);
          Alert.alert("Error", "Could not get your current address. Please enter it manually.");
          return null;
        }
      } else {
        Alert.alert("Error", "Could not get your location. Please enter delivery address manually.");
        return null;
      }
    } else if (!customAddress.trim()) {
      Alert.alert("Error", "Please enter delivery address");
      return null;
    } else {
      finalDeliveryAddress = customAddress;
    }

    const summary = {
      service: provider.service,
      company: provider.companyName,
      quantity: quantity,
      details: orderDetails,
      address: finalDeliveryAddress,
      total: calculateOrderTotal(provider, quantity),
      date: new Date().toLocaleDateString()
    };

    setOrderSummary(summary);
    return summary;
  };

  const resetOrder = () => {
    setOrderDetails("");
    setQuantity("1");
    setDeliveryAddress("");
    setCustomAddress("");
    setUseCurrentLocation(true);
    setOrderSummary(null);
  };

  return {
    orderDetails,
    setOrderDetails,
    quantity,
    setQuantity,
    deliveryAddress,
    setDeliveryAddress,
    useCurrentLocation,
    setUseCurrentLocation,
    customAddress,
    setCustomAddress,
    orderSummary,
    setOrderSummary,
    handlePlaceOrder,
    calculateOrderTotal,
    resetOrder,
  };
};

export default useOrders;