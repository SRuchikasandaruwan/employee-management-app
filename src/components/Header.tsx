import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const Header: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual image
        style={styles.profileImage}
      />
      <View>
        <Text style={styles.userName}>Ruchika Sandaruwan</Text>
        <TouchableOpacity style={styles.statusContainer} onPress={toggleStatus}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: isOnline ? Colors.primary : Colors.inactive },
            ]}
          />
          <Text style={styles.statusText}>{isOnline ? 'Online' : 'Offline'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  statusText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});

export default Header;
