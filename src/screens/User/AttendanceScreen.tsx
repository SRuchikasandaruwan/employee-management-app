import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import moment from "moment";

const CalendarComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    generateWeekDates();
  }, []);

  const generateWeekDates = () => {
    let week = [];
    for (let i = -3; i <= 3; i++) {
      let date = moment().add(i, "days");
      week.push({
        day: date.format("dd"),
        date: date.format("DD"),
        fullDate: date.format("YYYY-MM-DD"),
      });
    }
    setCalendarData(week);
  };

  return (
    <FlatList
      data={calendarData}
      horizontal
      keyExtractor={(item) => item.fullDate}
      contentContainerStyle={{ alignItems: "center" }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.dateItem,
            selectedDate === item.fullDate && styles.selectedDateItem,
          ]}
          onPress={() => {
            setSelectedDate(item.fullDate);
            onDateChange(item.fullDate);
          }}
        >
          <Text
            style={[
              styles.dayText,
              selectedDate === item.fullDate && styles.selectedDayText,
            ]}
          >
            {item.day}
          </Text>
          <Text
            style={[
              styles.dateText,
              selectedDate === item.fullDate && styles.selectedDateText,
            ]}
          >
            {item.date}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const AttendanceScreen = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));

  const attendanceData = [
    { id: "1", checkIn: "09:30 AM", checkOut: "09:30 PM", location: "8 S Jefferson St, New Ulm, MN" },
    { id: "2", checkIn: "09:30 AM", checkOut: "09:30 PM", location: "8 S Jefferson St, New Ulm, MN" },
    { id: "3", checkIn: "09:30 AM", checkOut: "09:30 PM", location: "8 S Jefferson St, New Ulm, MN" },
    { id: "4", checkIn: "09:30 AM", checkOut: "09:30 PM", location: "8 S Jefferson St, New Ulm, MN" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Attendance</Text>
      </View>

      {/* Calendar Component */}
      <CalendarComponent onDateChange={setSelectedDate} />

      {/* Attendance List */}
      <FlatList
        data={attendanceData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.attendanceCard}>
            <Image style={styles.profileImage} source={{ uri: "https://via.placeholder.com/50" }} />
            <View style={styles.details}>
              <View style={styles.row}>
                <Text style={styles.label}>Check-in</Text>
                <Text style={styles.label}>Check-out</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.timeIn}>{item.checkIn}</Text>
                <Text style={styles.timeOut}>{item.checkOut}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.locationText}>📍 {item.location}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backArrow: {
    fontSize: 22,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dateItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  selectedDateItem: {
    backgroundColor: "#1A4CD7",
  },
  dayText: {
    fontSize: 14,
    color: "#A0A3BD",
  },
  selectedDayText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6B7280",
  },
  selectedDateText: {
    color: "#FFFFFF",
  },
  attendanceCard: {
    flexDirection: "row",
    backgroundColor: "#F8F9FD",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd",
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    color: "#6B7280",
  },
  timeIn: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A4CD7",
  },
  timeOut: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D71A1A",
  },
  locationText: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 5,
  },
});

export default AttendanceScreen;
