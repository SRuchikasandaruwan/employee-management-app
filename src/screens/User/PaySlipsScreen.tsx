import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CalendarComponent from "../../components/CalendarComponent";
import { ScrollView } from "react-native-gesture-handler";

const claimsData = [
  {
    id: "1",
    title: "Business Trip",
    location: "Street, 4883 Pretty View Lane, City, NEW YORK.",
    date: "27 June - 25 July, 2021",
    amount: "$1200.00",
    status: "Reviewing",
  },
  {
    id: "2",
    title: "Business Conference",
    location: "Street, 4883 Pretty View Lane, City, NEW YORK.",
    date: "27 June - 25 July, 2021",
    amount: "$1200.00",
    status: "Not Submitted",
  },
  {
    id: "3",
    title: "Business Conference",
    location: "Street, 4883 Pretty View Lane, City, NEW YORK.",
    date: "27 June - 25 July, 2021",
    amount: "$1200.00",
    status: "Not Submitted",
  },
  {
    id: "4",
    title: "Business Trip",
    location: "Street, 4883 Pretty View Lane, City, NEW YORK.",
    date: "27 June - 25 July, 2021",
    amount: "$1200.00",
    status: "Reviewing",
  },
];

const PaySlipsScreen: React.FC = () => {
  const navigation = useNavigation();

  const renderClaimItem = ({ item }: { item: any }) => (
    <View style={styles.claimCard}>
      <Text style={styles.claimTitle}>{item.title}</Text>
      <Text style={styles.claimLocation}>{item.location}</Text>
      <Text style={styles.claimDate}>{item.date}</Text>
      <Text style={styles.claimAmount}>{item.amount}</Text>
      <View
        style={[
          styles.statusBadge,
          {
            backgroundColor:
              item.status === "Reviewing" ? "#6371F1" : "#FFCCCC",
          },
        ]}
      >
        <Text
          style={[
            styles.statusText,
            { color: item.status === "Reviewing" ? "white" : "#FF3333" },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Claims</Text>
        <TouchableOpacity onPress={() => navigation.navigate("NewExpensesScreen")}>
          <Ionicons name="add" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Claims List */}
      <FlatList
        data={claimsData}
        keyExtractor={(item) => item.id}
        renderItem={renderClaimItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  claimCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  claimTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3E43BB",
  },
  claimLocation: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  claimDate: {
    fontSize: 14,
    color: "#FF7F50",
    fontWeight: "bold",
  },
  claimAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E53935",
    marginVertical: 5,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default PaySlipsScreen;
