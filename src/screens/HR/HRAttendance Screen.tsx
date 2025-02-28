import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HRAttendanceScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Presents");

  // Dummy attendance data
  const attendanceData = {
    Presents: [
      {
        id: "1",
        name: "John Doe",
        checkIn: "09:00 AM",
        checkOut: "05:00 PM",
        status: "Present",
      },
      {
        id: "2",
        name: "Jane Smith",
        checkIn: "09:15 AM",
        checkOut: "05:10 PM",
        status: "Present",
      },
    ],
    Late: [
      {
        id: "3",
        name: "Alex Brown",
        checkIn: "09:30 AM",
        checkOut: "09:30 PM",
        status: "Late",
      },
      {
        id: "4",
        name: "Emma Wilson",
        checkIn: "10:00 AM",
        checkOut: "07:00 PM",
        status: "Late",
      },
    ],
    Absent: [
      {
        id: "5",
        name: "Michael Johnson",
        checkIn: "--",
        checkOut: "--",
        status: "Absent",
      },
      {
        id: "6",
        name: "Sophia Lee",
        checkIn: "--",
        checkOut: "--",
        status: "Absent",
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Attendance</Text>
        <TouchableOpacity>
          <Ionicons name="calendar-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Tabs for Attendance Selection */}
      <View style={styles.tabContainer}>
        {["Presents", "Late", "Absent"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Attendance List */}
      <FlatList
        data={attendanceData[selectedTab]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
            //   source={require("../../assets/user.png")}
              style={styles.profileImage}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.checkText}>
                Check-in: <Text style={styles.time}>{item.checkIn}</Text> |
                Check-out: <Text style={styles.time}>{item.checkOut}</Text>
              </Text>
              <Text
                style={[
                  styles.status,
                  item.status === "Late" && styles.lateStatus,
                ]}
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 15 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: { fontSize: 20, fontWeight: "bold" },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#ddd",
  },
  activeTab: { backgroundColor: "#4A90E2" },
  tabText: { fontSize: 14, color: "#000" },
  activeTabText: { color: "white", fontWeight: "bold" },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  checkText: { fontSize: 12, color: "gray" },
  time: { fontWeight: "bold" },
  status: { fontSize: 14, fontWeight: "bold", color: "green", marginTop: 5 },
  lateStatus: { color: "orange" },
});

export default HRAttendanceScreen;
