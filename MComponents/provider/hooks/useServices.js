import { useState, useEffect } from "react";
import { databases } from "../../../lib/appwrite";
import { ID, Query } from "react-native-appwrite";
import { Alert } from "react-native";
import * as Location from "expo-location";

const DATABASE_ID = "68c97c1700028d1fc92f";
const COLLECTION_ID = "books";

const useServices = (user) => {
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMyServices = async () => {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal("UserId", user.$id),
      ]);
      setMyServices(res.documents);
    } catch (err) {
      console.log("Error fetching services:", err);
    }
  };

  const createService = async (serviceData) => {
    try {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "Location access is required.");
        setLoading(false);
        return false;
      }

      const loc = await Location.getCurrentPositionAsync({});
      
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          UserId: user.$id,
          ...serviceData,
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          isActive: true,
        }
      );

      setLoading(false);
      await fetchMyServices();
      Alert.alert("Success", "Service created successfully! 🎉");
      return true;
    } catch (err) {
      console.log("Error creating provider:", err);
      setLoading(false);
      Alert.alert("Error", "Failed to create service. Please try again.");
      return false;
    }
  };

  useEffect(() => {
    if (user?.$id) {
      fetchMyServices();
    }
  }, [user?.$id]);

  return {
    myServices,
    loading,
    createService,
    refreshServices: fetchMyServices,
  };
};

export default useServices;