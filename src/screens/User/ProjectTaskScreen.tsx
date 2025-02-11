import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import TaskItem from "..//../components/TaskItem";
import Colors from "..//../constants/colors";

const tasks = [
  { id: "1", title: "Daily Product Meeting", time: "12:00 PM, 27 Aug, 2021", status: "In Progress" },
  { id: "2", title: "Daily Product Meeting", time: "12:00 PM, 27 Aug, 2021", status: "In Review" },
  { id: "3", title: "Daily Product Meeting", time: "12:00 PM, 27 Aug, 2021", status: "In Review" },
  { id: "4", title: "Daily Product Meeting", time: "12:00 PM, 27 Aug, 2021", status: "In Review" },
];

const ProjectTaskScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("2024-02-03");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
        <TouchableOpacity>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <Calendar
        current={selectedDate}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{ [selectedDate]: { selected: true, selectedColor: Colors.primary } }}
        theme={{
          backgroundColor: Colors.white,
          calendarBackground: Colors.white,
          textSectionTitleColor: Colors.textPrimary,
          selectedDayBackgroundColor: Colors.primary,
          selectedDayTextColor: Colors.white,
          todayTextColor: Colors.primary,
          dayTextColor: Colors.textPrimary,
        }}
      />

      {/* Task List */}
      <Text style={styles.taskTitle}>Today - {tasks.length} Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem title={item.title} time={item.time} status={item.status as "In Progress" | "In Review" | "Completed"} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    elevation: 2,
  },
  backButton: {
    fontSize: 24,
    color: Colors.textPrimary,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  addButton: {
    fontSize: 24,
    color: Colors.primary,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginHorizontal: 16,
    marginVertical: 10,
  },
});

export default ProjectTaskScreen;
