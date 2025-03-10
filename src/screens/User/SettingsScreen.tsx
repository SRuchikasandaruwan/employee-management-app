<<<<<<< Updated upstream
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
=======
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  FlatList,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const SettingsScreen: React.FC = () => {
  const [newsletter, setNewsletter] = useState(true);
  const [textMessage, setTextMessage] = useState(false);
  const [phoneCall, setPhoneCall] = useState(false);

  const accountOptions = [
    { id: "1", icon: "lock", title: "Change Password" },
    { id: "2", icon: "shopping-cart", title: "Order Management" },
    { id: "3", icon: "file-alt", title: "Document Management" },
    { id: "4", icon: "credit-card", title: "Payment" },
    { id: "5", icon: "sign-out-alt", title: "Sign Out" },
  ];

  const moreOptions = [
    { id: "1", icon: "money-bill-wave", title: "Currency", value: "$USD" },
    { id: "2", icon: "globe", title: "Language", value: "English" },
    { id: "3", icon: "link", title: "Linked Accounts", value: "Facebook, Google" },
  ];

  const renderAccountItem = ({ item }: { item: (typeof accountOptions)[0] }) => (
    <TouchableOpacity style={styles.optionRow}>
      <FontAwesome5 name={item.icon} size={16} color="#4B5563" style={styles.optionIcon} />
      <Text style={styles.optionText}>{item.title}</Text>
      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );

  const renderMoreOptionItem = ({ item }: { item: (typeof moreOptions)[0] }) => (
    <TouchableOpacity style={styles.optionRow}>
      <FontAwesome5 name={item.icon} size={16} color="#4B5563" style={styles.optionIcon} />
      <Text style={styles.optionText}>{item.title}</Text>
      <Text style={styles.optionValue}>{item.value}</Text>
      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
>>>>>>> Stashed changes

const SettingsScreen: React.FC = () => {
  return (
<<<<<<< Updated upstream
    <View style={styles.container}>
      <Text style={styles.text}>SettingsScreen</Text>
=======
    <ScrollView>

    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Jhon Smith</Text>
          <Text style={styles.profileRole}>Basic Member</Text>
        </View>
      </View>

      {/* Accounts Section */}
      <Text style={styles.sectionTitle}>Accounts</Text>
      <FlatList
        data={accountOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderAccountItem}
      />

      {/* More Options Section */}
      <Text style={styles.sectionTitle}>More Options</Text>

      {/* Toggle Options */}
      <View style={styles.toggleOptionRow}>
        <FontAwesome5 name="newspaper" size={16} color="#4B5563" style={styles.optionIcon} />
        <Text style={styles.optionText}>Newsletter</Text>
        <Switch value={newsletter} onValueChange={setNewsletter} />
      </View>
      <View style={styles.toggleOptionRow}>
        <FontAwesome5 name="sms" size={16} color="#4B5563" style={styles.optionIcon} />
        <Text style={styles.optionText}>Text Message</Text>
        <Switch value={textMessage} onValueChange={setTextMessage} />
      </View>
      <View style={styles.toggleOptionRow}>
        <FontAwesome5 name="phone" size={16} color="#4B5563" style={styles.optionIcon} />
        <Text style={styles.optionText}>Phone Call</Text>
        <Switch value={phoneCall} onValueChange={setPhoneCall} />
      </View>

      {/* More Settings Options */}
      <FlatList
        data={moreOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderMoreOptionItem}
      />
>>>>>>> Stashed changes
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E5E7EB",
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  profileRole: {
    fontSize: 14,
    color: "#6B7280",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2563EB",
    marginTop: 10,
    marginBottom: 5,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  toggleOptionRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "space-between",
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 14,
    flex: 1,
    color: "#4B5563",
  },
  optionValue: {
    fontSize: 14,
    color: "#6B7280",
    marginRight: 10,
  },
});
