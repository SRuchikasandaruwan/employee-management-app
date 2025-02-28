import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import RequestsApplication from "./RequestsApplication";
import HRAttendanceScreen from "./HRAttendance Screen";

const HRHomeScreen = () => {
  const [requests, setRequests] = useState(100);
  const [leaves, setLeaves] = useState(12);
  const [paySlips, setPaySlips] = useState(15);
  const [attendance, setAttendance] = useState({
    present: 54,
    late: 15,
    absent: 20,
  });

  const navigation = useNavigation();

  const ServiceCard = ({ image, label, count }) => (
    <View style={styles.serviceCard}>
      <Image source={image} style={styles.serviceImage} />
      <Text style={styles.serviceText}>{label}</Text>
      <Text style={styles.serviceCount}>{count}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
       
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerText}>
          <Text style={styles.greeting}>Hi Alex Smith</Text>
          <Text style={styles.subtitle}>Good Morning</Text>
        </View>

      {/* Services Section */}
      <View style={styles.servicesContainer}>
        <Text style={styles.sectionTitle}>Please Choose Services</Text>
        <View style={styles.services}>
          <ServiceCard
            image={require("../../assets/Requests.png")}
            label="Requests"
            count={requests}
          />
          <ServiceCard
            image={require("../../assets/Leaves.png")}
            label="Leaves"
            count={leaves}
          />
          <ServiceCard
            image={require("../../assets/PaySlips.png")}
            label="Pay Slip"
            count={paySlips}
          />
          <ServiceCard
            image={require("../../assets/Attendance.png")}
            label="Attendance"
            count=">"
            onPress={() => navigation.navigate(HRAttendanceScreen)}
          />
        </View>
      </View>

      {/* Recent Leave Application */}
      <View style={styles.recentLeave}>
        <Text style={styles.sectionTitle}>Recent Leave Application</Text>
        <TouchableOpacity onPress={() => navigation.navigate(RequestsApplication)}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <LeaveCard
        name="Alexa Smith"
        date="27 Aug - 28 Aug, 2021"
        status="Approved"
      />

      {/* Attendance Summary */}
      <View style={styles.attendanceContainer}>
        <View style={styles.sectionTitle}>
        <Text style={styles.sectionTitle}>Today's Attendance</Text>
        <TouchableOpacity onPress={() => navigation.navigate(HRAttendanceScreen)}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.attendanceRow}>
          <AttendanceCard
            label="Presents"
            count={attendance.present}
            color="#4A90E2"
          />
          <AttendanceCard
            label="Late"
            count={attendance.late}
            color="#FFA500"
          />
          <AttendanceCard
            label="Absent"
            count={attendance.absent}
            color="#FF4C4C"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const LeaveCard = ({ name, date, status }) => (
  <View style={styles.leaveCard}>
    <View style={styles.userInfo}>
      <View style={styles.profilePic} />
      <View>
        <Text style={styles.leaveName}>{name}</Text>
        <Text style={styles.leaveDate}>{date}</Text>
        <Text style={styles.leaveType}>Sick Leave Request</Text>
      </View>
    </View>
    <Text
      style={[
        styles.statusBadge,
        status === "Approved" ? styles.approved : styles.cancelled,
      ]}
    >
      {status}
    </Text>
  </View>
);

const AttendanceCard = ({ label, count, color }) => (
  <View style={[styles.attendanceCard, { backgroundColor: color }]}>
    <Text style={styles.attendanceCount}>{count}</Text>
    <Text style={styles.attendanceLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F5F5F5" 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#6371F1",
  },
  headerText: {
    // flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#6371F1",
  },
  greeting: { color: "white", fontSize: 18, fontWeight: "bold" },
  subtitle: { color: "white", fontSize: 16 },
  servicesContainer: { padding: 20 },

  sectionTitle: { 
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  services: { flexDirection: "row", justifyContent: "space-between" },
  serviceCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 80,
  },
  serviceImage: { width: 30, height: 30 }, // Adjust size of image
  serviceText: { fontSize: 12, marginTop: 5 },
  serviceCount: { fontSize: 14, fontWeight: "bold", marginTop: 2 
  },

  recentLeave: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  seeAll: { color: "#4A90E2", fontWeight: "bold" },
  leaveCard: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: { flexDirection: "row", alignItems: "center" },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginRight: 10,
  },
  leaveName: { fontSize: 14, fontWeight: "bold" },
  leaveDate: { fontSize: 12, color: "gray" },
  leaveType: { fontSize: 12, color: "gray" },
  statusBadge: {
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  approved: { color: "green", backgroundColor: "#E8F5E9" },
  cancelled: { color: "orange", backgroundColor: "#FFF3E0" },
  attendanceContainer: { 
    paddingHorizontal: 20,
     
  },
  attendanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  attendanceCard: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 100,
  },
  attendanceCount: { fontSize: 20, fontWeight: "bold", color: "white" },
  attendanceLabel: { fontSize: 12, color: "white", marginTop: 5 },
});

export default HRHomeScreen;
