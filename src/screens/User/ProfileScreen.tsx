import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Function to pick an image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => navigation.navigate("LoginScreen"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Ionicons name="person-circle" size={120} color="#6371F1" />
        )}
        <Ionicons
          name="camera"
          size={24}
          color="white"
          style={styles.cameraIcon}
        />
      </TouchableOpacity>

      {/* Profile Details */}
      <View style={styles.profileDetails}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@email.com</Text>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out" size={24} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
    alignItems: "center",
    paddingTop: 40,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#6371F1",
    borderRadius: 15,
    padding: 6,
  },
  profileDetails: {
    alignItems: "center",
    marginBottom: 40,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3E43BB",
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E53935",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default ProfileScreen;
