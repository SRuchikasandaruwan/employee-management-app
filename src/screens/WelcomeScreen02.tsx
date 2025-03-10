import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen02: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Rectangle 5.png")} // Replace with your actual image
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
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.emailButtonText}>Continue with Email</Text>
        </TouchableOpacity>

        {/* Continue with Phone */}
        <TouchableOpacity
          style={styles.phoneButton}
          onPress={() => navigation.navigate("LoginWithPhone")}
        >
          <Text style={styles.phoneButtonText}>Continue with Number Phone</Text>
        </TouchableOpacity>

        {/* Register */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
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
    backgroundColor: "#4245E4",
    paddingVertical: 12,
    width: "90%",
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  phoneButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 20,
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
});

export default WelcomeScreen02;
