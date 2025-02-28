import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";

const SettingsScreen = () => {
  const [attendance, setAttendance] = useState({
    present: 54,
    late: 15,
    absent: 20,
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F7FA" }}>
      {/* Header */}
      <LinearGradient
        colors={["#3E43BB", "#6371F1"]}
        style={{
          paddingTop: 50,
          paddingHorizontal: 20,
          paddingBottom: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <TouchableOpacity>
            <Ionicons name="menu" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={28} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={{ color: "white", fontSize: 18, marginTop: 10 }}>Hi Alex Smith</Text>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>Good Morning</Text>
      </LinearGradient>

      <ScrollView style={{ marginTop: 10, paddingHorizontal: 20 }}>
        {/* Services */}
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Please Choose Services</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[
            { icon: "check-circle", name: "Requests", count: 100 },
            { icon: "event-note", name: "Leaves", count: 12 },
            { icon: "receipt", name: "Pay Slip", count: 15 },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                alignItems: "center",
                backgroundColor: "white",
                padding: 15,
                borderRadius: 10,
                width: "30%",
                elevation: 2,
              }}
            >
              <MaterialIcons name={item.icon} size={30} color="#3E43BB" />
              <Text style={{ fontWeight: "bold", marginTop: 5 }}>{item.name}</Text>
              <Text style={{ color: "green", fontWeight: "bold" }}>{item.count}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Leave Application */}
        <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 15 }}>Recent Leave Application</Text>
        <View style={{ backgroundColor: "white", padding: 15, borderRadius: 10, elevation: 2 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: "#ddd",
                borderRadius: 25,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Alexa Smith</Text>
              <Text style={{ fontSize: 12, color: "#666" }}>27 Aug - 28 Aug, 2021</Text>
              <Text style={{ fontSize: 12, color: "#666" }}>Sick Leave Request</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "#FFCC00", padding: 5, borderRadius: 5 }}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#4CAF50", padding: 5, borderRadius: 5 }}>
              <Text style={{ color: "white" }}>Approve</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Attendance */}
        <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 15 }}>Today's Attendance</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[
            { label: "Presents", count: attendance.present, color: "#4CAF50" },
            { label: "Late", count: attendance.late, color: "#FFCC00" },
            { label: "Absent", count: attendance.absent, color: "#FF3B30" },
          ].map((item, index) => (
            <View
              key={index}
              style={{
                alignItems: "center",
                backgroundColor: "white",
                padding: 15,
                borderRadius: 10,
                width: "30%",
                elevation: 2,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", color: item.color }}>{item.count}</Text>
              <Text style={{ fontWeight: "bold", marginTop: 5 }}>{item.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
