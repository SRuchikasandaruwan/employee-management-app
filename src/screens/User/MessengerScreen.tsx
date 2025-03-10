import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type MessengerScreenNavigationProp = StackNavigationProp<RootStackParamList, "Messenger">;

interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
}

const MessengerScreen: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation<MessengerScreenNavigationProp>();

  const messages: Message[] = [
    { id: "1", name: "Jhona Kal", message: "Hey, How are you Buddy?", time: "10:45AM" },
    { id: "2", name: "Push Kaloi", message: "Hey, How are you Buddy?", time: "10:45AM" },
    { id: "3", name: "Leo Messi", message: "Hey, How are you Buddy?", time: "10:45AM" },
    { id: "4", name: "Anushka Sharma", message: "Hey, How are you Buddy?", time: "10:45AM" },
    { id: "5", name: "David Luice", message: "Hey, How are you Buddy?", time: "10:45AM" },
    { id: "6", name: "Yasima", message: "Hey, How are you Buddy?", time: "10:45AM" },
  ];

  const handleChatPress = (item: Message) => {
    navigation.navigate("ChatScreen", {
      name: item.name,
      message: item.message,
      time: item.time,
    });
  };

  const renderItem = ({ item }: { item: Message }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => handleChatPress(item)}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePlaceholder} />
      </View>
      <View style={styles.chatDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messenger</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search inbox"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Chat List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

export default MessengerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#2563EB",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  chatList: {
    paddingHorizontal: 10,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D1D5DB",
  },
  chatDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  message: {
    fontSize: 14,
    color: "#6B7280",
  },
  time: {
    fontSize: 12,
    color: "#9CA3AF",
  },
});
