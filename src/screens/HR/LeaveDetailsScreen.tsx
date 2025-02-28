import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import Colors from '../../constants/colors';


const LeaveDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { leave } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Ionicons name="arrow-back" size={28} color="white" /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leave Details</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.bodycontainer}>

      <View style={styles.profileCard}>
        <View style={styles.profilePlaceholder} />
        <View>
          <Text style={styles.userName}>{leave?.name || "Alexa Smith"}</Text>
          <Text style={styles.applicationDate}>08 Jan, 2025</Text>
          <Text style={styles.leaveApplication}>Leave Application</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.pendingBadge}>Pending</Text>
        </View>
      </View>

      {/* Leave Details */}
      <View style={styles.leaveDetails}>
        <Text style={styles.detailsText}><Text style={styles.bold}>Type:</Text> Annual</Text>
        <Text style={styles.detailsText}>
          <Text style={styles.bold}>Date:</Text> 10 Jan 2025 - 15 Jan 2025
        </Text>
        <Text style={styles.detailsText}>
          <Text style={styles.bold}>Reason:</Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressSection}>
  <Text style={styles.daysText}>{leave?.daysTaken || 0} Days</Text>
  <ProgressBar progress={0.5} color="#3B82F6" style={{ height: 10, width: '100%' }} />

  <Text style={styles.leaveBalance}>{leave?.totalLeave || 10} Leave Available</Text>
</View>


      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.approveButton}>
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

bodycontainer:{
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64,
    paddingBottom:80,
  },
  container: {
    flex: 1,
    backgroundColor: '#6371F1',
  },
  header: {
    backgroundColor:'#6371F1',
    // flexDirection: "row",
    alignItems: "center",
    padding: 24,
    paddingTop: 100,
  },
  headerTitle: {
    alignItems: "center",
    textAlign: 'center',
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    // marginLeft: 15,
  },
  profileCard: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    margin: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  profilePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E5E7EB",
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  applicationDate: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  leaveApplication: {
    fontSize: 12,
    color: "#3B82F6",
  },
  statusContainer: {
    marginLeft: "auto",
  },
  pendingBadge: {
    backgroundColor: "#FBBF24",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
  },
  leaveDetails: {
    backgroundColor: "rgba(217, 217, 217, 0.25)",
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  detailsText: {
    fontSize: 14,
    marginBottom: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  progressSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  daysText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  progressBar: {
    width: "80%",
    height: 8,
    borderRadius: 5,
    marginVertical: 10,
  },
  leaveBalance: {
    fontSize: 12,
    color: "#6B7280",
  },
  buttonContainer: {
    // flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },
  cancelButton: {
    backgroundColor: "#FF5B5B",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    margin: 10,
    alignItems: "center",

  },
  approveButton: {
    backgroundColor: "#10B981",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    justifyContent:"center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LeaveDetailsScreen;
