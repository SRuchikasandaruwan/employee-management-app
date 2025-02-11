import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { ProgressChart } from "react-native-chart-kit";

import Colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import NewLeaveRequestScreen from "./NewLeaveRequestScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";


const leaveTypes = ["Casual", "Annual", "Medical"];
const filters = ["Pending", "Approved", "Rejected"];

const leavesData = [
  {
    id: "1",
    type: "Casual",
    status: "Pending",
    from: "31/12/2024",
    to: "10/01/2025",
  },
  {
    id: "2",
    type: "Annual",
    status: "Rejected",
    from: "31/12/2024",
    to: "10/01/2025",
    reason: "Lorem ipsum dolor sit amet consectetur. Proin ut senectus amet a.",
  },
  {
    id: "3",
    type: "medical",
    status: "Pending",
    from: "31/12/2024",
    to: "10/01/2025",
  },
  {
    id: "4",
    type: "Annual",
    status: "Approved",
    from: "31/12/2024",
    to: "10/01/2025",
  },
  {
    id: "5",
    type: "Casual",
    status: "Rejected",
    from: "31/12/2024",
    to: "10/01/2025",
  },
];

const LeavesScreen: React.FC = () => {
  const [selectedType, setSelectedType] = useState("Annual");
  const [selectedFilter, setSelectedFilter] = useState("Approved");

  const filteredLeaves = leavesData.filter(
    (leave) => leave.status === selectedFilter
  );

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Top Leave Type Buttons */}
      <View style={styles.topButtons}>
        {leaveTypes.map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.leaveButton,
              selectedType === type && styles.selectedButton,
            ]}
            onPress={() => setSelectedType(type)}
          >
            <Text style={styles.buttonText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Leave Details Card */}
      <View style={styles.progesscard}>
        <Text style={styles.progesscardTitle}>{selectedType} leaves</Text>

        <ProgressChart
          data={{
            labels: ["Used"],
            data: [10 / 20], // Used leaves / Total leaves
          }}
          width={192}
          height={192}
          strokeWidth={20}
          radius={80}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: (opacity = 0.9) => `rgba(68, 69, 228, ${opacity})`, // Adjust color
          }}
          hideLegend={true}
        />

        <Text style={styles.leaveCount}>10</Text>
        <Text style={styles.leaveSubtext}>Left leaves</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(NewLeaveRequestScreen)}
          style={styles.newRequest}
        >
          <Text>Click here for a new request</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filters}>
        {filters.map((filter, index) => {
          // Define colors for each filter (modify as needed)
          const borderColors = ["#FFF20D", "#47DB9E", "#FF5B5B"];

          return (
            <TouchableOpacity

              key={filter}
              style={[
                styles.filterButton,
                {
                  borderBottomColor: borderColors[index % borderColors.length], // Cycle through colors
                },
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  { color: selectedFilter === filter ? "black" : "grey" },
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Leave Requests List */}
      <FlatList
      data={filteredLeaves}
      // nestedScrollEnabled={true} // Enable nested scrolling
      keyExtractor={(item) => item.id}
      nestedScrollEnabled={true} // Enable nested scrolling
      renderItem={({ item }) => (
        <View style={[styles.card, styles.shadow]}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.leaveType}>{item.type} Leave</Text>
            <Text style={[styles.status, item.status === "Pending" ? styles.pending : styles.rejected]}>
              {item.status}
            </Text>
          </View>

          {/* Date Section */}
          <View style={styles.dates}>
            <Text style={styles.dateText}>
              From: <Text style={styles.dateValue}>{item.from}</Text>
            </Text>
            <Text style={styles.dateText}>
              To: <Text style={styles.dateValue}>{item.to}</Text>
            </Text>
          </View>

          {/* Reason Section */}
          {item.reason && <Text style={styles.reason}>{item.reason}</Text>}

          {/* Action Buttons */}
          <View style={styles.actions}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
  },

  topButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  leaveButton: {
    justifyContent: "center",
    height: 84,
    width: 84,
    backgroundColor: "#ddd",
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 100,
    alignItems: "center",
  },

  selectedButton: {
    backgroundColor: Colors.primary,
  },

  buttonText: {
    fontFamily: "poppins",
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    justifyContent: "center",
  },

  progesscard: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },

  progesscardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
  },

  leaveCount: {
    fontSize: 48,
    fontWeight: "bold",
    marginTop: -130,
  },

  leaveSubtext: {
    marginTop: 0,
    fontSize: 14,
    color: Colors.primary,
  },

  newRequest: {
    // color: Colors.primary,
    marginTop: 80,
    textDecorationLine: "underline",
  },

  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },

  filterButton: {
    borderBottomWidth: 4,
    paddingVertical: 5,
    paddingHorizontal: 15,
    // borderRadius: 10
  },

  selectedFilter: {
    color: "black",
    // backgroundColor: Colors.primary
  },

  filterText: {
    fontWeight: "bold",
  },

  leaveItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },

  // leaveType: {
  //   fontWeight: "bold",
  //   fontSize: 16,
  // },

  // status: { 
  //   padding: 2, 
  //   borderRadius: 10, 
  //   textAlign: "center", 
  //   width: 70 
  // },

  // pending: {
  //   backgroundColor: "yellow",
  // },

  approved: {
    backgroundColor: "green",
    color: "white",
  },

  // rejected: {
  //   backgroundColor: "red",
  //   color: "white",
  // },

  // reason: { 
  //   fontStyle: "italic", 
  //   color: "#666" 
  // },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leaveType: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  pending: {
    backgroundColor: "yellow",
    color: "black",
  },
  rejected: {
    backgroundColor: "red",
  },
  dates: {
    marginTop: 10,
  },
  dateText: {
    fontSize: 12,
    color: "grey",
  },
  dateValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  reason: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
}); 

export default LeavesScreen;
