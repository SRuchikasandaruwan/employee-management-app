import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 60,000 milliseconds = 1 minute

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time without seconds
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
      <Text style={styles.date}>{currentTime.toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  time: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 18,
    color: '#666',
  },
});

export default TimeComponent;
