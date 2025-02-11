import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HRHomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the HR Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HRHomeScreen;
