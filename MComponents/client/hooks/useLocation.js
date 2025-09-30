import { useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

const useLocation = () => {
  const [clientLocation, setClientLocation] = useState(null);
  const [locationError, setLocationError] = useState(false);
  const [routeInfo, setRouteInfo] = useState(null);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocationError(true);
        return null;
      }

      const loc = await Location.getCurrentPositionAsync({});
      return loc;
    } catch (err) {
      console.log("Error getting location:", err);
      setLocationError(true);
      return null;
    }
  };

  const requestLocationAndShowMap = async () => {
    try {
      const loc = await getCurrentLocation();
      if (!loc) {
        Alert.alert("Location Required", "Unable to use maps without location access.");
        return null;
      }

      const location = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      };

      setClientLocation(location);
      setLocationError(false);
      return location;
    } catch (err) {
      console.log("Error getting location:", err);
      setLocationError(true);
      Alert.alert("Ooops", "Unable to get your location. Maps cannot be used.");
      return null;
    }
  };

  return {
    clientLocation,
    setClientLocation,
    locationError,
    setLocationError,
    routeInfo,
    setRouteInfo,
    getCurrentLocation,
    requestLocationAndShowMap,
  };
};

export default useLocation;