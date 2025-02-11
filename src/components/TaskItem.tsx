import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

interface TaskItemProps {
  title: string;
  time: string;
  status: "In Progress" | "In Review" | "Completed";
}

const TaskItem: React.FC<TaskItemProps> = ({ title, time, status }) => {
  const getStatusColor = () => {
    switch (status) {
      case "In Progress":
        return Colors.inProgress;
      case "In Review":
        return Colors.inReview;
      case "Completed":
        return Colors.completed;
      default:
        return Colors.textSecondary;
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.statusBar, { backgroundColor: getStatusColor() }]} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: 6,
    marginHorizontal: 16,
    padding: 12,
    elevation: 3,
  },
  statusBar: {
    width: 6,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  time: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginVertical: 4,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  statusText: {
    color: Colors.white,
    fontSize: 12,
  },
});

export default TaskItem;
