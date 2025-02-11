import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const PaySlipsScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/Rectangle 5.png")} // Replace with your image
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Content Section */}
      <LinearGradient colors={["#6371F1", "#3E43BB"]} style={styles.content}>
        <Text style={styles.title}>Welcome to Employee Management System</Text>
        <Text style={styles.description}>
          Reference site about Lorem Ipsum, giving information origins as well as a random.
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")} // Change screen name accordingly
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Progress Bar */}
        {/* <View style={styles.progressBar} /> */}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: "#ddd",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    
    color: "#3E43BB",
    fontWeight: "bold",
    fontSize: 16,
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 100,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    opacity: 0.4,
  },
  activeDot: {
    opacity: 1,
  },
  progressBar: {
    width: "80%",
    height: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 10,
  },
});

export default PaySlipsScreen;
