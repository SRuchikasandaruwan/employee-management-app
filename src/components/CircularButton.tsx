import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";


const CircularButton: React.FC = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isClockedIn) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isClockedIn]);

  const handlePress = () => {
    setIsClockedIn(!isClockedIn);
    if (!isClockedIn) {
      setElapsedTime(0); // Reset timer when clocking in
    }
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs > 0 ? `${hrs}:` : ""}${mins}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <View style={{alignItems:'center'}}>
  
  <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <LinearGradient
        colors={isClockedIn ? ["#D32F2F", "#B71C1C"] : ["#3E43BB", "#6371F1"]}
        style={styles.button}
      >
        <Icon name="gesture-tap" size={40} color="white" />
        <Text style={styles.text}>{isClockedIn ? "Clock Out" : "Clock In"}</Text>
        {isClockedIn && <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>}
      </LinearGradient>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 220,
    height: 220,
    borderRadius: 135,
    alignContent : 'center',
    justifyContent: "center",
    alignItems: "center",
    // elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  timer: {
    color: "white",
    fontSize: 16,
    marginTop: 3,
  },
});

export default CircularButton;
