import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import moment from "moment";

const CalendarComponent = () => {
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
        day: date.format("dd"), // Su, Mo, Tu...
        date: date.format("DD"), // Numeric day
        fullDate: date.format("YYYY-MM-DD"),
      });
    }
    setCalendarData(week);
  };

  return (
    <View style={styles.container}>
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
            onPress={() => setSelectedDate(item.fullDate)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FF",
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
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
});

export default CalendarComponent;
