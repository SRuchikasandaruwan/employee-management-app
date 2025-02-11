import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [secureConfirmText, setSecureConfirmText] = useState(true);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>

      {/* Sign Up Form */}
      <View style={styles.card}>
        <Text style={styles.welcomeText}>Create Your Account</Text>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={20} color="#6371F1" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            autoCapitalize="words"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Location Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="location" size={20} color="#6371F1" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="call" size={20} color="#6371F1" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="#6371F1" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#6371F1" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Ionicons
              name={secureText ? "eye-off" : "eye"}
              size={20}
              color="#6371F1"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#6371F1" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={secureConfirmText}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setSecureConfirmText(!secureConfirmText)}>
            <Ionicons
              name={secureConfirmText ? "eye-off" : "eye"}
              size={20}
              color="#6371F1"
            />
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Already Have an Account */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginLink}> Sign in</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3E43BB",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F5",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: "#6371F1",
    paddingVertical: 12,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#777",
  },
  loginLink: {
    color: "#3E43BB",
    fontWeight: "bold",
  },
  progressBar: {
    width: "80%",
    height: 5,
    backgroundColor: "#3E43BB",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default SignUpScreen;
