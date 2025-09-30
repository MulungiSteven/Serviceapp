import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, Alert, Switch } from "react-native";
import { useUser } from "../../shared/hooks/useUser";
import ThemedView from "../../shared/components/ThemedView";
import ThemedButton from "../../shared/components/ThemedButton";
import ThemedText from "../../shared/components/ThemedText";
import Spacer from "../../shared/components/Spacer";
import { styles } from "../../styles/ProfileStyle";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

// Import profile components and hooks
import ProfileHeader from "../../MComponents/profile/components/ProfileHeader";
import ServiceHistory from "../../MComponents/profile/components/ServiceHistory";
import PaymentStats from "../../MComponents/profile/components/PaymentStats";
import QuickActions from "../../MComponents/profile/components/QuickActions";
import ReviewModal from "../../MComponents/profile/components/ReviewModal";
import ApprovalModal from "../../MComponents/profile/components/ApprovalModal";

import useServiceHistory from "../../MComponents/profile/hooks/useServiceHistory";

const ProfileScreen = () => {
  const { logout, user } = useUser();
  const [view, setView] = useState("profile"); // "profile", "history", or "settings"
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    locationServices: true,
    darkMode: false,
    autoSaveOrders: true,
    quickBooking: false
  });

  // Use service history hook
  const {
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
  } = useServiceHistory();

  const handleSettingToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const SettingsPage = () => (
    <View>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButtonContainer} onPress={() => setView("profile")}>
        <MaterialIcons name="arrow-back" size={24} color="#667eea" />
        <Text style={styles.backButtonText}>Back to Profile</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="settings" size={24} color="#667eea" />
          <ThemedText style={styles.sectionTitle}>App Settings</ThemedText>
        </View>

        {/* Notification Settings */}
        <Text style={styles.settingsCategory}>Notifications</Text>
        <SettingItem
          icon="notifications"
          title="Push Notifications"
          subtitle="Receive order updates and alerts"
          value={settings.notifications}
          onToggle={() => handleSettingToggle('notifications')}
        />
        
        <SettingItem
          icon="email"
          title="Email Updates"
          subtitle="Get service recommendations and news"
          value={settings.emailUpdates}
          onToggle={() => handleSettingToggle('emailUpdates')}
        />

        {/* Service Preferences */}
        <Text style={styles.settingsCategory}>Service Preferences</Text>
        <SettingItem
          icon="my-location"
          title="Location Services"
          subtitle="Show nearby service providers"
          value={settings.locationServices}
          onToggle={() => handleSettingToggle('locationServices')}
        />
        
        {/* App Preferences */}
        <Text style={styles.settingsCategory}>Appearance</Text>
        <SettingItem
          icon="brightness-4"
          title="Dark Mode"
          subtitle="Use dark theme interface"
          value={settings.darkMode}
          onToggle={() => handleSettingToggle('darkMode')}
        />

        {/* Account Actions */}
        <Text style={styles.settingsCategory}>Account</Text>
        <TouchableOpacity style={styles.settingsButton} onPress={() => Alert.alert("Edit Profile", "Profile editing feature coming soon!")}>
          <MaterialIcons name="edit" size={20} color="#667eea" />
          <Text style={styles.settingsButtonText}>Edit Profile Information</Text>
          <MaterialIcons name="chevron-right" size={20} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsButton} onPress={() => Alert.alert("Privacy", "Review privacy settings")}>
          <MaterialIcons name="privacy-tip" size={20} color="#667eea" />
          <Text style={styles.settingsButtonText}>Privacy & Security</Text>
          <MaterialIcons name="chevron-right" size={20} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsButton} onPress={() => Alert.alert("Contact Support", "Get in touch with our support team")}>
          <MaterialIcons name="support-agent" size={20} color="#667eea" />
          <Text style={styles.settingsButtonText}>Contact Support</Text>
          <MaterialIcons name="chevron-right" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const SettingItem = ({ icon, title, subtitle, value, onToggle }) => (
    <View style={styles.settingItem}>
      <View style={styles.settingInfo}>
        <MaterialIcons name={icon} size={22} color="#667eea" />
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>
          <Text style={styles.settingSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#667eea' : '#f4f3f4'}
      />
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <ProfileHeader 
          user={user} 
          view={view} 
          onBack={() => setView("profile")} 
        />

        <Spacer size={20} />

        {view === "profile" ? (
          <>
            {/* Services Overview */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <MaterialIcons name="category" size={24} color="#667eea" />
                <ThemedText style={styles.sectionTitle}>Available Services</ThemedText>
              </View>
              <View style={styles.servicesGrid}>
                <View style={styles.serviceItem}>
                  <MaterialIcons name="music-note" size={28} color="#667eea" />
                  <Text style={styles.serviceText}>Music Entertainment</Text>
                </View>
                <View style={styles.serviceItem}>
                  <MaterialIcons name="camera-alt" size={28} color="#667eea" />
                  <Text style={styles.serviceText}>Photography</Text>
                </View>
                <View style={styles.serviceItem}>
                  <FontAwesome5 name="utensils" size={24} color="#667eea" />
                  <Text style={styles.serviceText}>Food & Catering</Text>
                </View>
                <View style={styles.serviceItem}>
                  <MaterialIcons name="event" size={28} color="#667eea" />
                  <Text style={styles.serviceText}>Event Planning</Text>
                </View>
              </View>
            </View>

            <Spacer size={20} />

            <PaymentStats />
            <Spacer size={20} />

            <QuickActions 
              onShowHistory={() => setView("history")}
              onSettings={() => setView("settings")}
            />

            <Spacer size={30} />

            {/* Sign Out Button */}
            <ThemedButton 
              onPress={logout} 
              style={styles.logoutButton}
            >
              <MaterialIcons name="logout" size={20} color="#fff" />
              <Text style={styles.logoutText}>Sign Out</Text>
            </ThemedButton>
          </>
        ) : view === "history" ? (
          <View>
            {/* Back Button for History */}
            <TouchableOpacity style={styles.backButtonContainer} onPress={() => setView("profile")}>
              <MaterialIcons name="arrow-back" size={24} color="#667eea" />
              <Text style={styles.backButtonText}>Back to Profile</Text>
            </TouchableOpacity>
            <ServiceHistory
              serviceHistory={serviceHistory}
              onReview={handleReview}
              onApproval={handleApproval}
              getApprovalStatusText={getApprovalStatusText}
              getApprovalStatusColor={getApprovalStatusColor}
            />
          </View>
        ) : (
          <SettingsPage />
        )}

        <Spacer size={20} />
      </ScrollView>

      {/* Modals */}
      <ReviewModal
        visible={reviewModalVisible}
        selectedService={selectedService}
        rating={rating}
        onSetRating={setRating}
        onSubmit={submitReview}
        onClose={() => setReviewModalVisible(false)}
      />

      <ApprovalModal
        visible={approvalModalVisible}
        selectedService={selectedService}
        approvalStatus={approvalStatus}
        onSetApprovalStatus={setApprovalStatus}
        onSubmit={submitApproval}
        onClose={() => setApprovalModalVisible(false)}
      />
    </ThemedView>
  );
};

export default ProfileScreen;