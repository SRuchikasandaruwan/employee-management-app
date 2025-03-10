<<<<<<< Updated upstream
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const TeamScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/Rectangle 5.png")} // Replace with your actual image
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Content Section */}
      <LinearGradient colors={["#6371F1", "#3E43BB"]} style={styles.content}>
        <Text style={styles.title}>Welcome to Employee Management System</Text>

        {/* Continue with Email */}
        <TouchableOpacity
          style={styles.emailButton}
          // onPress={() => navigation.navigate("LoginWithEmail")}
        >
          <Text style={styles.emailButtonText}>Continue with Email</Text>
        </TouchableOpacity>

        {/* Continue with Phone */}
        <TouchableOpacity
          style={styles.phoneButton}
          // onPress={() => navigation.navigate("LoginWithPhone")}
        >
          <Text style={styles.phoneButtonText}>Continue with Number Phone</Text>
        </TouchableOpacity>

        {/* Register */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don’t have an account? </Text>
          {/* <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity> */}
        </View>

        {/* Progress Bar
        <View style={styles.progressBar} /> */}
      </LinearGradient>
=======
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const teamData = {
  Account: [
    { id: "1", name: "Jack Rich", role: "Project Manager" },
    { id: "2", name: "Thomas Jeo", role: "Account Manager" },
  ],
  Designer: [
    { id: "3", name: "Damian Daniel", role: "UX Manager" },
    { id: "4", name: "James Rhys", role: "Managing Director" },
    { id: "5", name: "William Andi", role: "Head of Project" },
    { id: "6", name: "Alexander", role: "Project Manager" },
  ],
  "HR Admin": [
    { id: "7", name: "George Pika", role: "HR Manager" },
  ],
};

const TeamScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("Designer");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Team</Text>
      </View>
      
      <View style={styles.categoryContainer}>
        {Object.keys(teamData).map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.activeCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.activeCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={teamData[selectedCategory]}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: "https://via.placeholder.com/78" }}
              style={styles.avatar}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        )}
      />
>>>>>>> Stashed changes
    </View>
  );
};

const styles = StyleSheet.create({
<<<<<<< Updated upstream
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "#3E43BB",
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  emailButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    width: "90%",
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  emailButtonText: {
    color: "#3E43BB",
    fontWeight: "bold",
    fontSize: 16,
  },
  phoneButton: {
    backgroundColor: "#4A5AEF",
    paddingVertical: 12,
    width: "90%",
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  phoneButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  registerText: {
    color: "#ddd",
  },
  registerLink: {
    color: "#FFA500",
    fontWeight: "bold",
  },
  progressBar: {
    width: "80%",
    height: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 20,
  },
=======
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  headerTitle: { flex: 1, textAlign: "center", fontSize: 18, fontWeight: "bold" },
  categoryContainer: { flexDirection: "row", justifyContent: "center", marginBottom: 16 },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    borderRadius: 16,
    backgroundColor: "#E0E0E0",
  },
  activeCategory: { backgroundColor: "#3578E5" },
  categoryText: { fontSize: 14, color: "black" },
  activeCategoryText: { color: "white" },
  listContainer: { paddingVertical: 8 },
  card: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 12,
    margin: 6,
    borderRadius: 8,
  },
  avatar: { width: 78, height: 78, borderRadius: 39, backgroundColor: "#DDD" },
  name: { marginTop: 8, fontWeight: "bold", fontSize: 14 },
  role: { fontSize: 12, color: "gray" },
>>>>>>> Stashed changes
});

export default TeamScreen;
