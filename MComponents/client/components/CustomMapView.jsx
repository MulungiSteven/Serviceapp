import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { MaterialIcons } from '@expo/vector-icons';
import ThemedText from "../../../shared/components/ThemedText";
import { colors, styles } from "../../../styles/ClientScreenStyles";

const GOOGLE_MAPS_API_KEY = "AIzaSyC8O-pG7KDEacOcGljnKXJm1HQYdkqkqQw";

const CustomMapView = ({ provider, clientLocation, routeInfo, onBack, onDirectionsReady }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mapHeader}>
        <TouchableOpacity 
          style={styles.mapBackButton}
          onPress={onBack}
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
          <Text style={styles.mapBackText}>Back to Details</Text>
        </TouchableOpacity>
        <ThemedText style={styles.mapTitle}>Directions to {provider.service}</ThemedText>
      </View>

      <View style={styles.fullScreenMapContainer}>
        <MapView
          style={styles.fullScreenMap}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: provider.latitude,
            longitude: provider.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker coordinate={clientLocation}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", color: "blue", fontSize: 12 }}>You</Text>
              <View style={styles.clientDot} />
            </View>
          </Marker>

          <Marker
            coordinate={{
              latitude: provider.latitude,
              longitude: provider.longitude,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", color: "red", fontSize: 12 }}>
                {provider.service}
              </Text>
              <View style={styles.providerDot} />
            </View>
          </Marker>

          <MapViewDirections
            origin={clientLocation}
            destination={{
              latitude: provider.latitude,
              longitude: provider.longitude,
            }}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={4}
            strokeColor="blue"
            onReady={onDirectionsReady}
          />
        </MapView>

        {routeInfo && (
          <View style={styles.mapRouteInfoBox}>
            <View style={styles.routeInfoItem}>
              <MaterialIcons name="distance" size={20} color={colors.primary} />
              <Text style={styles.routeInfoText}>
                Distance: {routeInfo.distance?.toFixed(2)} km
              </Text>
            </View>
            <View style={styles.routeInfoItem}>
              <MaterialIcons name="access-time" size={20} color={colors.primary} />
              <Text style={styles.routeInfoText}>
                Time: {Math.ceil(routeInfo.duration)} min
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};


export default CustomMapView;