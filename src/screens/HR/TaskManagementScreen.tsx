import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProgressChart } from "react-native-chart-kit"; 

interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  progress: number;
  color: string;
}

interface Plan {
  id: string;
  title: string;
  date: string;
  icon: string;
  color: string;
}

const TaskManagementScreen: React.FC = () => {
  const [tasks] = useState<Task[]>([
    { id: "1", title: "Marketing", description: "Creative Development", date: "12 Aug, 2021", progress: 0.5, color: "#3B82F6" },
    { id: "2", title: "Documentation", description: "Creative Development", date: "12 Aug, 2021", progress: 0.4, color: "#EF4444" },
    { id: "3", title: "Engineering", description: "Programming Development", date: "12 Aug, 2021", progress: 0.2, color: "#F59E0B" },
  ]);

  const [weeklyPlans] = useState<Plan[]>([
    { id: "1", title: "Meeting with Smith", date: "25 Aug - 12:30 pm", icon: "call", color: "#6366F1" },
    { id: "2", title: "Join Video Conference Meeting", date: "10 Aug - 10:00 am", icon: "videocam", color: "#22C55E" },
    { id: "3", title: "PowerPoint Edit Files", date: "12 Aug - 12:00 AM", icon: "document", color: "#3B82F6" },
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Task Management</Text>
        <TouchableOpacity>
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <View style={styles.taskInfo}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskDescription}>{item.description}</Text>
            </View>
            <Text style={styles.taskDate}>{item.date}</Text>

            {/* Progress Chart */}
            <View style={styles.chartContainer}>
              <ProgressChart
                data={{ data: [item.progress] }} // Chart data
                width={50} // Adjust size
                height={50}
                strokeWidth={5}
                radius={20}
                chartConfig={{
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  color: () => item.color, // Dynamic color
                  strokeWidth: 2,
                }}
                hideLegend={true} // Hide legend
              />
              <Text style={[styles.taskPercentage, { color: item.color }]}>
                {Math.round(item.progress * 100)}%
              </Text>
            </View>
          </View>
        )}
      />

      {/* Weekly Plan */}
      <Text style={styles.sectionTitle}>Weekly Plan</Text>
      <FlatList
        data={weeklyPlans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.planCard}>
            <Ionicons name={item.icon} size={24} color={item.color} style={styles.planIcon} />
            <View>
              <Text style={styles.planTitle}>{item.title}</Text>
              <Text style={styles.planDate}>{item.date}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TaskManagementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  taskInfo: {
    marginBottom: 5,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskDescription: {
    color: "#6B7280",
  },
  taskDate: {
    color: "#9CA3AF",
    fontSize: 12,
  },
  chartContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  taskPercentage: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  planCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  planIcon: {
    marginRight: 15,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  planDate: {
    color: "#9CA3AF",
    fontSize: 12,
  },
});
