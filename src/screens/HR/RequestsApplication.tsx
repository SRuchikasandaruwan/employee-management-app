import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const allRequests = [
  { id: '1', name: 'Alexa Smith', date: '27 Aug - 28 Aug, 2021', type: 'Business Trip', status: 'Approved', daysAgo: '2 Days Ago', category: 'Active' },
  { id: '2', name: 'Jack Liam', date: '27 Aug - 28 Aug, 2021', type: 'Overtime Request', status: 'Approved', daysAgo: '2 Days Ago', category: 'Active' },
  { id: '3', name: 'Mason Robert', date: '27 Aug - 28 Aug, 2021', type: 'Request for Business Trip', status: 'Approved', daysAgo: '2 Days Ago', category: 'Active' },
  { id: '4', name: 'James Rhys', date: '27 Aug - 28 Aug, 2021', type: 'Factory Visit Request', status: 'Pending', daysAgo: '2 Days Ago', category: 'Requested' },
  { id: '5', name: 'William Smith', date: '27 Aug - 28 Aug, 2021', type: 'Deport Visit Request', status: 'Cancelled', daysAgo: '2 Days Ago', category: 'Cancelled' },
  { id: '6', name: 'Ethan Joe', date: '27 Aug - 28 Aug, 2021', type: 'Client Meeting Request', status: 'Approved', daysAgo: '2 Days Ago', category: 'Active' },
];

const tabs = ["Requested", "Active", "Cancelled"];

const RequestsApplication = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Active");

  const filteredRequests = allRequests.filter(request => request.category === selectedTab);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Requests</Text>

      {/* Tabs for filtering */}
      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List of filtered requests */}
      <FlatList
        data={filteredRequests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate("LeaveDetailsScreen", { requestData: item })}
          >
            <View style={styles.cardLeft}>
              <View style={styles.profilePlaceholder} />
              <View>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.requestType}>{item.type}</Text>
              </View>
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.daysAgo}>{item.daysAgo}</Text>
              <Text
                style={[
                  styles.statusBadge,
                  item.status === "Approved" ? styles.approved : 
                  item.status === "Pending" ? styles.pending : 
                  styles.cancelled
                ]}
              >
                {item.status}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  tabContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 15 },
  tab: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, backgroundColor: '#E0E0E0', marginHorizontal: 5 },
  activeTab: { backgroundColor: '#4A90E2' },
  tabText: { fontSize: 14, color: '#000' },
  activeTabText: { color: '#fff', fontWeight: 'bold' },
  card: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: 'white', marginVertical: 5, borderRadius: 10 },
  cardLeft: { flexDirection: 'row', alignItems: 'center' },
  profilePlaceholder: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#ddd', marginRight: 10 },
  userName: { fontSize: 16, fontWeight: 'bold' },
  date: { fontSize: 12, color: 'gray' },
  requestType: { fontSize: 12, color: '#4A90E2' },
  cardRight: { alignItems: 'flex-end' },
  daysAgo: { fontSize: 12, color: 'gray' },
  statusBadge: { fontSize: 12, fontWeight: 'bold', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 },
  approved: { backgroundColor: '#43A047', color: 'white' },
  pending: { backgroundColor: '#FFC107', color: 'black' },
  cancelled: { backgroundColor: '#D32F2F', color: 'white' },
});

export default RequestsApplication;
