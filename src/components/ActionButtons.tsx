import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/colors';

const buttons = [
  { image: require('../assets/Requests.png'), label: 'Requests', screen: 'Requests' },
  { image: require('../assets/Leaves.png'), label: 'Leaves', screen: 'Leaves' },
  { image: require('../assets/Attendance.png'), label: 'Attendance', screen: 'Attendance' },
  { image: require('../assets/PaySlips.png'), label: 'PaySlips', screen: 'PaySlips' },
  { image: require('../assets/ProjectTask.png'), label: 'Project Task', screen: 'ProjectTask' },
  { image: require('../assets/Team.png'), label: 'Team', screen: 'Team' },
];

const ActionButtons: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.button} 
          onPress={() => navigation.navigate(button.screen as never)}
        >
          <Image source={button.image} style={styles.image} />
          <Text style={styles.label}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  button: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 12,
    marginTop: 5,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
});

export default ActionButtons;
