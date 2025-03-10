import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";


const ProfileStatusView = () => {
  const [isOnline, setIsOnline] = useState(true); // State to toggle online/offline status

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={require('../assets/ProfilePicture.jpg')
        }
        style={styles.profileImage}
      />
      {/* User Name and Online Status */}
      <View style={styles.textContainer}>
        <Text style={styles.userName}>Ruchika Sandaruwan</Text>
       
        <TouchableOpacity style={styles.statusContainer} onPress={toggleStatus}>
          <FontAwesome
            name="circle"
            size={12}
            color={isOnline ? '#4CAF50' : '#F44336'} // Green for online, Red for offline
          />
          <Text style={styles.statusText}>
            {isOnline ? 'Online' : 'Offline'}
          </Text>
          {/* <FontAwesome name="caret-down" size={12} color="#999" /> */}
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:340,
    height:68,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff', // Background color
    borderRadius: 32,
    elevation: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop:40,
    marginBottom: 15,
    marginHorizontal:20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  statusText: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 12,
    color: '#666',
  },
});

export default ProfileStatusView;
