import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/Feather';
import HomeScreen from '../screens/User/HomeScreen';
import SettingsScreen from '../screens/User/SettingsScreen';
import NotificationsScreen from '../screens/User/NotificationsScreen';
import ProfileScreen from '../screens/User/ProfileScreen';
import { StyleSheet, View, Text } from 'react-native';
import HRHomeScreen from '../screens/HR/HRHomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Notifications') {
            iconName = 'mail';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          
          } else if (route.name === 'HR') {
            iconName = 'hash';
          }

          return (
            <View style={[styles.iconContainer, focused && styles.focusedIcon]}>
              <Icon name={iconName} size={32} color={focused?'#6371F1':'#8A8D9F'} />
            </View>
          );
        },
        tabBarLabel: ({ focused }) => {
          let label = route.name;

          return focused ? (
            <Text style={styles.focusedLabel}>{label}</Text>
          ) : (
            <Text style={styles.unfocusedLabel}>{label}</Text>
          );
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#4CAF50', // Active icon color
        tabBarInactiveTintColor: '#A8A8A8', // Inactive icon color
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="HR" component={HRHomeScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    // backgroundColor: '#ffffff',
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    position: 'absolute',
    height: 95,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
    // elevation: 5,
    paddingTop:20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  focusedIcon: {
    // backgroundColor: '#6371F1',
  },

  focusedLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6371F1',
  },
  unfocusedLabel: {
    fontSize: 12,
    color: '#A8A8A8',
  },
});

export default TabNavigator;
